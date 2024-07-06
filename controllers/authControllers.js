

const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check for name
    if (!name) {
      return res.status(400).json({
        error: "Name is required",
      });
    }

    // Check for password
    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password must be at least 6 characters long",
      });
    }

    // Check if email exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        error: "Email already exists",
      });
    }

    const hashedPassword = await hashPassword(password);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

//Login

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "No user found" });
    }

    // Check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      // Create a JWT token with an expiration time
      jwt.sign(
        {
          email: user.email,
          id: user._id,
          name: user.name,
          wishlist: user.wishlist,
        },
        process.env.VITE_JWT_SECRET,
        { expiresIn: "1h" }, // Token expires in 1 hour
        (err, token) => {
          if (err) {
            console.error("JWT sign error:", err);
            return res.status(500).json({ error: "Internal server error" });
          }
          if (!token) {
            console.error("Token is undefined");
            return res.status(500).json({ error: "Internal server error" });
          }

          // Debugging output
        //   console.log("Generated Token:", token);

          // Set the token in a cookie and send user data in response
          res
            .cookie("token", token, {
              httpOnly: true,
              secure: false, // Set to true in production with HTTPS
              // Adjust based on your environment
              // 1 hour in milliseconds
            })
            .json(user);
        }
      );
    } else {
      res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getProfile = (req, res) => {
  try {
    const { token } = req.cookies;
    // console.log("Token from cookies:", token); // Debug statement

    if (token) {
      jwt.verify(token, process.env.VITE_JWT_SECRET, {}, (err, user) => {
        if (err) {
          console.error("JWT verification error:", err);
          return res.status(401).json({ message: "Unauthorized" });
        }
        // console.log("Verified user:", user); // Debug statement
        // //   res.json(user);
        // console.log("wishlist: ", user.wishlist);
        res.json({
          _id: user.id,
          name: user.name,
          email: user.email,
          wishlist: user.wishlist,
        });
      });
    } 
    else {
      console.log("No token found in cookies"); // Debug statement
      res.json(null);
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const addToWishlist = async (req, res) => {
  const { userId, destinationName } = req.body;
//   console.log(`userid: ${userId}`);
//   console.log(`destinationName: ${destinationName}`);

  try {
    const user = await User.findById(userId);
    // console.log(`Found user: ${user}`);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.wishlist.push(destinationName);
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const deleteWishlistItem = async(req,res) => {
    const { userId, destinationName } = req.body;

    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.wishlist = user.wishlist.filter(item => item !== destinationName);
      await user.save();
  
      res.status(200).json(user);
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      res.status(500).json({ error: 'Server error' });
    }

};

module.exports = {
  test,
  RegisterUser,
  LoginUser,
  getProfile,
  addToWishlist,
  deleteWishlistItem
};

// const User = require('../models/user')


// const test = (req, res) => {
//     res.json('test is working')
// }

// const RegisterUser = (req, res) => {
//    try{
//     const {name, email, password} =  req.body;
//     //check for name
//     if(!name){
//         return res.json({
//             error: 'name is required'
//         })
//     };
//     //check for password
//     if(!password || password.length<6){
//         return res.json({
//             error:'password must be at least 6 characters long'
//         })
//     };
//     //check email
//     const checkEmail = async () => {
//         const exist = await User.findOne({ email });
//         if (exist) {
//           return res.json({
//             error:'Email already exists'
//           })
//         } else {
//            const user = createUser(name, email, password);
//            return res.json(user)
//         }
        
//       };
      
//     const createUser = async (name, email, password) => {
//         const user = await User.create({
//             name, email, password
//         })
//         return user;
//     }
//     checkEmail(); 
      
//    } catch(error){
//     console.log(error)
//    }
// }
// module.exports = {
//     test,
//     RegisterUser
// }

const User = require('../models/user');
const {hashPassword, comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken');


const test = (req, res) => {
    res.json('test is working');
};

const RegisterUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check for name
        if (!name) {
            return res.status(400).json({
                error: 'Name is required'
            });
        }

        // Check for password
        if (!password || password.length < 6) {
            return res.status(400).json({
                error: 'Password must be at least 6 characters long'
            });
        }

        // Check if email exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                error: 'Email already exists'
            });
        }

        const hashedPassword = await hashPassword(password)

        // Create new user
        const user = new User({
            name,
            email,
            password: hashedPassword
        });
        await user.save();

        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
};

//Login

const LoginUser = async (req, res) => {
    try {
        const {email, password} = req.body

        //check if user exists
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                error: 'no user found'
            })
        }

        //check if passwords match
        const match = await comparePassword(password, user.password)
        if (match){
            res.status(200).json('login successfull')
            jwt.sign({email:user.email, id: user._id, name : user.name}, process.env.VITE_JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token',token).json(user)
            })
        }
        else{
            res.status(401).json({
                error:'incorrect password'
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

const getProfile = (req, res) => {
    const {token} = req.cookies
    if(token){
        jwt.verify(token, process.env.VITE_JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.join(user)
        })
    }
    else{
        res.join(null)
    }
}




module.exports = {
    test,
    RegisterUser,
    LoginUser,
    getProfile
};

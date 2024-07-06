
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import "../Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate('/');
  };

  const handleWishlist = () => {
    navigate('/display');
  }

  const handleRegister = () => {
    navigate('/register')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={handleHomeNavigation}>
        <h1>Tour-o-partner</h1>
      </div>
      <ul className="navbar-links">
        <li onClick={handleHomeNavigation}>Home</li>
        <li>
          <Link to="footer" smooth={true} duration={2000}>
            About
          </Link>
        </li>
        <li>
          <Link to="footer" smooth={true} duration={2000}>
            Contact
          </Link>
        </li>
        <li onClick={handleWishlist}>
          Wishlist
        </li>
      </ul>
      <div className="navbar-buttons">
        <button className="signup-button" onClick={handleRegister}>Sign Up</button>
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import '../Footer.css';
import Search from "./Search";

const Footer = () => {
  return (
    <div id="footer">
      <h1 className="liner">
        Explore the world with Tour-O-Partner – Your ultimate travel companion
        for unforgettable adventures!"
      </h1>
      <Search/>
      <div className='below_line'></div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Tour-o-<span>partner</span>
          </h3>
          <h4>Your
          next adventure starts here!</h4>

          {/* <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          
          <a href="#">Blog</a>
        
          <a href="#">Pricing</a>
        
          <a href="#">About</a>
          
          <a href="#">Faq</a>
          
          <a href="#">Contact</a>
        </p> */}
        </div>

        <div className="footer-center">
          {/* <div>
          <i className="fa fa-map-marker"></i>
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div> */}

          <div>
            <img className="phone"src="/phone.png"/>
            <p>+1.555.555.5555</p>
          </div>

          <div>
          <img className="envelope"src="/email.png"/>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About us</span>
            Tour-O-Partner is your go-to travel destination finding website,
            designed to make your travel planning seamless and exciting.
          </p>

          <div className="footer-icons">
            <a href="#">
            <img className="facebook"src="/facebook.png"/>
            </a>
            <a href="#">
            <img className="twitter"src="/twitter.png"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

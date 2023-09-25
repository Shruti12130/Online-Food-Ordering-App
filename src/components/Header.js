import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-img">
                <img src = { LOGO_URL } />
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button 
                      className="login-btn" 
                      type="button" 
                      onClick={() => {
                        btnName === "Login" 
                          ? setBtnName("Logout")
                          : setBtnName("Login");
                      }}
                      >
                        { btnName }
                      </button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
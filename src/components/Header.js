import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { dataFromContext } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="header">
      <div className="logo-img">
        <img src = { LOGO_URL } />
      </div>
      <div className="navbar">
        <ul>
          <li>
            Online: {onlineStatus ? "🟢" : "🔴" }
          </li>
          <li>
            <Link to="/" > Home </Link>
          </li>
          <li>
            <Link to="/about" > About Us </Link>
          </li>
          <li>
            <Link to="/contact" > Contact Us </Link>
          </li>
          <li>
            <Link to="/cart" > Cart({cartItems.length}) </Link>
          </li>
          <li>
            <button 
              className="login-btn" 
              type="button" 

              onClick={() => {
                btnName === "Login" 
                ? setBtnName("Logout")
                : setBtnName("Login");

              }}>
                { btnName }
              </button>
          </li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
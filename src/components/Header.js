import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { APP_LOGO } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { userName } = useContext(UserContext);
  const appLogo = APP_LOGO;

  const onlineStatus = useOnlineStatus();

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={appLogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus ? "Online" : "Offline"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          {userName}
        </ul>
      </div>
    </div>
  );
};
export default Header;

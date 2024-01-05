import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  const appLogo = APP_LOGO;

  const onlineStatus = useOnlineStatus();
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
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

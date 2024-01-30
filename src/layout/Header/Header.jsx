import logo from "../../assets/image/Logo.svg";
import iconSearch from "../../assets/image/Icon_search.svg";
import iconDropdown from "../../assets/image/Icon_Dropdown.svg";

import "./Header.css";
import { useNavigate } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
const Header = () => {
  let nav = useNavigate();
  return (
    <header id="header">
      <div className="wapper">
        <div className="contentBox">
          <div className="logoBox">
            <img src={logo} alt="" />
          </div>
          <nav className="navigation mossGreen">
            <div className="nav-item">Home</div>
            <div className="nav-item">About</div>
            <div className="nav-item">
              <span>Pages</span> <img src={iconDropdown} alt="" />
            </div>
            <div
              className="nav-item"
              onClick={() => {
                nav("/shop");
              }}
            >
              Shop
            </div>
            <div className="nav-item">Projects</div>
            <div className="nav-item">News</div>
          </nav>
          <div className="searchBox">
            <input type="text" />
            <img src={iconSearch} alt="" />
          </div>
          <Cart/>
        </div>
      </div>
    </header>
  );
};

export default Header;

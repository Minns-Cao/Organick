import logo from "../../assets/image/Logo.svg";
import iconSearch from "../../assets/image/Icon_search.svg";
import iconDropdown from "../../assets/image/Icon_Dropdown.svg";

import "./Header.css";
import { useNavigate } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import { useEffect, useState } from "react";
const Header = () => {
  let nav = useNavigate();
  let [currPage, setCurrPage] = useState();
  useEffect(() => {}, [currPage]);
  return (
    <header id="header">
      <div className="wapper">
        <div className="contentBox">
          <div className="logoBox">
            <img src={logo} alt="" />
          </div>
          <nav className="navigation mossGreen">
            <div
              className={`nav-item ${currPage === "home" ? "active" : ""}`}
              onClick={() => {
                setCurrPage("home");
                nav("/");
              }}
            >
              Home
            </div>
            <div
              className={`nav-item ${currPage === "about" ? "active" : ""}`}
              onClick={() => {
                setCurrPage("about");
                nav("/about");
              }}
            >
              About
            </div>
            <div className="nav-item">
              <span>Pages</span> <img src={iconDropdown} alt="" />
            </div>
            <div
              className={`nav-item ${currPage === "shop" ? "active" : ""}`}
              onClick={() => {
                setCurrPage("shop");
                nav("/shop");
              }}
            >
              Shop
            </div>
            <div
              className={`nav-item ${currPage === "projects" ? "active" : ""}`}
              onClick={() => {
                setCurrPage("projects");
                nav("/projects");
              }}
            >
              Projects
            </div>
            <div
              className={`nav-item ${currPage === "news" ? "active" : ""}`}
              onClick={() => {
                setCurrPage("news");
                nav("/news");
              }}
            >
              News
            </div>
          </nav>
          <div className="searchBox">
            <input type="text" />
            <img src={iconSearch} alt="" />
          </div>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;

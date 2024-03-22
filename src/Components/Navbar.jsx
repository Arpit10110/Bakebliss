import React from "react";
import "../Style/Nav.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar = () => {
  function menuFun() {
    let menuBtn = document.querySelector(".MenuBtn");
    let Navbar = document.querySelector(".navItem");
    menuBtn.style = "display:none;";
    Navbar.style = "display: flex;";
  }
  function closefun() {
    if (window.innerWidth <= 600) {
      let MenuBtn = document.querySelector(".MenuBtn");
      let Navbar = document.querySelector(".navItem");
      MenuBtn.style = "display:block;";
      Navbar.style = "display:none;";
    }
  }
  return (
    <>
      <nav className="Nav">
        <div className="brandName">
          <h3>BakeBliss</h3>
        </div>
        <div className="navItem">
          <div className="BtnDiv">
            <CloseIcon onClick={closefun} className="CloseBtn" />
          </div>
          <Link  onClick={closefun} to="/">Home</Link>
          <Link  onClick={closefun} to="/shop">Shop</Link>
          <Link  onClick={closefun} to="/cart">
            <ShoppingCartIcon className="cart" />
          </Link>
          <Link  onClick={closefun} to="/contact">Contact</Link>
          <Link  onClick={closefun} to="/login">Login</Link>
        </div>
        <div className="BtnDiv">
          <MenuIcon onClick={menuFun} className="MenuBtn" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { RiShoppingCart2Line } from "react-icons/ri";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNabar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 10) {
      setNabar(true);
    } else {
      setNabar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <nav className={navbar ? "navbar-active" : "navbar"}>
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/signup">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/login">
                LOG IN
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link className="nav-links-cart" to="/cart">
                <RiShoppingCart2Line />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;

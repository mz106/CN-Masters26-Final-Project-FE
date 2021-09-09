import React,{useState} from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav (){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navStyle ={
    color: "white",
    textDecoration: "none",
    listStyleType: "none",
  };
    return (
    <>
    <nav className="Navbar">
      <div className='navbar-container'>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
         </div>      
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className = 'nav-item'>
        <Link  style={navStyle} to="/"  >
          Home
        </Link>
        </li>
        <li className = 'nav-item'>
        <Link  style={navStyle} to="/account" >
          Account
        </Link>
        </li>
        <li className = 'nav-item'>
        <Link  style={navStyle} to="/signup" >
          Sign up
        </Link>
        </li>
        <li className = 'nav-item'>
        <Link  style={navStyle}  to="/login">
          LOG IN
        </Link>
        </li>
      </ul>
      </div>
    </nav>
    </>
  );
}

export default Nav;
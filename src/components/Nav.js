import React,{useState} from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";



function Nav (){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar]= useState(false)
  // const navStyle = {
  //   color: "white",
  //   textDecoration: "none",
  //   listStyleType: "none",
  //   textTransform: "uppercase",
  //   marginRight: "12em",
  // };

  const changeNavbar =()=>{
    if (window.scrollY >=10){
      console.log("Navbar-Active")
      setNavbar(true);
    }else{
      console.log("Navbar-inactive")
      setNavbar(false);
    }
  };

  window.addEventListener("scroll",changeNavbar);


    return (
    <>
    <nav className={navbar ? "navbar-active": "navbar"}>
      <div className='navbar-container'>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
         </div>      
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className = 'nav-item'>
        <Link  className='nav-links' to="/"  >
          Home
        </Link>
        </li>
        <li className = 'nav-item'>
        <Link  className='nav-links'  to="/account" >
          Account
        </Link>
        </li>
        <li className = 'nav-item'>
        <Link className='nav-links'   to="/signup" >
          Sign up
        </Link>
        </li>
        <li className = 'nav-item'>
        <Link className='nav-links'  to="/login">
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
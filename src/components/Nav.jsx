import React from 'react'
import { Component } from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

const navStyle ={
  color: "white",
  textDecoration: "none",
  listStyleType: "none",
};

class Nav extends Component{
  state = {clicked: false}

 handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
  render(){
  return (
    <nav className="NavbarItems">
      <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>      
      <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
        <Link style={navStyle} to="/"  >
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/account" >
          <li>Account</li>
        </Link>
        <Link style={navStyle} to="/signup" >
          <li>signup</li>
        </Link>
        <Link  style={navStyle} to="/login">
          <li>LOG IN</li>
        </Link>
      </ul>
    </nav>
  );
}}

export default Nav;

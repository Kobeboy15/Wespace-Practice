import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/Navbar-Stylesheet.css';

class Navbar extends Component {
    render(){
      return (
          <header>
              <div className="navbar__container">
                  <ul className="navbar__items">
                    <li className="navbar__items--name">
                      wespace
                    </li>
                  </ul>
                  <ul className="navbar__items">
                    <li className="navbar__items--home">
                      <NavLink to="/" exact activeClassName="underline">Home</NavLink>
                    </li>
                    <li className="navbar__items--about">
                      <NavLink to="/about" exact activeClassName="underline">About</NavLink>
                    </li>
                    <li className="navbar__items--contact">Contact Us</li>
                  </ul>
              </div>
          </header>
      );
  
    }
  
  }
  
  export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";



function Navbar() {
    
   
    
    
    return (
        <nav className="navbar">
           <Link to="/">
               <img className="navbar_logo" src="./final.jpg" alt="click2cart logo" />
           </Link>
           <div className="search_component">
               <input type="text" className="navbar_search" />
               
           </div>
           <div className="navbar_main">
           <Link to={ '/login'} className="navbar_link">
              <div  className="header__option">
                 <span className="header__optionLineOne">Hello, </span>
                 <span className="header__optionLineTwo">Sign In</span>
              </div>
           </Link>

              
               <Link to="/checkout">
                   <div className="navbar_cart">
                      
                       <span className="cart_count"></span>
                   </div>
               </Link>
           </div>
        </nav>
    );
}

export default Navbar;




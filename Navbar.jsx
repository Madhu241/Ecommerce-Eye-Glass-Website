import React from 'react';
import './Navbar.css';
import WEBLOGO from '../Assests/WEBLOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass, faHeart, faUser, faUsers, faCartShopping, faLink } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Navbar=()=>{
    return(
      <>
        <nav className="navbar">
        <div className="navbar_logo">
        <img src={WEBLOGO}  alt=""/>
    </div>
    <div className="nav-menu">
        <ul id="navbar">
          <li>
          <a href="#" ><span>Home</span></a>
          </li>
          <li>
          <a href="#" >Eye Glasses Frames<FontAwesomeIcon icon={faCaretDown} /></a>
          <div className="dropdown" >
          <ul >
            <li><a href="#">Men-Eye Glasses Frames</a></li>
            <li><a href="#">Women-Eye Glasses Frames</a></li>
            <li><a href="#">Kids-Eye Glasses Frames</a></li>
          </ul>
          </div>
          </li>
          
          <li>
          <a href="#" >Sun Glasses<FontAwesomeIcon icon={faCaretDown} /></a>

          <div className="dropdown">
          <ul>
            <li><a href="#">Men-Eye Glasses Frames</a></li>
            <li><a href="#">Women-Eye Glasses Frames</a></li>
            
          </ul>
          </div>
          </li>
          <li>
          <a href="#">Contact Lenses</a>
          </li>
          <li>
          <a href="#">Our Stores</a>
          </li>
          <div className="icons">
         
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icons"/>
          <FontAwesomeIcon icon={faHeart} className="icons" />
          
          <NavLink to="/Login"><FontAwesomeIcon icon={faUser} className="icons"/>

          </NavLink>
          
          <NavLink to="/Aboutus"><FontAwesomeIcon icon={faUsers} className="icons"/></NavLink>
            <FontAwesomeIcon icon={faCartShopping} className="icons"/>

  
          </div>
          <div className="nav_cart_count">
            0
          </div>
        </ul>
        </div>
      
    </nav>
<Outlet></Outlet>
   
   </>


     );
};


    
export default Navbar;
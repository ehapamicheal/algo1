import "./navbar.css"
import {Link, NavLink} from 'react-router-dom';
import Logo from '../images/Group.png';
import {links} from '../data';
// import { FaBars } from "react-icons/fa6";
// import { IoMdClose } from "react-icons/io";
import hamburgerSvg from "../svgs/hamburger.svg";
import closeSvg from "../svgs/close.svg";

import React, { useState } from "react";

const Navbar = () => {

   const [isNavShowing, setIsNavShowing] = useState(false);  
  return (
        <nav>

            <div className="container nav-container">
                <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo" />
                </Link>

                <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
                    {
                        links.map(({name, path}, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({isActive}) => isActive ? "active-nav" : ""} onClick={() => setIsNavShowing (prev => !prev)}>{name}</NavLink>
                                </li>
                            )
                        })
                    }

                </ul>

                <div className="nav_right-side">
                    <Link to="/contact" className="btn">Contact Us</Link>
                    <span>ENG</span>
                 
                </div>

                {/* <button className="nav-toggle-btn" onClick={() => setIsNavShowing (prev => !prev)}>
                    {
                        isNavShowing ? <IoMdClose/> : <FaBars/>
                    }
                </button> */}

                <button className="nav-toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    <img src={isNavShowing ? closeSvg : hamburgerSvg} alt="Navigation toggle icon" />
                </button>

            </div>

        </nav>
    
    )
}




export default Navbar;

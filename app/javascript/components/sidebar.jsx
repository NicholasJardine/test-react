import React, { Component} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';


const Sidebar = ({isOpen, toggle}) => {

        return(
                <aside className={isOpen ? 'clicked-sidebar' : 'unclicked-sidebar'}  onClick={toggle} >
                    <div className="icon" onClick={toggle}>
                        <FaTimes className="close-icon"/>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="sidebar-menu">
            
                    <Link className="sidebar-link" to='about' smooth={true} duration={500} spy={true} exact='true' offset= {-80}>About</Link>
                 
                    <Link className="sidebar-link" to='discover' smooth={true} duration={500} spy={true} exact='true' offset= {-80}>Discover</Link>
                    <Link className="sidebar-link" to='discover' smooth={true} duration={500} spy={true} exact='true' offset= {-80}>News</Link>
                            <a className="sidebar-link" herf="users/sign_up">
                                Sign Up
                            </a> 
                            <Link className="sidebar-link">
                                About
                            </Link>
                                </ul>
                        <div className="sidebtn-wrap">
                            <a href="users/sign_in" className="sidebar-route">Sign in</a>
                        </div>
                    </div>
                </aside>

        )
    }
export default Sidebar;
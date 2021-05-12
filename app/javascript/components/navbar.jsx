import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'

import logoimage from '../images/logo.png'
const Navbar = ({toggle}) => {
    return (
        <nav className="navbar-pict">
            <div className="navbar-container">
                <LinkR className="navlogo">
                    <img src={logoimage}></img>
                </LinkR>
                <div onClick={toggle} className="mobile-icon">
                    <FaBars className="open-icon"></FaBars>
                </div>
                <ul>
                    <li>
                    <LinkS className="white-and-gold" to='about' smooth={true} duration={500} spy={true} exact='true' offset= {-80}>About</LinkS>
                    </li>
                    <li>
                    <LinkS className="white-and-gold" to='discover' smooth={true} duration={500} spy={true} exact='true' offset= {-80}>Discover</LinkS>
                    </li>
                    <li>
                    <LinkR to="#">News</LinkR>
                    </li>
                    <li>
                    <LinkR to="#">Search Actors</LinkR>
                    </li>
                    <li>
                    <a href="users/sign_up">Sign Up</a>
                    </li>
                </ul>
                    <nav className="navbtn">
                    <a href="users/sign_in">Sign In</a>
                    </nav>
            </div>
        </nav>
    )
}

export default Navbar
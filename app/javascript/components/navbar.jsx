import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="navbar-pict">
            <div className="navbar-container">
                <ul>
                    <li>
                    <LinkR to="#">blablabla</LinkR>
                    </li>
                    <li>
                    <LinkR to="#">blablabla</LinkR>
                    </li>
                    <li>
                    <LinkR to="#">blablabla</LinkR>
                    </li>
                    <li>
                    <LinkR to="#">blablabla</LinkR>
                    </li>
                </ul>
                    <nav className="navbtn">
                    <LinkR>Sign In</LinkR>
                    </nav>
            </div>
        </nav>
    )
}

export default Navbar
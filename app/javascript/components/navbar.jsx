import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="navbar-pict">
        <nav>
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
            </div>
        </nav>

        </div>
    )
}

export default Navbar
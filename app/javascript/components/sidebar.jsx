import React from 'react';
import { FaBars } from "react-icons/fa";
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';


const style = {
    opacity: `${({isOpen}) => (isOpen ? '100%' : '0')}`,
    top: `${({isOpen}) => (isOpen ? '0' : '-100%')}`
}



const Sidebar = ({isOpen, toggle}) => {
    return (
<aside className="sidebar-container" isOpen={isOpen} toggle={toggle} style={style} >
    <div className="icon" onClick={toggle}>
        <FaBars className="close-icon"/>
    </div>
    <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
            <Link className="sidebar-link">
                About
            </Link>
            <Link className="sidebar-link">
                About
            </Link>

            <Link className="sidebar-link">
                About
            </Link> 
            <Link className="sidebar-link">
                About
            </Link>
                   </ul>
        <div className="sidebtn-wrap">
            <LinkR className="sidebar-route"></LinkR>
        </div>
    </div>
</aside>

    )
}

export default Sidebar
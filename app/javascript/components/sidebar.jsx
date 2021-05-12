import React, { Component} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';





// const Sidebar = ({isOpen, toggle}) => {
//     return (
// <aside className="sidebar-container" isOpen={isOpen} toggle={toggle} >
//     <div className="icon" onClick={toggle}>
//         <FaTimes className="close-icon"/>
//     </div>
//     <div className="sidebar-wrapper">
//         <ul className="sidebar-menu">
//             <Link className="sidebar-link">
//                 About
//             </Link>
//             <Link className="sidebar-link">
//                 About
//             </Link>

//             <Link className="sidebar-link">
//                 About
//             </Link> 
//             <Link className="sidebar-link">
//                 About
//             </Link>
//                    </ul>
//         <div className="sidebtn-wrap">
//             <LinkR className="sidebar-route"></LinkR>
//         </div>
//     </div>
// </aside>

//     )
// }

// export default Sidebar



// const Sidebar = ({isOpen, toggle}) => {
//     return (
// <aside className="sidebar-container" isOpen={isOpen} toggle={toggle} >
//     <div className="icon" onClick={toggle}>
//         <FaTimes className="close-icon"/>
//     </div>
//     <div className="sidebar-wrapper">
//         <ul className="sidebar-menu">
//             <Link className="sidebar-link">
//                 About
//             </Link>
//             <Link className="sidebar-link">
//                 About
//             </Link>

//             <Link className="sidebar-link">
//                 About
//             </Link> 
//             <Link className="sidebar-link">
//                 About
//             </Link>
//                    </ul>
//         <div className="sidebtn-wrap">
//             <LinkR className="sidebar-route"></LinkR>
//         </div>
//     </div>
// </aside>

//     )
// }

// export default Sidebar



class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state={
          clicked: false  
        };
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    }
    render(){
        return(
                <aside className={this.state.clicked ? 'clicked-sidebar' : 'unclicked-sidebar'} onClick={this.handleClick} >
                    <div className="icon" onClick={this.handleClick}>
                        <FaTimes className="close-icon"/>
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
}
export default Sidebar;
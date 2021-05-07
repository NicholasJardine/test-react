import React from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-wrap">
                <div className="footer-links-container">
                    <div className="footer-links-wrapper">
                        <div className="footer-links-item">
                            <h1 className='footer-links-title'>About Us</h1>
                            <Link to="#" className="footer-link"> Testimonials</Link>
                            <Link to="#" className="footer-link"> Investors</Link>
                            <Link to="#" className="footer-link"> Terms of Service</Link>
                        </div>

                        <div className="footer-links-item">
                            <h1 className="footer-links-title">About Us</h1>
                            <Link to="#" className="footer-link"> Testimonials</Link>
                            <Link to="#" className="footer-link"> Investors</Link>
                            <Link to="#" className="footer-link"> Terms of Service</Link>
                        </div>

                        <div className="footer-links-item">
                            <h1 className="footer-links-title">About Us</h1>
                            <Link to="#" className="footer-link"> Testimonials</Link>
                            <Link to="#" className="footer-link"> Investors</Link>
                            <Link to="#" className="footer-link"> Terms of Service</Link>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
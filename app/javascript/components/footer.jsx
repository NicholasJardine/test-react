import React from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin,FaYoutube} from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-wrap">
                <div className="footer-links-container">
                    <div className="footer-links-wrapper">
                        <div className="footer-links-item">
                            <h1 className='footer-links-title'>About Us</h1>
                            <Link to="#" className="footer-link"> How it works</Link>
                            <Link to="#" className="footer-link"> Testimonials</Link>
                            <Link to="#" className="footer-link"> Investors</Link>
                            <Link to="#" className="footer-link"> Terms of Service</Link>
                        </div>

                        <div className="footer-links-item">
                            <h1 className="footer-links-title">Videos</h1>
                            <Link to="#" className="footer-link"> Submit Video</Link>
                            <Link to="#" className="footer-link"> Ambassadors</Link>
                            <Link to="#" className="footer-link"> Agency</Link>
                            <Link to="#" className="footer-link"> Influencer</Link>
                        </div>

                        <div className="footer-links-item">
                            <h1 className="footer-links-title">Contact Us</h1>
                            <Link to="#" className="footer-link"> Contact</Link>
                            <Link to="#" className="footer-link"> Support</Link>
                            <Link to="#" className="footer-link"> FAQ</Link>
                            <Link to="#" className="footer-link"> Sponsorships</Link>
                        </div>


                        <div className="footer-links-item">
                            <h1 className="footer-links-title">Social Media</h1>
                            <Link to="#" className="footer-link"> Instagram</Link>
                            <Link to="#" className="footer-link"> Facebook</Link>
                            <Link to="#" className="footer-link"> YouTube</Link>
                            <Link to="#" className="footer-link"> Twitter</Link>
                        </div>

                    </div>
                </div>
                <div className="social-media">
                    <div className="social-media-wrap">
                      <Link to="#" className="social-logo">Pictor</Link>  
                      <small className="web-rights">Pictor © 2021 All rights reserved.</small>
                      <div className="social-icons">
                          <a className="social-icon-link" href="#" target="_blank" aria-label="Facebook" >                                <FaFacebook /></a>
                          <a className="social-icon-link" href="#" target="_blank" aria-label="Instagram" >                                <FaInstagram /></a>
                          <a className="social-icon-link" href="#" target="_blank" aria-label="Youtube" >                                <FaYoutube /></a>
                          <a className="social-icon-link" href="#" target="_blank" aria-label="Twitter" >                                <FaTwitter /></a>
                          <a className="social-icon-link" href="#" target="_blank" aria-label="Linkedin" >                                <FaLinkedin /></a>
                      </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react';
import './Footer.css'
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook_icon.png';
import twitter from '../../assets/twitter_icon.png';
import linkedin from '../../assets/linkedin_icon.png';


const Footer = () => {
    return (
       <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logo} alt=""/>
                <p>Lorem ipsum dolor sit consectetur .</p>
            </div><div className="footer-social-icons">
                <img src={facebook} alt="" /><img src={twitter} alt="" /><img src={linkedin} alt="" />
            </div>
                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                             <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Delivery</li>
                                <li>Privacy policy</li>

                             </ul>
                    </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+123-456-898</li>
                    <li>constact@tomato.com</li>
                </ul>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 &copy Tomato.com - All Right Reserved.</p>

        </div>
       </div>
    );
};

export default Footer;
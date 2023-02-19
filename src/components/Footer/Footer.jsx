import React from 'react';
import './footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
                <img src={Github} alt="GitHub" />
                <img src={Instagram} alt="Instagram" />
                <img src={LinkedIn} alt="LinkedIn" />
            </div>
            <div className="logo-f">
                <img src={Logo} alt="logo" />
            </div>
        </div>
        <div className='footer-last'>© Digvijay Sethi | 2023</div>;

        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>
    </div>
  )
}

export default Footer
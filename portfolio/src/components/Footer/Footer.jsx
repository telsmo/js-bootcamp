import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const icons = {
        facebook: faFacebook,
        twitter: faTwitter,
        instagram: faInstagram,
    };
    return (
        <footer>
        <div className="footer-container">
            <div className="contact-info">
            <h3>Contacto</h3>
            <p><i className="fa fa-envelope"></i> max@power.com</p>
            <p><i className="fa fa-phone"></i> 555-1234</p>
            <p><i className="fa fa-map-marker"></i> Calle Falsa 123, Ciudad</p>
            </div>
            <div className="social-media">
            <h3>Redes sociales</h3>
            <ul>
                <li><a href="#"><FontAwesomeIcon icon={icons.facebook} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={icons.twitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={icons.instagram} /></a></li>
            </ul>
            </div>
        </div>
        </footer>
    );
};

export default Footer;

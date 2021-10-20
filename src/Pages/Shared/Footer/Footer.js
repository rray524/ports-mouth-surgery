import React, { memo } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import './Footer.css'

const Footer = memo(() => {
    return (
        <div className="footer-wrap">
            <div className="text-center">
                <img src={logo} alt="" />
            </div>
            <div className="copyright text-center">
                <Container><p className="mt-3">© 2021 Ports Mouth INC: QPA 13-2798. Site by Rahul.

                </p></Container>
            </div>
        </div>
    );
});

export default Footer;
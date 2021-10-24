import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Footer = memo(() => {
    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: -37.7045503,
        lng: 145.0892998
    };
    return (
        <div className="footer-wrap">
            <Row>
                <Col xs={12} md={12}>
                    <div className="map-header">
                        <h2 className="text-center">Our Location</h2>
                    </div>
                    <LoadScript
                        googleMapsApiKey="AIzaSyCCL9JdKGccWshdCau_r-ESk_JvypEpcbo"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={14}
                        >
                            { /* Child components, such as markers, info windows, etc. */}
                            <></>
                        </GoogleMap>
                    </LoadScript>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={4} style={{ backgroundColor: "#135b6d", color: "white" }} className="footer-logo text-white text-center footer-block">
                    <NavLink to="/"><h2 className="footer-header">PortsMouth Surgery</h2></NavLink>
                </Col>
                <Col xs={12} md={4} style={{ backgroundColor: "#008EB2" }} className="footer-block text-center">
                    <h3>PortsMouth Surgery</h3>
                    <p>520 Greensborough Road, Greensborough VIC 3088</p>
                </Col>
                <Col xs={12} md={4} style={{ backgroundColor: "#007FA0" }} className="text-white footer-block text-center">
                    <h3>Watsonia Road Medical Centre</h3>
                    <p>19 Watsonia Road, Watsonia VIC 3087</p>
                </Col>
            </Row>

            <div className="copyright text-center">
                <Container><p className="mt-3">© 2021 Ports Mouth INC: QPA 13-2798. Site by Rahul.

                </p></Container>
            </div>
        </div>
    );
});

export default Footer;
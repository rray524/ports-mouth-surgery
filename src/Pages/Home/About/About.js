import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../../images/about-us.png'

const About = () => {
    return (
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={6}>
                    <img src={aboutImg} alt="" />
                </Col>
                <Col xs={6} md={6}>
                    xs=6 md=4
                </Col>
            </Row>
        </Container>
    );
};

export default About;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../../images/about-us.png';
import './About.css'

const About = () => {
    return (
        <div className="about-wrap">
            <Container>

                <Row>
                    <Col xs={12} md={6}>
                        <div className="about-img">
                            <img src={aboutImg} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mt-5">
                        <h2>About Us</h2>
                        <p>Ports Mouth Surgery has been servicing the local community since 1985.  Watsonia Road Medical Centre, a new purpose-built clinic opened in 2019 to cater for the growing needs of our patients.  The doctors from both clinics have always endeavoured to provide the highest quality of service with professionalism and compassion.  With the wide range of special areas of interest, expertise and skills among the medical staff at the two clinics, you will find all your healthcare needs will be well managed.  All the staff believe in holistic management of each individual, encompassing mental, physical and emotional health. </p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default About;
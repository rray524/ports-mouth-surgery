import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../hooks/Sidebar';

const PatientForm = () => {
    const sideBar = Sidebar();
    return (
        <Container className="my-5">
            <Row>
                <Col xs={12} md={8}>
                    <h2 className='my-5'>Patient Form</h2>
                    <a className='phn' href="tel:123-456-7890">Call us at 123-456-7890</a>
                    <br />
                    <a className="mail" href="mailto: grs@gmail.com">Email: grs@gmail.com</a><br /><br />

                    <p>We appreciate feedback, please use the attached form for any comments you may have about Ports Mouth Surgery and Watsonia Road Medical Centre.
                        Please email any completed forms to grs@gmail.com</p>

                    <p>If you would like to make a complaint to a government body contact the Health Services Commissioner:</p>

                    <h4>Health Services Commissioner</h4>
                    Level 26, 570 Ports Mouth Street<br />
                    Victoria, 3000<br />
                    Phone: (03) 1111111111<br />
                    Fax: (03) 11111111<br /><br />

                    <a href="https://docs.google.com/document/d/1ouLB4aOx0NnwjPIO80JWQZH2XWgHfMSX/edit" target="_blank" rel="noreferrer">
                        <button className="btn btn-warning">Download the Form</button>
                    </a>


                </Col>
                <Col xs={12} md={4}>
                    {sideBar}
                </Col>
            </Row>
        </Container >
    );
};

export default PatientForm;
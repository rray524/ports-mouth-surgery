import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../hooks/Sidebar';

const Contact = () => {
    const sideBar = Sidebar();
    return (
        <Container className="my-5">
            <Row>
                <Col xs={12} md={8}>
                    < h2 className='my-5' > Contact</h2 >
                    <p>Phone (03)9435 0711</p>

                    <p>Email: grs@gmail.com</p>

                    <p>It is important you notify us of any change of address and phone number immediately. We will ask you to identify yourself with your current address and date of birth.</p>

                    <p>If you have a change of name please attend the surgery with the appropriate documentation.</p>

                    <p>Opening hours</p>

                    <p>PortsMouth Surgery</p>

                    <p>Monday 8.00am – 7.00pm</p>
                    <p>Tuesday 8.00am – 7.00pm</p>
                    <p>Wednesday 8.00am – 7.00pm</p>
                    <p>Thursday 8.00am – 7.00pm</p>
                    <p>Friday 8.00am – 7.00pm</p>
                    <p>Saturday 9.00am – 12.00pm</p>
                    <p>Sunday CLOSED</p>
                    <p>Public Holidays CLOSED</p>
                </Col>
                <Col xs={12} md={4}>
                    {sideBar}
                </Col>
            </Row>




        </Container >
    );
};

export default Contact;
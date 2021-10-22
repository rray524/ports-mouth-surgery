import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../hooks/Sidebar';
import feeImg from '../../images/fees.png';
import './Fees.css'

const Fees = () => {
    const sideBar = Sidebar();
    return (
        <Container my-5>
            <h2 className="my-5">Fees</h2>
            <Row>
                <Col xs={12} md={8}>
                    <img className="fees-img" src={feeImg} alt="" />
                </Col>
                <Col xs={12} md={4}>
                    {sideBar}
                </Col>
            </Row>
        </Container>
    );
};

export default Fees;
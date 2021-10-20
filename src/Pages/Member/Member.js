import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Member = ({ team }) => {
    const { name, img } = team;
    return (
        <Col xs={12} md={4}>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>

                </Card.Body>

            </Card>
        </Col>
    );
};

export default Member;
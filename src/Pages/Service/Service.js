import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, id } = service;
    return (

        <Col xs={12} md={4}>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 182)}
                    </Card.Text>
                </Card.Body>
                <Link to={`/service/${id}`}>
                    <Button variant="primary" size="lg">
                        Learn More
                    </Button>
                </Link>
            </Card>
        </Col>
    );
};

export default Service;
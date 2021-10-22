import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import jsonData from '../../data/serviceData.json';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../hooks/Sidebar';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceID } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(jsonData)
    }, [])

    const foundProduct = services?.find((service) => service.id === Number(serviceID));
    console.log(foundProduct);

    // sidebar
    const sideBar = Sidebar();
    return (
        <Container className="my-5">
            <Row>
                <Col xs={12} md={8}>
                    <img className="service-img mb-3" src={foundProduct?.img} alt="" />
                    <h2>{foundProduct?.name}</h2>
                    <p>{foundProduct?.description}</p>
                </Col>
                <Col xs={12} md={4}>{sideBar}</Col>
            </Row>
        </Container>
    );

};

export default ServiceDetails;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import jsonData from '../../../data/serviceData.json';
import Service from '../../Service/Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        setServices(jsonData)
    }, [])
    return (
        <div className="service-wrap">
            <h2 className='text-center mb-5'>Our Medical Services</h2>
            <Container>
                <Row xs={2} md={2} lg={3} className="g-3">

                    {
                        services.map((service, idx) => <Service key={idx} service={service}></Service>)
                    }


                </Row>
            </Container>
        </div>
    );
};

export default Services;
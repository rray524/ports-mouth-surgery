import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import errorImg from '../../images/404.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <Container className="my-5 text-center">
            <img className="error-img" src={errorImg} alt="" />
            <div className="redirect-button my-5">
                <Link to="/">
                    <Button className="redirect-btn" variant="secondary" size="lg">
                        Return To Home
                    </Button>
                </Link>
            </div>
        </Container>
    );
};

export default NotFound;
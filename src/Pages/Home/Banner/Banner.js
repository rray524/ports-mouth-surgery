import React from 'react';
import logo from '../../../images/logo.png'
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slider1 from '../../../images/slider-1.jpg';
import slider2 from '../../../images/slider-2.jpg'

const Banner = () => {
    return (
        <Carousel fade>

            <Carousel.Item>
                <img
                    className="d-block w-100 slider"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <h3>We welcome new patients from all communities <br />and look forward to seeing you at one of our clinics. </h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <h3>We welcome new patients from all communities <br />and look forward to seeing you at one of our clinics. </h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;
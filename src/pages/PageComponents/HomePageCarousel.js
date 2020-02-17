import './styles/HomePageCarousel.css'
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const HomePageCarousel = () => {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
    
    return(
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} className="carousel-main-container">
        <Carousel.Item className="carousel-item-container">
            <img
            className="home-page-image"
            src={`${process.env.REACT_APP_BASE_URL}/images/carousel-image-1.png`}
            alt="First slide"
            />
        </Carousel.Item>

        <Carousel.Item className="carousel-item-container">
            <img
            className="home-page-image"
            src={`${process.env.REACT_APP_BASE_URL}/images/carousel-image-2.png`}
            alt="Third slide"
            />
            </Carousel.Item>

        <Carousel.Item className="carousel-item-container">
            <img
            className="home-page-image"
            src={`${process.env.REACT_APP_BASE_URL}/images/carousel-image-3.png`}
            alt="Third slide"
            />
        </Carousel.Item>

        </Carousel>
    )
}

export default HomePageCarousel;
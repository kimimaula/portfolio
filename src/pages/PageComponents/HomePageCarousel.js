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
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="home-page-image"
            src={`${process.env.REACT_APP_BASE_URL}/images/blue_abstract_background.jpg`}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>Welcome to my profile!</h5>
            <p>I hope you love it!</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="home-page-image"
            src={`${process.env.REACT_APP_BASE_URL}/images/brand.png`}
            alt="Third slide"
            />
    
            <Carousel.Caption>
            <p>Self-Taught Web Developer, Dreamer</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="home-page-image"
            src={`${process.env.REACT_APP_BASE_URL}/images/background-3.jpg`}
            alt="Third slide"
            />
    
            <Carousel.Caption>
            <h5>This is what I built!</h5>
            <p>Scroll down to see more details!</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default HomePageCarousel;
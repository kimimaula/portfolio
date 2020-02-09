import './styles/HomePage.css';

import React from 'react';

import Container from 'react-bootstrap/Container';
import HomePageAccordion from './PageComponents/HomePageAccordion'
import HomePageCarousel from './PageComponents/HomePageCarousel'

const HomePage = () => {

return(
    <Container fluid className="home-page">
    <HomePageCarousel/>
    <HomePageAccordion/>
    </Container>
    )
}

export default HomePage
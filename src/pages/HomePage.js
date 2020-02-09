import './styles/HomePage.css';

import React from 'react';

import Container from 'react-bootstrap/Container';
import HomePageAccordion from './PageComponents/HomePageAccordion'
import HomePageCarousel from './PageComponents/HomePageCarousel'

const HomePage = () => {

function test() {
    console.log(process.env.REACT_APP_BASE_URL)
}

return(
    <Container fluid className="home-page">
    <HomePageCarousel/>
    <HomePageAccordion/>
    <button onClick={test}></button>
    </Container>
    )
}

export default HomePage
import './styles/PageSpinner.css'
import React from 'react';

import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner';

const PageSpinner = () => {

    return(
        <Container className ="profile-spinner">
            <Spinner animation="grow" variant="info" />
        </Container>
    )
}

export default PageSpinner;
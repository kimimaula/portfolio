import './styles/ErrorPage.css'
import React from 'react'
import Container from 'react-bootstrap/Container'

const ErrorPage = () => {

    return(
        <Container className='error-page'>
        <h4> Oops, Something Went Wrong</h4>
        <h5> Please refresh or go back to home</h5>
        </Container>
    )
}

export default ErrorPage;
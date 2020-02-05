import './styles/AuthenticationPage.css'
import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import setAuthToken from '../utils/setAuthToken';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Context } from '../hoc/Store'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner';
import ErrorModal from './Modal/ErrorModal';


const Auth = () => {
    
    let history = useHistory()
    const [ show, setShow ] = useState(false)
    const handleClose = () => setShow(false);
    const [ state, dispatch] = useContext(Context);
    const [ errormessage, setErrorMessage ] = useState()
    const { register, handleSubmit, errors } = useForm()
    const [ isSubmitting , setIsSubmitting ] = useState(false)

    const onSubmit = logInData => {
        setIsSubmitting(true)
            axios({
                method: 'post',
                url: "/api/user/login",
                data: {
                    email: logInData.email,
                    password: logInData.password
                },
              })
            .then(res => {
                const { token } = res.data;
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch({
                    type: 'SET_CURRENT_USER',
                    payload :  decoded
                });
                localStorage.setItem("jwtToken", token);
                })
            .catch(function (error) {
                    setShow(true)
                    setErrorMessage(error.response.data.message)
                 })
        setIsSubmitting(false)
    }

    useEffect(() => {
        if (state.isAuthenticated) {
            history.push("/shopper")
        }
    },[state.isAuthenticated]) 
    
    return (
        <Form className='authpage-box' onSubmit={handleSubmit(onSubmit)}>
        <ErrorModal show={show} handleClose={handleClose} errorMessage={errormessage}/>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true, pattern: /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/ })} />
                <Form.Text className="text-muted"> You can just use the email test12345@test.com or just enter a random email to test out the input validation or error modal</Form.Text>
                {errors.email &&
                errors.email.type === "required" &&
                <p className="error-text">This field is required</p>}
                {errors.email &&
                errors.email.type === "pattern" &&
                <p className="error-text">Please enter valid email address</p>}
            </Form.Group>
            
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" name="password" ref={register({ required: true, minLength: 6})} />
                <Form.Text className="text-muted"> Enter your password or the test password test12345 or enter random password to test out the input validation and error modal </Form.Text>
                {errors.password &&
                errors.password.type === "required" &&
                <p className="error-text">This field is required</p>}
                {errors.password &&
                errors.password.type === " minLength" &&
                <p className="error-text">Password must be more than 6 letters</p>}
            </Form.Group>
            {isSubmitting ? <Spinner animation="border" variant="primary" /> : 
            <Button type="submit">Submit</Button>}
        </Form>
        
    )
}

export default Auth;
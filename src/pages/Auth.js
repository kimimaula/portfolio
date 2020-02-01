import './styles/AuthenticationPage.css'
import React, { useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import setAuthToken from "../utils/setAuthToken";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Context } from '../hoc/Store'

const Auth = () => {
    const [state, dispatch] = useContext(Context);
    let history = useHistory()

    useEffect(() => {
        if (state.isAuthenticated) {
            history.push("/shopper")
        }
    },[state.isAuthenticated]) 
    
    return (
        <Card className='AuthenticationPageBox'>
        <Card.Title>Login</Card.Title>
        <Formik
                initialValues={{ 
                    email: '',
                    password: '',
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } 
                    return errors;
                }}
                onSubmit={ async (values, { setSubmitting }) => {
                    try{
                        axios
                        .post("/api/user/login", {
                            email: values.email,
                            password: values.password
                        })
                        .then(res => {
                        const { token } = res.data;
                        console.log(token)
                        setAuthToken(token);
                        const decoded = jwt_decode(token);
                        console.log(decoded)
                        dispatch({
                            type: 'SET_CURRENT_USER',
                            payload :  decoded
                        });
                        localStorage.setItem("jwtToken", token);
                        })
                        } catch (err){
                       alert(err.message || 'Something went wrong, please try again later')
                       }
                   
                   setSubmitting(false);
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                    <Card.Title>Enter Email
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    </Card.Title>
                    <Card.Title>Please Enter Password
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    </Card.Title>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    <button onClick = {() => history.push("/signup")}>
                        Sign up Instead
                    </button>
                    </Form>
                )}
        </Formik>
        </Card>
        
    )
}

export default Auth;
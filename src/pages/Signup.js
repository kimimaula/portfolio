import './styles/Signup.css'

import axios from 'axios';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Thumb from '../Components/Thumb';
import { useForm } from 'react-hook-form';
import ErrorModal from './Modal/ErrorModal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useHistory } from "react-router-dom";

const Signup = () => {

    let history = useHistory()
    const formData =  new FormData();
    const [ image, setImage] = useState()
    const [ show, setShow ] = useState(false)
    const [ errormessage, setErrorMessage ] = useState()
    const handleClose = () => setShow(false);
    const { register, handleSubmit, errors } = useForm()
    const [ isSubmitting , setIsSubmitting ] = useState(false)

    const onSubmit = userData => {
        setIsSubmitting(true)
        formData.set('username', userData.username);
        formData.set('email', userData.email);
        formData.set('password', userData.password);
        formData.append('image', image)
        
            axios({
                method: 'post',
                url: '/api/user/signup',
                data: formData,
              })
            .then( response => {
                alert('account created')
                history.push("/login")
                 })
            .catch(function (error) {
                    setShow(true)
                    setErrorMessage(error.response.data.message)
                 })
        setIsSubmitting(false)
    } 
    
    const handleChange = (e) => {
        setImage(e.target.files[0])
      }

    return  (
    <Form className='authentication-page-box' onSubmit={handleSubmit(onSubmit)}>
        <ErrorModal show={show} handleClose={handleClose} errorMessage={errormessage}/>
             <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" name="username" ref={register({ required: true, maxLength: 20 })}
                 />
                <Form.Text className="text-muted"> Must Be unique, if taken, will throw error </Form.Text>
                {errors.username &&
                errors.username.type === "required" &&
                <p className ="error-text">This field is required</p>}
                {errors.username &&
                errors.username.type === "maxLength" &&
                <p className ="error-text">Your input exceed maxLength</p>}
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true, pattern: /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/ })} />
                <Form.Text className="text-muted"> You can just use a dummy email for testing purposes </Form.Text>
                {errors.email &&
                errors.email.type === "required" &&
                <p className ="error-text">This field is required</p>}
                {errors.email &&
                errors.email.type === "pattern" &&
                <p className ="error-text">Email address Invalid!</p>}
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" name="password" ref={register({ required: true, minLength: 6 })} />
                <Form.Text className="text-muted"> Needs at least 6 letters </Form.Text>
                {errors.password &&
                errors.password.type === "required" &&
                <p className ="error-text">This field is required</p>}
                {errors.password &&
                errors.password.type === "minLength" &&
                <p className ="error-text">Password must enter at least 6 letters</p>}
            </Form.Group>

            <Card.Text>
                <Form.Label>Image</Form.Label>
                <Form.Text className="text-muted"> Will only accept .png, .jpg or .jpeg </Form.Text>
                <Form.Control type ="file" name="file" ref={register({ required: true})} onChange={handleChange}/>
                {errors.file &&
                errors.file.type === "required" &&
                <p className ="error-text">This field is required</p>}
            </Card.Text>
             <Thumb file={image}/>
            {isSubmitting ? <Spinner animation="border" variant="primary" /> :
            <Button type="submit">Submit</Button>} 
            <Button onClick={() => history.push("/login")}> Log in Instead </Button>
    </Form>
        ) 
} 

export default Signup;
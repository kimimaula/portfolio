import './styles/Signup.css'
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Thumb from '../Components/Thumb';

const Signup = () => {

    let history = useHistory()
    const formData =  new FormData();
    const [image, setImage] = useState()
    const { register, handleSubmit, errors } = useForm()
    const [ isSubmitting , updateIsSubmitting ] = useState(false)

    const onSubmit = async userData => {
        
        formData.set('username', userData.username);
        formData.set('email', userData.email);
        formData.set('password', userData.password);
        formData.append('image', image)
        
        try{
            axios({
                method: 'post',
                url: '/api/user/signup',
                data: formData,
              })
            .then( response => {    
                console.log(response)
                setTimeout(() => {history.push("/login")}, 2000)
                 });
        } catch (err) {
            alert(err.message)
                    }
    } 

    const handleChange = (e) => {
        setImage(e.target.files[0])
      }

    return  (
    <Card className='AuthenticationPageBox'>

        <Card.Title>Sign up</Card.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
             <Card.Text>
                <label>Username</label>
                <input name="username" ref={register({ required: true, maxLength: 20 })} />
                {errors.username &&
                errors.username.type === "required" &&
                "Your input is required"}
                {errors.username &&
                errors.username.type === "maxLength" &&
                "Your input exceed maxLength"}
            </Card.Text>
            <Card.Text>
                <label>Email Address</label>
                <input name="email" ref={register({ required: true, pattern: /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/ })} />
                {errors.email &&
                errors.email.type === "required" &&
                "Your input is required"}
                {errors.email &&
                errors.email.type === "pattern" &&
                "Email address Invalid!"}
            </Card.Text>
            <Card.Text>
                <label>Password</label>
                <input type="password" name="password" ref={register({ required: true})} />
                {errors.password &&
                errors.password.type === "required" &&
                "Your input is required"}
            </Card.Text>
            <Card.Text>
                <label>Image</label>
                <input type ="file" name="file" ref={register({ required: true})} onChange={handleChange}/>
                {errors.file &&
                errors.file.type === "required" &&
                "Your input is required"}
            </Card.Text>
             <Thumb file={image}/>
            {isSubmitting ? <Spinner animation="border" variant="primary" /> :
            <input type="submit" />} 
        </form>
        <Button onClick={() => history.push("/login")}> </Button>
    </Card>
        ) 
} 

export default Signup;
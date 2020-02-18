import './styles/Profile.css';

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import useCurrentUser from '../hooks/useCurrentUser';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'

import ErrorPage from '../Components/ErrorPage';
import Avatar from '../Components/Avatar';
import PageSpinner from '../Components/PageSpinner';
import Product from '../Components/Product'
import NoAccess from '../Components/NoAccess';
import Order from '../Components/Order';
import ErrorModal from './Modal/ErrorModal';


import { Context } from '../hoc/Store'

const Profile = () => {

const user = useParams().user;
const [ edit, setedit ] = useState(false)
const [ show, setShow ] = useState(false)
const handleClose = () => setShow(false);
const [ errormessage, setErrorMessage ] = useState()
const [ displayUsername, setDisplayUsername ] = useState()
const [ displayEmail, setDisplayEmail ] = useState()
const [ editLoading, setEditLoading ] = useState(false)
const [ loggedIn, setLoggedIn ] = useState(false)
const { register, handleSubmit, errors } = useForm()
const [ prodIsEmpty, setProdIsEmpty ] = useState(true)
const [ orderIsEmpty, setOrderIsEmpty ] = useState(true)

const [ data, loading, error, prodData, orderData ] = useCurrentUser(
      `/api/user/${user}`
    );

const { username, email, image} = data

const [state, dispatch] = useContext(Context);

useEffect(()=>{
    setLoggedIn(state.isAuthenticated)
    if (!prodData.products) {
        return
    }if (prodData.products.length === 0) {
        setProdIsEmpty(true)
    } else {
        setProdIsEmpty(false)
    }

    if (!orderData.Order) {
        return
    }if (orderData.Order.length === 0) {
        setOrderIsEmpty(true)
    } else {
        setOrderIsEmpty(false)
    }
    setDisplayEmail(email)
    setDisplayUsername(username)
},[prodData, orderData, state.isAuthenticated])

const onSubmit = async userData => {
    setEditLoading(true)
    try{
            await axios({
            method: 'patch',
            url: `/api/user/${user}`,
            data: {
                email: userData.email,
                username: userData.username
            },
          })
          setDisplayEmail(userData.email)
          setDisplayUsername(userData.username)
          dispatch({
            type: 'SET_CURRENT_USER',
            payload : userData.username
        })
    } catch (error) {
        setShow(true)
        setErrorMessage(error.response.data.message)
    }
    setEditLoading(false)
    setedit(false)
} 

return (
<React.Fragment>
    {
    !loggedIn ? <NoAccess/> : loading? <PageSpinner/> : error? <ErrorPage/>: 
    
    <Container className ="main-profile-box">
        <div className="profile-box-container">
        <h4>Welcome Back {displayUsername}!</h4>
        { image? <Avatar image={image}/> : <PageSpinner/> }
        <h5>Profile Details</h5>
        { edit ? 

        <Form className='edit-details-box' onSubmit={handleSubmit(onSubmit)}>
        <ErrorModal show={show} handleClose={handleClose} errorMessage={errormessage}/>

             <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" name="username" ref={register({ required: true, maxLength: 20 })}
                 />
                <Form.Text className="text-muted"> Both fields should be filled </Form.Text>
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

            {editLoading ? <Button variant="primary" disabled>
                <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                Loading...
                </Button> :<Button type="submit">Submit</Button>}
        </Form>
         : 
        <React.Fragment><h6> Username : {displayUsername} </h6> <h6> Email : {displayEmail} </h6> 
         <Button onClick={()=>{setedit(true)}}> Edit </Button> 
        </React.Fragment> }
        </div>
        <hr/>
        <h5>Your Products</h5>
        <Container className="items-container">
        { !prodIsEmpty ? <React.Fragment>
        {
        prodData.products.map((prods)=>{
            return<Product
            id={prods._id}
            clicked={()=> null}
            image={prods.image}
            title={prods.title}
            price={prods.price}
            key={prods._id}
            />
            })}
            </React.Fragment>
         : 
        <h5>You have not uploaded any products</h5>}
        </Container>
        <hr/>
        <h5>Your Orders</h5>
        <Container className="orders-container">
        { orderIsEmpty ? <h5>You have not ordered any products</h5> :
        <React.Fragment>
        {
        orderData.Order.map((prods)=>{
            return<Order
            id={prods._id}
            clicked={()=> null}
            orderdate={prods.orderdate}
            totalprice={prods.totalprice}
            orders={prods.orders}
            key={prods._id}
            />
            })}
            </React.Fragment>}
        </Container>
    </Container>
    }
</React.Fragment>
    )
}

export default Profile;
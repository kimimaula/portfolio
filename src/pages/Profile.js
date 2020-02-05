import './styles/Profile.css';

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import useCurrentUser from '../hooks/useCurrentUser';

import ErrorPage from '../Components/ErrorPage';
import Avatar from '../Components/Avatar';
import PageSpinner from '../Components/PageSpinner';
import Product from '../Components/Product'
import NoAccess from '../Components/NoAccess';
import Order from '../Components/Order';

import { Context } from '../hoc/Store'

const Profile = () => {

let eventkey=0
const user = useParams().user;
const [ loggedIn, setLoggedIn ] = useState(false)
const [ prodIsEmpty, setProdIsEmpty ] = useState(true)
const [ orderIsEmpty, setOrderIsEmpty ] = useState(true)
const [ data, loading, error, prodData, orderData ] = useCurrentUser(
      `http://localhost:5000/api/user/${user}`
    );
const { username, email, image} = data
const [state] = useContext(Context);

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
    
},[prodData, orderData, state.isAuthenticated])

return (
<React.Fragment>
    {
    !loggedIn ? <NoAccess/> : loading? <PageSpinner/> : error? <ErrorPage/>: 
    
    <Container className ="main-profile-box">
        <div className="profile-box-container">
        <h4>Welcome Back {username}!</h4>
        { image? <Avatar image={image}/> : <PageSpinner/> }
        <h5>Profile Details</h5>
        <h6>Email : {email}</h6>
        <h6>Username : {username}</h6>
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
            eventkey+=1
            return<Order
            id={prods._id}
            clicked={()=> null}
            orderdate={prods.orderdate}
            totalprice={prods.totalprice}
            orders={prods.orders}
            key={prods._id}
            eventkey={eventkey}
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
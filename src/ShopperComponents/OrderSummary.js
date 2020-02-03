import "./styles/OrderSummary.css";
import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import ShopperJumbo from '../Components/ShopperJumbo';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Logo from '../assets/icons8-trash-200.png';

const OrderSummary = () => {
let history = useHistory()

var storage = localStorage.getItem('Cart'); 
if(storage) storage = JSON.parse(storage);
else storage = [];

const [ totalPrice, updateTotalPrice ] = useState(0);
const [ loading, update ] = useState(false)
const [cartItems, updateCartItems]  = useState([...storage]);

const order = cartItems.map((cartItem) => 
({
itemId : cartItem._id,
image: cartItem.image,
itemname : cartItem.title,
description : cartItem.description,
amount : cartItem.amount,
price : cartItem.price
}))

function orderNow() {
    axios.post("/api/orders/neworders", {
         totalprice : totalPrice,
         orders : [...order]
        })
        .then( response => console.log(response))
        .catch( error => console.log( error ))
    clearOrder()
    history.push("/ordereditems/:user")
};

function deleteItem(_id) {
    const updatedCart = cartItems.filter(function(cartItem){
        return cartItem.id !== _id
    })
    updateCartItems(updatedCart)
    localStorage.setItem('Cart',JSON.stringify(updatedCart))
};


async function clearOrder() {
    update(true)
    updateCartItems([])
    localStorage.removeItem('Cart')
    update(false)
};

useEffect(() => {
    let sum = 0;

    cartItems.map((cartItem) => {
        return sum += parseFloat(cartItem.price*cartItem.amount)
    })
    updateTotalPrice(sum)
  },[cartItems]);

return(

    <Container className = "OrderSummaryBox">
        <ShopperJumbo />
            <Container>
                { loading ? <Spinner animation="grow" variant="info" /> : 
                <React.Fragment>
                <h1>Order Summary</h1>
                { cartItems.length === 0 ? <p> Shopping Cart Empty, Start adding items now! </p> : 
                <React.Fragment> 
                {storage.map((cartItems)=> {
                    return <Row key = {cartItems._id}>
                            <Col>
                            <img src={`http://localhost:5000/${cartItems.image}`} alt={cartItems.title}/>
                            </Col>
                            <Col>
                            {cartItems.title}
                            </Col>
                            <Col>
                            {cartItems.description}
                            </Col>
                            Amount Ordered : {cartItems.amount}
                            <Col>
                            RM : {cartItems.price}
                            </Col>
                            <Col>
                            <img src={Logo} alt='logo' width= "40px" height="40px" onClick={() => deleteItem(cartItems._id)}/>
                            </Col>
                            </Row>
                })}
                <h4> SubTotal :  RM : {totalPrice} </h4>
                </React.Fragment>
                }
                <Button onClick={orderNow} variant="success" > Order Now </Button>
                <Button onClick={clearOrder} variant="danger" > Clear Cart </Button>
                </React.Fragment>}
                </Container>
    </Container>

    )
}
export default OrderSummary;
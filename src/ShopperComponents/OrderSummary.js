import "./styles/OrderSummary.css";
import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import ShopperJumbo from '../Components/ShopperJumbo';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import { useHistory } from "react-router-dom";

const OrderSummary = () => {
let history = useHistory()

const [ totalPrice, updateTotalPrice ] = useState(0);
const [ loading, update ] = useState(false)

var storage = localStorage.getItem('Cart'); 
if(storage) storage = JSON.parse(storage);
else storage = [];

const cartItems = [...storage];
const order = cartItems.map((cartItem) => 
({
itemId : cartItem._id,
itemname : cartItem.title,
description : cartItem.description,
amount : cartItem.amount,
price : cartItem.price
}))

function orderNow() {
    axios.post("/api/order/neworders", {
         totalprice : totalPrice,
         orders : [...order]
        })
        .then( response => console.log(response ))
        .catch( error => console.log( error ))
    clearOrder()
    history.push("/ordereditems/:user")
};

async function clearOrder() {
    update(true)
    localStorage.removeItem('Cart')
    await window.location.reload(true);
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
                            <img src={cartItems.imageUrl} alt={cartItems.title}/>
                            </Col>
                            <Col>
                            {cartItems.title}
                            </Col>
                            <Col>
                            {cartItems.description}
                            </Col>
                            {cartItems.amount}
                            <Col>
                            {cartItems.price}
                            </Col>
                            </Row>
                })}
                <p> SubTotal :  {totalPrice} </p>
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
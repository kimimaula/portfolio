import "./styles/OrderSummary.css";
import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import ShopperJumbo from '../Components/ShopperJumbo';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CartItem from '../Components/CartItem'

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

    <Container className = "order-summary-container">
        <ShopperJumbo />
            <Container>
                { loading ? <Spinner animation="grow" variant="info" /> : 
                <React.Fragment>
                <h1>Order Summary</h1>
                { cartItems.length === 0 ? <p> Shopping Cart Empty, Start adding items now! </p> : 
                <div className="order-summary-box"> 
                {storage.map((cartItems)=> {
                    return<CartItem
                    id={cartItems._id}
                    delete={()=> deleteItem(cartItems._id)}
                    image={cartItems.image}
                    title={cartItems.title}
                    price={cartItems.price} 
                    key={cartItems._id}
                    amount={cartItems.amount}
                    />
                })}
                <h4> SubTotal :  RM : {totalPrice} </h4>
                </div>
                }
                <Button onClick={orderNow} className="order-summary-box-button" variant="success" > Order Now </Button>
                <Button onClick={clearOrder} className="order-summary-box-button" variant="danger" > Clear Cart </Button>
                </React.Fragment>}
                </Container>
    </Container>

    )
}
export default OrderSummary;
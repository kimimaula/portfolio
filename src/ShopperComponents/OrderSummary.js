import "./styles/OrderSummary.css";
import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import ShopperJumbo from '../Components/ShopperJumbo';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import CartItem from '../Components/CartItem'

const OrderSummary = () => {

let storage = localStorage.getItem('Cart'); 
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
        .then( response => alert('Item Ordered'))
        .catch( error => console.log( error ))
    clearOrder()
};

function deleteItem(_id) {
    const updatedCart = cartItems.filter(function(cartItem){
        return cartItem.id !== _id
    })
    updateCartItems(updatedCart)
    localStorage.setItem('Cart',JSON.stringify(updatedCart))
};


function clearOrder() {
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

    <Container className = "order-summary-main-container">
        <ShopperJumbo />
            <Container className="order-summary-container">
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
                </div>
                }
                <h4> SubTotal :  RM : {parseFloat(totalPrice).toFixed(2)} </h4>
                <Button onClick={orderNow} className="order-summary-box-button" variant="success" > Order Now </Button>
                <Button onClick={clearOrder} className="order-summary-box-button" variant="danger" > Clear Cart </Button>
                </React.Fragment>}
                </Container>
    </Container>

    )
}
export default OrderSummary;
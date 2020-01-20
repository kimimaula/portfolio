import "./styles/OrderSummary.css"
import React, { useState, useContext, useEffect } from 'react';
import {Context} from './hoc/Store'
import { Container, Card, Button } from 'react-bootstrap'

const OrderSummary = () => {

const [ state, dispatch ] = useContext(Context);
const [ totalPrice, updateTotalPrice ] = useState(0);

function orderNow() {
    console.log(state)
    console.log(state.Cart)
}

 useEffect(() => {
    let sum = 0;
    let cartCopy = state.Cart
    cartCopy.map((cartItem) => {
        sum += (parseFloat(cartItem.price)*cartItem.amount)
        return sum;
    });
    updateTotalPrice(total => totalPrice + sum);
    return;
 }, []);

return(

    <Container className = "AddCartItemBox">
                <p>Order Summary</p>
                {state.Cart.map((cartItems)=> {
                    return <div key = {cartItems.key}> <p>{cartItems.title}</p> <p> {cartItems.amount} </p> <p>{cartItems.price}</p></div>
                })}
                <p> Total Price :  {totalPrice} </p>
                <button onClick={orderNow}> Order Now </button>
                {state.Cart.map((cartItems) => {
                    return <div style={{ width: '18rem', height: "30vh" }} key ={cartItems.key}>
                    <Card id = {cartItems.id} className="cart" >
                        <Card.Img variant="top" src={cartItems.imageUrl} />
                        <Card.Body>
                            <Card.Title>{cartItems.title}</Card.Title>
                            <Card.Text>
                            {cartItems.description}
                            </Card.Text>
                            <Card.Text>
                            {cartItems.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </div>
    })}
    </Container>

    )
}
export default OrderSummary;
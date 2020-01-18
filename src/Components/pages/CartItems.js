import "./styles/CartItems.css"
import React, { useState, useContext } from 'react';
import {Context} from '../pages/hoc/Store'
import { Container, Card, Button } from 'react-bootstrap'

const AddCartItem = () => {

const [ state, dispatch ] = useContext(Context);

function testing() {
    console.log(state.Cart)
}

return(

    <Container className = "AddCartItemBox">
    {state.Cart.map((cartItems) => {
        return <div style={{ width: '18rem', height: "30vh" }}>
                <Card id = {cartItems.id} className="cart">
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
                    <Button onClick={testing}> Order Now </Button>
                </Card>
            </div>
    })}
    </Container>

    )
}
export default AddCartItem
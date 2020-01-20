import './Cart.css'
import React from 'react';
import Card from 'react-bootstrap/Card';

function Cart(props) {
    return (
        <Card id = {props.id} style={{ width: '18rem' }} className="cart" onClick={props.clicked}>
            <Card.Img variant="top" src={props.imageUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                Amount Available : {props.amountAvailable}
                </Card.Text>
                <Card.Text>
                Product Description: {props.description}
                </Card.Text>
                <Card.Text>
                Price: {props.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cart

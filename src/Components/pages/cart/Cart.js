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
                {props.description}
                </Card.Text>
                <Card.Text>
                {props.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cart

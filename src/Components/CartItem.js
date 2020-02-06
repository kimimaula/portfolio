import './styles/CartItem.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import { ReactComponent as Logo } from '../assets/delete.svg'

function Product(props) {

    return (
        <Card id = {props.id} className="cart-item-card" >
            <Card.Img className="cart-item-card-img" variant="top" src={`http://localhost:5000/${props.image}`} />
            <Card.Body className="cart-item-card-body">
                <div>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                Price: {props.price} <br/>
                Amount: {props.amount}
                </Card.Text>
                </div>
                <Logo className="cart-item-card-trash-icon" onClick={props.delete}/>
            </Card.Body>
        </Card>
    )
}

export default Product;

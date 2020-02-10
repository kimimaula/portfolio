import './styles/CartItem.css'
import React from 'react';
import Card from 'react-bootstrap/Card';
import { ReactComponent as Logo } from '../assets/delete.svg'

function Product(props) {

    return (
        <Card id = {props.id} className="cart-item-card" >
            <Card.Img className="cart-item-card-img" variant="top" src={`${process.env.REACT_APP_BASE_URL}/${props.image}`} />
            <Card.Body className="cart-item-card-body">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                Price: {props.price} <br/>
                Amount: {props.amount}
                </Card.Text>
                <div className="cart-item-card-trash-icon-container" onClick={props.delete}>
                <Logo className="cart-item-card-trash-icon" /> <h6> Delete <br/>Item</h6>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Product;

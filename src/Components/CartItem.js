import './styles/CartItem.css'
import React from 'react';
import Card from 'react-bootstrap/Card';

function Product(props) {

    return (
        <Card id = {props.id} className="cart-item-card" >
            <Card.Img className="cart-item-card-img" variant="top" src={`${process.env.REACT_APP_BASE_URL}/aws/${props.image}`} />
            <Card.Body className="cart-item-card-body">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                Price: {props.price} <br/>
                Amount: {props.amount}
                </Card.Text>
                <div className="cart-item-card-delete-item-container" onClick={props.delete}>
                <h6> Delete Item</h6>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Product;

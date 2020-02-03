import './styles/Cart.css'
import React from 'react';
import Card from 'react-bootstrap/Card';

function Product(props) {
    return (
        <Card id = {props.id} style={{ width: '18rem' }} className="cart" onClick={props.clicked}>
            <Card.Img variant="top" src={`http://localhost:5000/${props.image}`} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Card.Text>
                Price: {props.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product;

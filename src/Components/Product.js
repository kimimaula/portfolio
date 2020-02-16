import './styles/Product.css'
import React from 'react';
import Card from 'react-bootstrap/Card';

function Product(props) {

    return (
        <Card id = {props.id} className="product-card" onClick={props.clicked}>
            <Card.Img className="product-card-img" variant="top" src={`${process.env.REACT_APP_BASE_URL}/aws/${props.image}`} />
            <Card.Body className="product-card-body">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                Price: {props.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product;

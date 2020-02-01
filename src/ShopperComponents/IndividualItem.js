import React, { useState } from 'react';
import ShopperJumbo from '../Components/ShopperJumbo';
import Container from 'react-bootstrap/Container';
import useFetch from '../hooks/useFetch';
import { useLocation } from "react-router";
import Card from "react-bootstrap/Card"
import Spinner from 'react-bootstrap/Spinner'

const Item = ()  => {

let [amount, updatedAmount] = useState(1);
let location = useLocation();

const [ data, loading ] = useFetch(
    `http://localhost:5000/api${location.pathname}`
);

const product = data.product;

function addToCart() {
    var storage = localStorage.getItem('Cart'); 
    if(storage) storage = JSON.parse(storage); 
    else storage = [];
    
    product.amount = 0
    const index = storage.findIndex( item => item._id === product._id )
    
    if (index > -1) {
        storage[index].amount += amount
        localStorage.setItem('Cart',JSON.stringify(storage))
    } else {
        product.amount = amount
        storage.push(product)
        localStorage.setItem('Cart',JSON.stringify(storage))
    }
}

const changeHandler = (event) => {
    if (event.target.value > 100) {
      alert ('You can only order a maximum of 100 items at once');
      event.target.value = 100
    }
    updatedAmount(amount = parseInt(event.target.value))
  }

const increaseItem = () => {
    if (amount > 100) {
      alert('You can only order a maximum of 100 items at once')
      return;
    }
    updatedAmount(amount + 1)
  }

const decreaseItem = () => {
    if (amount < 1) {
      alert('You can order less than zero, please press close button to cancel')
      return;
    }
    updatedAmount(amount - 1)
  }

    return(
        <Container>
        <ShopperJumbo />
        <React.Fragment>
        { loading ? <Spinner animation="grow" variant="info" /> : 
            <Card id = {product._id} style={{ width: '18rem' }} className="cart">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                Product Description: {product.description}
                </Card.Text>
                <Card.Text>
                Price: {product.price}
                </Card.Text>
                <input type="price" name="price" value={amount} onChange = {changeHandler}/><p onClick = {increaseItem}> + </p> <p onClick ={decreaseItem}> - </p>
            </Card.Body>
            <button onClick={() => addToCart()}> Add to Cart </button>
            </Card>
        }
        </React.Fragment>
        </Container>
    )
}

export default Item;
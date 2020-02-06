import './styles/IndividualItem.css';
import React, { useState, useEffect, useContext } from 'react';
import ShopperJumbo from '../Components/ShopperJumbo';
import Container from 'react-bootstrap/Container';
import useFetch from '../hooks/useFetch';
import { useLocation } from "react-router";
import Card from "react-bootstrap/Card";
import PageSpinner from '../Components/PageSpinner';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Context } from '../hoc/Store';
import Alert from 'react-bootstrap/Alert';

const Item = ()  => {

let [amount, updatedAmount] = useState(1);
let location = useLocation();
const [state] = useContext(Context);
const [loggedin, setLoggedIn] = useState(false)
const [show, setShow] = useState(false);

useEffect(()=>{
  setLoggedIn(state.isAuthenticated)
},[state.isAuthenticated])

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
    setShow(true)
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
        <Container className="individual-item-card-container">
        <ShopperJumbo />
        <React.Fragment> 
        { loading ? <PageSpinner/> : 
            <Card id = {product._id} className="individual-item-card">
            <Card.Img className="individual-item-card-img" variant="top" src={`http://localhost:5000/${product.image}`} />
            <Card.Body className="individual-item-card-body">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                 {product.description}
                </Card.Text>
                <Card.Text>
                Price: {product.price}
                </Card.Text>
                <Row className='individual-item-input-body'>
                <input type="number" name="price" value={amount} onChange = {changeHandler}/><Button onClick = {increaseItem}> + </Button> <Button onClick ={decreaseItem}> - </Button>
                </Row>
            </Card.Body>
            <Button onClick={() => addToCart()} disabled={!loggedin}> Add to Cart </Button>
            </Card>
        }
        </React.Fragment>
        <Alert className = "added-to-cart-alert" variant="info" show={show} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Added to Cart</Alert.Heading>
        </Alert>
        </Container>
    )
}

export default Item;
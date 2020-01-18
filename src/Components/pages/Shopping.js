import "./styles/Shopping.css";
import { Jumbotron, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './cart/Cart';
import ItemModal from './Modal/ItemModal'


import React, { useState, useContext } from 'react';
import {Context} from '../pages/hoc/Store'

function Shopping() {

const [state, dispatch] = useContext(Context);
let [itemModal, toggleItemModal] = useState(false)

 function openItem(id) {
     toggleItemModal(itemModal = !itemModal);
     const filteredItem = state.Items.filter(item => item.id === id).pop()
     dispatch({
         type: 'OPEN_CART',
         payload: filteredItem
     });
 }

        return(
            <Container className="ShoppingBox">
                <Jumbotron className="ShoppingHeader">
                <h1>
                    New Year 2020 <Badge variant="secondary">SALE</Badge>
                </h1>
                <h3>
                    <Link to="/addnewitem" >Add New Item</Link>
                    <Link to="/cartitem" >Cart</Link>
                    <Link to="/addorderitem" >Orders</Link>
                </h3>
                    <ItemModal show = {itemModal} onHide={()=>{toggleItemModal(itemModal = !itemModal)}}/>
                </Jumbotron>
                {state.Items.map((items) => {
                    return (
                           <Cart 
                           title={items.title}
                           id = {items.id}
                           description={items.description}
                           price={items.price}
                           imageUrl={items.imageUrl}
                           key = {items.key}
                           clicked ={()=> openItem(items.id)}/>
                       )} 
                       )
                    } 
            </Container>
        )
}
export default Shopping;
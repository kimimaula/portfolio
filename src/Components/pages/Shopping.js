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
const initialState = {
    title : "", 
    description: "",
    price: "",
    imageUrl: "",
    key: "",
    id: "",
    amount: 0,
    totalAmount: 0
}

 function openItem(id) {
     if (state.Items.id) {
         dispatch ({
             type: 'OPEN_CART',
             payload: {
                    title : "", 
                    description: "",
                    price: "",
                    imageUrl: "",
                    key: "",
                    id: "",
                    amount: 0,
                    totalAmount: 0
                
             }
         })
     }
     toggleItemModal(itemModal = !itemModal);
     const filteredItem = state.Items.find( (item) => { return item.id === id})
     dispatch({
         type: 'OPEN_CART',
         payload: filteredItem
     });
 }

 function hideModal() {
    dispatch({
        type: "CLOSE_MODAL",
        payload: initialState
    })
    toggleItemModal(itemModal = !itemModal)
 }

        return(
            <Container className="ShoppingBox">
                <Jumbotron className="ShoppingHeader">
                <h1>
                    New Year 2020 <Badge variant="secondary">SALE</Badge>
                </h1>
                <h3>
                    <Link to="/addnewitem" >Add New Item</Link>
                    <Link to="/ordersummary" >Cart</Link>
                    <Link to="/ordereditems" >Orders</Link>
                </h3>
                    <ItemModal show = {itemModal} onHide={hideModal} />
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
                           amountAvailable = {items.amountAvailable}
                           clicked ={()=> openItem(items.id)}/>
                       )} 
                       )
                    } 
            </Container>
        )
}
export default Shopping;
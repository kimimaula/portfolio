import React, { useContext, useState } from 'react'
import {Modal, Button } from 'react-bootstrap'
import {Context} from '../hoc/Store'

const ItemModal = (props) => {

  const [state, dispatch] = useContext(Context);
  let [amount, updatedAmount] = useState(1);
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
  

  const changeHandler = (event) => {
    if (event.target.value > 100) {
      alert ('You can only order a maximum of 100 items at once');
      event.target.value = 100
    }
    updatedAmount(amount = parseInt(event.target.value))
  }

  const increaseItem = () => {
    if (amount >= 100) {
      alert('You can only order a maximum of 100 items at once')
      return;
    }
    updatedAmount(amount + 1)
    console.log(amount);
  }

   async function addToCart() {
    let cartItems = state.Cart
    const index = cartItems.findIndex((e) => e.id === state.Item.id)
    console.log(state)

     if (index > -1) {
      cartItems[index].amount = cartItems[index].amount + amount
        dispatch({
        type: "CLOSE_MODAL",
        payload: initialState
       });
      props.onHide();
     } else {
       state.Item.amount = amount;
        dispatch ({
         type: 'ADD_TO_CART', 
         payload: state.Item
       });
      (dispatch({
        type: "CLOSE_MODAL",
        payload: initialState
       }));
      props.onHide();
   }
  }


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {state.Item.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src = {state.Item.imageUrl} alt= {state.Item.title}/>
        </Modal.Body>
        <Modal.Body>
          Amount Available : {state.Item.amountAvailable}
        </Modal.Body>
        <Modal.Body>
          <h4> {state.Item.price} </h4>
          <p>
          {state.Item.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <input type="price" name="price" value={amount} onChange = {changeHandler}/><p onClick = {increaseItem}> + </p> <p> - </p>
          <Button onClick={addToCart}>Add to Cart</Button> 
          <Button onClick={props.onHide}>Close</Button> 
        </Modal.Footer>
      </Modal>
    );
  }

  export default ItemModal;
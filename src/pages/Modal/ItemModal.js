import React, { useContext, useState } from 'react'
import {Modal, Button } from 'react-bootstrap'
import {Context} from '../../hoc/Store'

const ItemModal = (props) => {

  let [amount, updatedAmount] = useState(1);
  const [state] = useContext(Context);

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

   async function addToCart() {
    let cartItems = state.Cart
      props.onHide();
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
            {props.item.product.title}
          </Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <img src = {props.item.product.image} alt= {props.item.product.title}/>
          </Modal.Body>
          <Modal.Body>
            <h4> {props.item.product.price} </h4>
            <p>
            {props.item.product.description}
            </p>
          </Modal.Body>
        <Modal.Footer>
          <input type="price" name="price" value={amount} onChange = {changeHandler}/><p onClick = {increaseItem}> + </p> <p onClick ={decreaseItem}> - </p>
          <Button onClick={() => console.log(props.item.product)}>Add to Cart</Button> 
          <Button onClick={props.onHide}>Close</Button> 
        </Modal.Footer>
      </Modal>
    );
  }

  export default ItemModal;
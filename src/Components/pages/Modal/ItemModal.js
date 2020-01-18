import React, { useContext } from 'react'
import {Modal, Button } from 'react-bootstrap'
import {Context} from '../hoc/Store'

const ItemModal = (props) => {

  const [state, dispatch] = useContext(Context);

  function addToCart(item) {
    dispatch({
        type: 'ADD_TO_CART',
        payload: item
    });
    props.onHide()
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
          <h4> {state.Item.price} </h4>
          <p>
          {state.Item.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => addToCart(state.Item)}>Add to Cart</Button> 
          <Button onClick={props.onHide}>Close</Button> 
        </Modal.Footer>
      </Modal>
    );
  }

  export default ItemModal;
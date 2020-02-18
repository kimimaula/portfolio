import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';

const ErrorModal = (props) => {

return(

    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error Encountered</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have encountered an error:</Modal.Body>
        <Modal.Body> { props.errorMessage }</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ErrorModal;
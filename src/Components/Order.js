import './styles/Order.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Order = (props) => {

    let history = useHistory()

    return(
        <div className="ordered-items-container" key={props.key}>
            <div as={Button} className="ordered-items-container-info-container">
                <h5>Order ID : {props.id}</h5>
                <h5>Order Date : {props.orderdate}</h5>
                <h5>Total Price : RM {props.totalprice}</h5>
                <Button onClick={()=>{history.push(`/ordereditem/${props.id}`)}}> More Info </Button>
            </div>
        </div>
    )
}

export default Order
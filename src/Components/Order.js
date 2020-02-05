import './styles/Order.css'
import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

const Order = (props) => {

    return(
        <Accordion className="order-summary-container">
            <Accordion.Toggle as={Button} className="order-summary-info-container" eventKey={props.eventkey}>
                <h5>Order ID : {props.id}</h5>
                <h5>Order Date : {props.orderdate}</h5>
                <h5>Price : {props.totalprice}</h5>
            </Accordion.Toggle>
            {props.orders.map((order)=> {
            return <Accordion.Collapse className="order-items-container" eventKey={props.eventkey}>
                <React.Fragment>
                <img className="order-items-img" src={`http://localhost:5000/${order.image}`} alt={order.itemname}/>
                <div className='order-items-text'>
                <h6> Item Name: {order.itemname}</h6>
                <h6> Order Amount: {order.amount}</h6>
                <h6>RM{order.price}</h6>
                </div>
                </React.Fragment>
            </Accordion.Collapse>
                })}
        </Accordion>
    )
}

export default Order
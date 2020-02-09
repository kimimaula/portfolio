import './styles/Order.css'
import React from 'react';
import Button from 'react-bootstrap/Button'

const Order = (props) => {

    return(
        <div className="ordered-items-container">
            <div as={Button} className="ordered-items-container-info-container" eventKey={props.eventkey}>
                <h5>Order ID : {props.id}</h5>
                <h5>Order Date : {props.orderdate}</h5>
                <h5>Total Price : RM {props.totalprice}</h5>
            </div>
            {props.orders.map((order)=> {
            return <div className="ordered-items-all-container">
                <img className="ordered-items-img" src={`${process.env.REACT_APP_BASE_URL}/${order.image}`} alt={order.itemname}/>
                <div className='ordered-items-text'>
                <h6> Item Name: {order.itemname}</h6>
                <h6> Order Amount: {order.amount}</h6>
                <h6>RM{order.price}</h6>
                </div>
            </div>
                })}
        </div>
    )
}

export default Order
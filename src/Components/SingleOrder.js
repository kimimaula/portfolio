import './styles/SingleOrder.css'
import React from 'react';
import Button from 'react-bootstrap/Button';

const Order = (props) => {

    return(
        <div className="single-ordered-items-container">
            <div as={Button} className="single-ordered-items-main-info-container">
                <h5>Order ID : {props.id}</h5>
                <h5>Order Date : {props.orderdate}</h5>
                <h5>Total Price : RM {parseFloat(props.totalprice).toFixed(2)}</h5>
            </div>
                {props.orders.map((orderItem)=>{
                    return <div className="single-ordered-items-info-container">
                        <img src={`${process.env.REACT_APP_BASE_URL}/aws/${orderItem.image}`} alt={orderItem.itemname} className="single-ordered-items-img"/>
                        <div className="single-ordered-items-text-description" key={orderItem.id}>
                            <h6>Name: <br/> {orderItem.itemname}</h6>
                            <h6>Description: <br/> {orderItem.description}</h6>
                            <h6>Amount : <br/> {orderItem.amount}</h6>
                            <h6>RM {orderItem.price}</h6>
                        </div>
                    </div>
                })}
        </div>
    )
}

export default Order;
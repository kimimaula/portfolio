import "./styles/OrderedItems.css"
import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import ShopperJumbo from '../Components/ShopperJumbo'
import { useParams } from 'react-router-dom';
import PageSpinner from '../Components/PageSpinner'
import axios from "axios";
import Order from "../Components/Order";

const OrderedItems = () => {

const User = useParams().user;
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

async function fetchData() {
    let orderData;

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/orders/${User}`)
        orderData = response.data.Order
    } catch (error) {
        alert(error)
    }

    if (orderData && orderData.length > 0) {
        setData(orderData);
        setLoading(false);
    }   else {
        setData(false);
        setLoading(false);
    }

}

useEffect(() => {
    fetchData();
  }, []);

return (
        <Container className = "ordered-items-main-container">
        <ShopperJumbo />
        { !data? <h3 className='no-orders-text'>No orders yet</h3> : loading? <PageSpinner /> : 
            data.map((orderItem) => {
                return <Order
                id={orderItem._id}
                clicked={()=> null}
                orderdate={orderItem.orderdate}
                totalprice={orderItem.totalprice}
                key={orderItem._id}
                />
            })
        } 
        </Container>
    )
}

export default OrderedItems;
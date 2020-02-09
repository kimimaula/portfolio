import "./styles/OrderedItem.css"
import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import ShopperJumbo from '../Components/ShopperJumbo'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ErrorPage from '../Components/ErrorPage';
import PageSpinner from '../Components/PageSpinner';
import SingleOrder from '../Components/SingleOrder'

const OrderedItem = () => {

const orderId = useParams().orderid;

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

async function fetchData() {    
    let orderData;

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/orders/orderID/${orderId}`)
        orderData = response.data.Order
    } catch (error) {
        alert(error)
    }
        setData(orderData);
        setLoading(false);
}

useEffect(() => {
    fetchData();
  }, []);

return (
        <Container className = "ordered-item-main-container">
        <ShopperJumbo />
        { !data? <ErrorPage/> : loading? <PageSpinner /> : 
            <div>
            <SingleOrder
                id={data._id}
                clicked={()=> null}
                orderdate={data.orderdate}
                totalprice={data.totalprice}
                orders={data.orders}
                key={data._id}
                />
            </div>
        } 
        </Container>
    )
}

export default OrderedItem;
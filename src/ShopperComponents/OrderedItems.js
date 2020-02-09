import "./styles/OrderedItems.css"
import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import ShopperJumbo from '../Components/ShopperJumbo'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import axios from "axios";
import Order from "../Components/Order";

const AddOrderItem = () => {

const user = useParams().user;

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

async function fetchData() {
    let orderData;

    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/orders/${user}`)
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
        <Container className = "AddOrderItemBox">
        <ShopperJumbo />
        { !data? <h1>no items</h1> : loading? <Spinner animation="grow" variant="info" /> : 
            data.map((orderItem) => {
                return <Order
                id={orderItem._id}
                clicked={()=> null}
                orderdate={orderItem.orderdate}
                totalprice={orderItem.totalprice}
                orders={orderItem.orders}
                key={orderItem._id}
                eventkey={orderItem}
                />
            })
        } 
        </Container>
    )
}

export default AddOrderItem;
import "./styles/OrderedItems.css"
import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import ShopperJumbo from '../Components/ShopperJumbo'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import axios from "axios";

const AddOrderItem = () => {

const user = useParams().user;

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

async function fetchData() {
    let orderData;

    try {
        const response = await axios.get(`http://localhost:5000/api/orders/${user}`)
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
                return <React.Fragment>
                    <p>{orderItem._id}</p>
                    <p>{orderItem.orderdate}</p>
                    <p>{orderItem.totalprice}</p>
                    <p>{orderItem.orders.map((item)=> {
                        return <React.Fragment>
                             <img src ={`http://localhost:5000/${item.image}`} alt ={item.itemname}/>
                            <p>{item.itemname}</p>
                            <p>{item.description}</p>
                            <p>{item.amount}</p>
                            <p>{item.price}</p>
                        </React.Fragment>
                    })}</p>
                </React.Fragment>
            })
        } 
        </Container>
    )
}

export default AddOrderItem;
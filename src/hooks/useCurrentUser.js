import { useState, useEffect } from "react";
import axios from "axios";

function useCurrentUser(url) {

  const [data, setData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [prodData, setProdData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  async function fetchUser() {
  setLoading(true)
  try{
    const response = await axios.get(url)
    const currentuser = response.data.currentUser[0]
    const userProducts = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/user/${currentuser._id}`)
    const userOrders = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/orders/${currentuser.username}`)
    setData(currentuser)
    setProdData(userProducts.data)
    setOrderData(userOrders.data)
  } catch (error) {
    setError(error.response.data)
  }
  setLoading(false);
  }

  useEffect(() => {
   fetchUser();
   //fetchProducts()
  }, []);

  return [ data, loading, error, prodData, orderData ];
}

export default useCurrentUser;
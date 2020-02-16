import {
  useState,
  useEffect
} from "react";
import axios from "axios";

function useCurrentUser(url) {

  const [data, setData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [prodData, setProdData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  async function fetchUser() {
    setLoading(true)

    const response = await axios.get(url)
    const currentuser = response.data.currentUser[0]
    setData(currentuser)
    const promise1 = axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/user/${currentuser._id}`)
    const promise2 = axios.get(`${process.env.REACT_APP_BASE_URL}/api/orders/${currentuser.username}`)

    try {
      const values = await Promise.all([promise1, promise2])
      setProdData(values[0].data)
      setOrderData(values[1].data)
    } catch (error) {
      setError(error.response.data)
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchUser();
    //fetchProducts()
  }, []);

  return [data, loading, error, prodData, orderData];

}

export default useCurrentUser;
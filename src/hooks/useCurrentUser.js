import { useState, useEffect } from "react";
import axios from "axios";

function useFetchToken(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await axios.get(url);
    const currentuser =  response.data.currentUser[0]
    setData(currentuser);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}

export default useFetchToken;
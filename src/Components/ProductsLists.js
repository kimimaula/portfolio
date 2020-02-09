import './styles/productlists.css'
import React from 'react'
import Product from './Product';
import Spinner from 'react-bootstrap/Spinner'
import useFetch from '../hooks/useFetch'
import { useHistory } from "react-router-dom";

function ProductsLists () {

const [data, loading] = useFetch(
    `${process.env.REACT_APP_BASE_URL}/api/products/`
  );

  const history = useHistory();

  return (
    <React.Fragment>
     {loading ? <Spinner animation="grow" variant="info" /> : data.products.map((items) => {
        return (
               <Product 
               title={items.title}
               id = {items._id}
               description={items.description}
               price={items.price}
               image={items.image}
               key = {items._id}
               clicked ={() => history.push(`/products/${items._id}`)}/>
           )} 
           ) 
        } 
    </React.Fragment>
  )
}

export default ProductsLists;
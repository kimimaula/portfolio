import "./styles/Shopping.css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import ProductLists from '../Components/ProductsLists'
import ShopperJumbo from '../Components/ShopperJumbo'

const Shopping = () => {


        return(
            <Container className="ShoppingBox">
                <ShopperJumbo />
                <ProductLists />
            </Container>
        )
}
export default Shopping;
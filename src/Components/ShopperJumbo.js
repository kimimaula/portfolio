import './styles/shoppingjumbo.css'

import React, { useContext, useState, useEffect } from 'react';
import  Row from 'react-bootstrap/Row';
import  Badge from 'react-bootstrap/Badge';
import  Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

import { Context } from '../hoc/Store';

const ShopperJumbo = () => {

    const [state] = useContext(Context);
    const [loggedin, setLoggedIn] = useState(false)
    const history = useHistory();
    
    useEffect(()=>{
        setLoggedIn(state.isAuthenticated)
    },[state.isAuthenticated])

    return (
        <div className="shopper-header">
        <h3>
            New Year 2020 <Badge variant="primary">SALE</Badge>
        </h3>
        <div className="shopper-header-links-container">
        <Row >
            <Row>
            <Button variant="link" className="shopper-header-links" onClick={() => history.push("/shopper")}>Shop</Button>
            </Row>
            { loggedin ?
            <React.Fragment>
            <Row>
            <Button variant="link" className="shopper-header-links" onClick={() => history.push(`/addnewitem/${state.user}`)}>Add New Item</Button>
            </Row>
            <Row>
            <Button variant="link" className="shopper-header-links" onClick={() => history.push(`/ordersummary/${state.user}`)}>Cart</Button>
            </Row>
            <Row>
            <Button variant="link" className="shopper-header-links" onClick={() => history.push(`/ordereditems/${state.user}`)}>Orders</Button>
            </Row>
            </React.Fragment> : null}
        </Row>
        </div>
        <h6 className="shopper-header-note"> Note that the option to add new item, see the cart and see the orders are only available if you are logged in. Click on an item to add to cart and don't be afraid to break my app. If you find bugs, please send it to kimimaula@gmail.com</h6>   
        </div>
    )
}

export default ShopperJumbo;
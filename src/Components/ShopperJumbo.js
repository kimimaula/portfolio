import './styles/shoppingjumbo.css'
import React, { useContext } from 'react';
import { Jumbotron, Row, Col, Button, Badge } from 'react-bootstrap';
import { Context } from '../hoc/Store';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const ShopperJumbo = () => {

    const [state] = useContext(Context);
    const history = useHistory();

    return (
        <Jumbotron className="ShoppingHeader" >
        <h1>
            New Year 2020 <Badge variant="secondary">SALE</Badge>
        </h1>
        <Col >
            <Row>
            <Button variant="link" className="jumbo-btn" onClick={() => history.push("/shopper")}>Shop</Button>
            </Row>
            <Row>
            <Button variant="link" className="jumbo-btn" onClick={() => history.push(`/addnewitem/${state.user}`)}>Add New Item</Button>
            </Row>
            <Row>
            <Button variant="link" className="jumbo-btn" onClick={() => history.push(`/ordersummary/${state.user}`)}>Cart</Button>
            </Row>
            <Row>
            <Button variant="link" className="jumbo-btn" onClick={() => history.push(`/ordereditems/${state.user}`)}>Orders</Button>
            </Row>
        </Col>
        </Jumbotron>
    )
}

export default ShopperJumbo;
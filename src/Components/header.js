import './styles/header.css'

import jwt_decode from 'jwt-decode';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';


import { Context } from '../hoc/Store'
import setAuthToken from '../utils/setAuthToken';


const Header = () => {

let history = useHistory()
const [expanded, setExpanded] = useState(false)
const [state, dispatch] = useContext(Context);
const [loggedin, updateloggedinstatus] = useState(false);

useEffect(() => {
    if  (localStorage.jwtToken) {
        const token = localStorage.jwtToken
        setAuthToken(token)
        const decoded = jwt_decode(token)
        dispatch({
            type: 'SET_CURRENT_USER',
            payload : decoded
        })
        updateloggedinstatus(true)
        const currentTime = Date.now() / 1000;
    if  (decoded.exp < currentTime) {
        localStorage.removeItem('jwtToken');
        setAuthToken(false);
        history.push('/login')
        dispatch({
            type: 'SET_CURRENT_USER',
            payload : decoded
        })
        }
    } else {
        updateloggedinstatus(false)
    }
},[state.isAuthenticated, state.user])

return (
<Navbar onToggle={()=>setExpanded(!expanded)} expanded={expanded} bg='primary' variant='dark' expand='lg' fixed='top'>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                    <Nav.Link as={Link} to='/' className='header-router-a' onClick={() => setExpanded(false)}> Home </Nav.Link>
                    <Nav.Link as={Link} to='/quiz' className='header-router-a' onClick={() => setExpanded(false)}> Personality Quiz </Nav.Link>
                    <Nav.Link as={Link} to='/shopper' className='header-router-a' onClick={() => setExpanded(false)}>Shopper</Nav.Link>
                    <Nav.Link as={Link} to='/contact' className='header-router-a' onClick={() => setExpanded(false)}>Contact</Nav.Link>
                    </Nav>
                    {loggedin ? 
                    <React.Fragment>
                    <Navbar.Text className='auth'as={Link} to={`/profile/${state.user}`}  onClick={() => setExpanded(false)} > Signed in as: {state.user}</Navbar.Text >
                    <Button onClick = {() => {
                            localStorage.removeItem('jwtToken');
                            setExpanded(false)
                            setAuthToken(false);
                            dispatch({
                                type: 'SET_CURRENT_USER',
                                payload : {}
                            });
                    }} > Log Out </Button>
                    </React.Fragment>
                     : <Button className='auth' onClick={() => {history.push('/login'); setExpanded(false)}}> LOG IN </Button>}
    </Navbar.Collapse>
    </Navbar>
)
}

export default Header
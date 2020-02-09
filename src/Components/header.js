import './styles/header.css'

import jwt_decode from 'jwt-decode';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
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

function logout (){
    localStorage.removeItem('jwtToken');
    setExpanded(false)
    setAuthToken(false);
    dispatch({
            type: 'SET_CURRENT_USER',
            payload : {}
            });
        history.push('/login')
}

return (
    <Navbar onToggle={()=>setExpanded(!expanded)} expanded={expanded} bg="light" variant="light" expand="lg" fixed="top">
    <Navbar.Brand as={Link} to={`/`}  onClick={() => setExpanded(false)}><div className="brand-logo-container">
        <img
        className="brand-logo"
        src={`${process.env.REACT_APP_BASE_URL}/images/logo.png`}
        alt="First slide"
    /></div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to='/' className='header-item' onClick={() => setExpanded(false)}> Home </Nav.Link>
        <Nav.Link as={Link} to='/shopper' className='header-item' onClick={() => setExpanded(false)}>Shopper</Nav.Link>
        <Nav.Link as={Link} to='/contact' className='header-item' onClick={() => setExpanded(false)}>Contact</Nav.Link>
      </Nav> 
      {loggedin ? 
                    <Nav>
                    <Navbar.Text className='header-item' as={Link} to={`/profile/${state.user}`}  onClick={() => setExpanded(false)} > Signed in as: {state.user}</Navbar.Text >
                    <Navbar.Text className='header-item' variant="outline-dark" onClick = {logout} > Log Out </Navbar.Text>
                    </Nav>
                     :
                     <Nav>
                     <Navbar.Text className='header-item' variant="outline-dark" onClick={() => {history.push('/signup'); setExpanded(false)}}> Sign Up </Navbar.Text>
                     <Navbar.Text className='header-item' variant="outline-dark" onClick={() => {history.push('/login'); setExpanded(false)}}> Log In </Navbar.Text>
                     </Nav>
                     }
    </Navbar.Collapse>
  </Navbar>
)
}

export default Header
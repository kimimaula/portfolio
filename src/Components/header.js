import './styles/header.css'
import React, { useContext, useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/1.png'
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from 'jwt-decode';
import { Context } from '../hoc/Store'
import { useHistory } from "react-router-dom";

const Header = () => {

const [loggedin, updateloggedinstatus] = useState(false);
const [state, dispatch] = useContext(Context);
let history = useHistory()

useEffect(() => {
    if (localStorage.jwtToken) {
        const token = localStorage.jwtToken
        setAuthToken(token)
        const decoded = jwt_decode(token)
        dispatch({
            type: 'SET_CURRENT_USER',
            payload : decoded
        })
        updateloggedinstatus(true)
        const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        localStorage.removeItem("jwtToken");
        setAuthToken(false);
        history.push("/login")
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
<Navbar bg="primary" variant="dark" expand="lg">
    <Navbar.Brand href="/"><img className="BrandLogo" src={Logo} alt="Project"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavLink exact activeClassName="active" to="/" className='header-router-a'>Home</NavLink>
                    <NavLink exact activeClassName="active" to="/quiz" className='header-router-a'>Personality Quiz</NavLink>
                    <NavLink exact activeClassName="active" to="/shopper" className='header-router-a'>Shopper</NavLink>
                    <NavLink exact activeClassName="active" to="/contact" className='header-router-a'>Contact</NavLink>
                    </Nav>
                    <Nav>

                        {loggedin ? <Navbar.Text> Signed in as: {state.user} <p onClick = {() => {
                            localStorage.removeItem("jwtToken");
                            setAuthToken(false);
                            dispatch({
                                type: 'SET_CURRENT_USER',
                                payload : {}
                            });
                        }}> Log Out </p></Navbar.Text> : <Link className ="login" to="/login"> Log In </Link>}

                    </Nav>   
            </Navbar.Collapse>
  </Navbar>
)
}

export default Header
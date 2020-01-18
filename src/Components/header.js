import './styles/header.css'
import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/1.png'

const Header = () => 

<Navbar bg="primary" variant="dark" expand="lg">
    <Navbar.Brand href="/"><img className="BrandLogo" src={Logo} alt="Project"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavLink exact activeClassName="active" to="/" className='header-router-a'>Home</NavLink>
                    <NavLink exact activeClassName="active" to="/quiz" className='header-router-a'>Personality Quiz</NavLink>
                    <NavLink exact activeClassName="active" to="/shopping" className='header-router-a'>Shopping</NavLink>
                    <NavLink exact activeClassName="active" to="/contact" className='header-router-a'>Contact</NavLink>
                    </Nav>
                    <Nav>
                    <Navbar.Text>
                        Signed in as: <NavLink exact activeClassName="active" to="/profile">Kimmy</NavLink>
                    </Navbar.Text>
                    </Nav>   
            </Navbar.Collapse>
  </Navbar>

export default Header
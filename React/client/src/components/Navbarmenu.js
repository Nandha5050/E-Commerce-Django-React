import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Navbarmenu = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
          <Nav className="me-auto">
            <NavLink className="show-products-nav" to='/'>Products</NavLink>
            <NavLink className="add-products-nav" to='/add'>Add Products</NavLink>
          </Nav>
    </Navbar>
    </div>
  )
}

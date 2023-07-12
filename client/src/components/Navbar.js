import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
const NavBar = () => {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cartReducer)
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand > <Image src="images/logo.png" style={{ height: "50px" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/login">
                                <Nav.Link  >Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Nav.Link  >Register</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link  >Cart {cartState.cartItems.length}</Nav.Link>

                            </LinkContainer>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;

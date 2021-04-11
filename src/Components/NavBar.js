import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import React from 'react'

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/">Game 1</Nav.Link>
                <Nav.Link href="/game2">Game 2</Nav.Link>
                <Nav.Link href="/game3">Game 3</Nav.Link>
                <Nav.Link href="/game4">Game 4</Nav.Link>
                <Nav.Link href="/game5">Game 5</Nav.Link>
            </Nav>
            </Navbar>
        </>
    )
}

export default NavBar



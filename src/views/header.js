import React from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
export default function Header(props){
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="nav-header">
                <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/continents">Continents</Nav.Link>
                <Nav.Link href="/countries">Countries</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/county">Local County Info</Nav.Link>
                <Nav.Link href="/usstates">US States</Nav.Link>
                <Nav.Link href="/testing-sites">Testing Sites</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
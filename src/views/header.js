import React from 'react'
import {Navbar,Nav,Form} from 'react-bootstrap'

export default function Header(props){
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="nav-header">
                <Navbar.Brand href="#home" style={{"fontFamily":"sans-serif"}}>{props.name}</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/" className='tabs-section'>Home</Nav.Link>
                <Nav.Link href="/continents" className='tabs-section'>Continents</Nav.Link>
                <Nav.Link href="/countries" className='tabs-section'>Countries</Nav.Link>
                <Nav.Link href="/news" className='tabs-section'>News</Nav.Link>
                <Nav.Link href="/county" className='tabs-section'>Local County Info</Nav.Link>
                <Nav.Link href="/usstates" className='tabs-section'>US States</Nav.Link>
                <Nav.Link href="/testing-sites" className='tabs-section'>Testing Sites</Nav.Link>
                </Nav>
                <Form inline>
                {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button> */}
                <Nav.Link href="/about" className='tabs-section'>About</Nav.Link>
                </Form>
            </Navbar>
        </div>
    )
}
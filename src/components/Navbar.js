import React from 'react'
import { Navbar, Nav, NavDropdown, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';

const NavigationB = () => {
    return(        
        <div>
        <Navbar bg="light" expand="lg">        
          <Navbar.Brand href="#home">JakSign</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/">News</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>              
            </Nav>
          </Navbar.Collapse>
          <div style={{ textAlign:'center',  float:'right'}}>
            <Row>
              <Col>
                <Login />
              </Col>
              <Col>
                <Register />
              </Col>
              </Row>
              </div>  
      </Navbar>        
        </div>
    );
}

export default NavigationB;
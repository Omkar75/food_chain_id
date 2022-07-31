import React, { useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Navbar} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown } from "react-bootstrap";
import AuthContext from "../context/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const NavbarComp = () => {
  const { logout, auth } = useContext(AuthContext);
  const [authuser, setauthuser] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    setauthuser(auth)
  }, [auth])
  
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="!rounded-b !shadow-lg"
    >
      <Container className="!flex !flex-wrap !justify-between !items-center !mx-auto">
        <Navbar.Brand href="#home"><img className="h-12" src="/FoodChain.svg"/></Navbar.Brand>

        <div className="flex items-center">
          {console.log(authuser)}
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown" className='lg:hidden'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            */}
          {authuser?.user?<Dropdown
            title="Dropdown"
            id="collasible-nav-dropdown"
            className="lg:hidden"
          >
            <Dropdown.Toggle
                id="dropdown-basic" className="!bg-inherit border-0 !text-darkmain !rounded-full after:!content-none !p-0"
              >
                <FaUserCircle className="!w-10 !h-10"/>
              </Dropdown.Toggle>

            <Dropdown.Menu>
              {/* {!auth.accessToken ? (
                <Dropdown.Item>Hello</Dropdown.Item>
              ) : (
                
              )} */}
              <Dropdown.Item onClick={()=>navigate('profilepage')}>Profile Page</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>:""}
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown" className='!hidden lg:!block'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            {(authuser?.user)?<Dropdown
            title="Dropdown"
            id="collasible-nav-dropdown"
            className=""
          >
            <Dropdown.Toggle
                id="dropdown-basic" className="!bg-inherit border-0 !text-darkmain !rounded-full after:!content-none !p-0"
              >
                <FaUserCircle className="!w-10 !h-10"/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
              {/* {!auth.accessToken ? (
                <Dropdown.Item>Hello</Dropdown.Item>
              ) : (
                
              )} */}
              <Dropdown.Item onClick={logout}>Profile Page</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>:""}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;

import React, {Component} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

export default class NavbarComp extends Component {
  render() {
    return(
    <>
    <br />
    <Navbar bg="light" variant="light">
      <Container>
      
      <Nav clasName="me-auto">
        <div>
          <Nav.Link href="#Petlog">
            <button type="button" class="PetlogButton">
              <span class="Pet Log"></span>
              Pet Log
            </button>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link href="#NewPet">
            <button type="button" class="NewPetButton">
              New Pet
            </button>
          </Nav.Link>
        </div>
      </Nav>
      </Container>
    </Navbar>
    </>
    
      );
    }
  }





/* TEMPORARY CHANGE (TESTING NEW NAVBAR)

import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/Petlog" activeStyle>
            Petlog
          </NavLink>
          <NavLink to="/NewPet" activeStyle>
            New Pet Form
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;

*/
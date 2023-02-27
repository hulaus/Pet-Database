import React, {Component} from 'react';
import Petlog from '../petlog/Petlog';
import NewPet from '../newPet/NewPet';
import {Navbar, Nav, Container} from 'react-bootstrap';

export default class NavbarComp extends Component {
  render() {
    return(
    <>
    <br />
    <Navbar bg="light" variant="light">
      <Container>
      
      <Nav className="me-auto">
        <div>
          <Nav.Link  href="Petlog" >
            <button type="button" className="PetlogButton">
              <span className="PetLog"></span>
              Pet Log
            </button>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link href="NewPet">
            <button type="button" className="NewPetButton">
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





import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
  
const navbar = () => {
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
  
export default navbar;

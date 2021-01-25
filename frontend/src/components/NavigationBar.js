import React, { useState } from 'react';
import {NavLink} from "react-router-dom"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
 
 
 
} from 'reactstrap';

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    
 
      <Navbar className="nav"  light expand="md">
    
        
        <NavbarToggler onClick={toggle} />
       
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
             
              <NavLink to="/"className="item1">Home</NavLink>
            </NavItem>

           
            <NavItem>
              <NavLink to = "/cities" className= "item">Cities</NavLink>
            </NavItem>
         

            <NavItem>
              <NavLink to ="/test" className = "item">Test</NavLink>
            </NavItem>
            
          </Nav>
          <img className= "imagen2" src = "./assets/logo.png"  alt="" />
        </Collapse>
      </Navbar>

      <img className= "imagen1" src = "./assets/MYTINERARY.png"   alt="" />

      
     
   
   
    </>
  );
}

export default NavigationBar;


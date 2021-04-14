import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
} from "reactstrap";

import "../assets/css/main.css";

const NavComp = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <Link to="/">Main</Link>
        </NavItem>
        <NavItem>
          <Link to="/answer">Conspect</Link>
        </NavItem>
        <NavItem>
          <Link to="/secondlesson">Lesson 2</Link>
        </NavItem>
        <NavItem>
          <Link to="/thirdlesson">Lesson 3</Link>
        </NavItem>
        <NavItem>
          <Link to="/fourthlesson">Lesson 4</Link>
        </NavItem>
        <NavItem>
          <Link to="/sixthlesson">Lesson 6</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavComp;

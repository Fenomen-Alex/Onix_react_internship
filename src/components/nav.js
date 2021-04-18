import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

import '../assets/css/main.css';

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
          <Link to="/answer">Conspectus</Link>
        </NavItem>
        <NavItem>
          <Link to="/second-lesson">Lesson 2</Link>
        </NavItem>
        <NavItem>
          <Link to="/third-lesson">Lesson 3</Link>
        </NavItem>
        <NavItem>
          <Link to="/fourth-lesson">Lesson 4</Link>
        </NavItem>
        <NavItem>
          <Link to="/sixth-lesson">Lesson 6</Link>
        </NavItem>
        <NavItem>
          <Link to="/ninth-lesson">Lesson 9</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavComp;

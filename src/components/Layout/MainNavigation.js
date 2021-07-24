import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

import {
  Menu,
  MenuItem,
  MenuButton,
  FocusableItem
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import { DiReact } from "react-icons/di";
import { BiLogInCircle, BiLogOutCircle, BiUserCircle, BiUserPin } from "react-icons/bi";

import { IconContext } from "react-icons";
import { AiOutlineDashboard } from "react-icons/ai";
const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  const [filter, setFilter] = useState('');

  const people = [
    {
      id: 1,
      name: 'Firebase',
      link: '/api-firebase',
    },
    {
      id: 2,
      name: 'Https',
      link: '/api-http',
    },

  ];

  const cheetsheet = [
    {
      id: 0,
      name: 'Getting Started',
      link: '/api-firebase',
    },
    {
      id: 1,
      name: 'Working With Components',
      link: '/api-firebase',
    },
    {
      id: 2,
      name: 'Passing Data via Props',
      link: '/api-http',
    },
    {
      id: 3,
      name: 'State & Events',
      link: '/api-http',
    },
    {
      id: 4,
      name: 'Navigation & Routung',
      link: '/api-http',
    },
    {
      id: 5,
      name: 'Forms & User Input',
      link: '/api-http',
    },
    {
      id: 6,
      name: 'Styling React Components',
      link: '/api-http',
    },
    {
      id: 7,
      name: 'Fragments, Portals & "Refs',
      link: '/api-http',
    },
    {
      id: 8,
      name: 'Using Effects Hooks',
      link: '/api-http',
    },
    {
      id: 9,
      name: 'Sending Http Requests',
      link: '/api-http',
    },
    {
      id: 10,
      name: 'Redux & Context API',
      link: '/api-http',
    },
    {
      id: 11,
      name: 'Authentication',
      link: '/api-http',
    },
    {
      id: 12,
      name: 'Animating React Apps',
      link: '/api-http',
    },
     
    
  ];

  return (
      <Navbar expand="lg" className={classes.myNavBar}>
        <Container>
          <div href="/" >
             <IconContext.Provider value={{ color: "#00def8", size: "2.8em", className: "global-class-name" }}>
                <DiReact />
            </IconContext.Provider>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="CheetSheet" id="collasible-nav-dropdown"
              onChange={e => e.open && setFilter('')}>
                <FocusableItem>
                    {({ ref }) => (
                        <input ref={ref} type="text" placeholder="Type to filter" class="dropFilterInput" value={filter} onChange={e => setFilter(e.target.value)} />
                    )}
                </FocusableItem>
                <NavDropdown.Divider />
                  {cheetsheet.filter(cheetsheet => cheetsheet.name.toUpperCase().includes(filter.trim().toUpperCase())).map(cheetsheet => (
                    <MenuItem key={cheetsheet.id} className={({ active, hover }) => active ? 'activeClass' : hover ? 'HoverClass' : 'filterItem'} >
                      <Link to={cheetsheet.link} >{cheetsheet.name}</Link>
                  </MenuItem>
                  ))}
            </NavDropdown>
              
              <NavDropdown title="API Examples" id="collasible-nav-dropdown"
              onChange={e => e.open && setFilter('')}>
                <FocusableItem>
                    {({ ref }) => (
                        <input ref={ref} type="text" placeholder="Type to filter" class="dropFilterInput" value={filter} onChange={e => setFilter(e.target.value)} />
                    )}
                </FocusableItem>
                <NavDropdown.Divider />
                  {people.filter(person => person.name.toUpperCase().includes(filter.trim().toUpperCase())).map(person => (
                    <MenuItem key={person.id} className={({ active, hover }) => active ? 'activeClass' : hover ? 'HoverClass' : 'filterItem'} >
                      <Link to={person.link} >{person.name}</Link>
                  </MenuItem>
                  ))}
            </NavDropdown>
           
            </Nav>
            <Nav>
               {isLoggedIn && (
                <NavDropdown  align="end" title={
                  <IconContext.Provider value={{ color: "#00e0f8", size: "2em", className: "global-class-name" }}>
                  <BiUserCircle />
                </IconContext.Provider>
                } id="basic-nav-dropdown" >
                 

                  
                  <NavDropdown.Item href="/dashboard">
                  <IconContext.Provider value={{ color: "#00e0f8", size: "1.5em", className: "dropIconUser" }}>
                   <AiOutlineDashboard />Dashboard
                 </IconContext.Provider>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/profile">
                  <IconContext.Provider value={{ color: "#00e0f8", size: "1.5em", className: "dropIconUser" }}>
                   <BiUserPin />Profile
                 </IconContext.Provider>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item onClick={logoutHandler} >
                  <IconContext.Provider value={{ color: "#00e0f8", size: "1.5em", className: "dropIconUser" }}>
                   <BiLogOutCircle />LogOut
                 </IconContext.Provider>
                    </NavDropdown.Item>
                </NavDropdown>
                )}
              {!isLoggedIn && (    
               <Link to='/auth'>
                  <IconContext.Provider value={{ color: "#00e0f8", size: "2.8em", className: "global-class-name" }}>
                   <BiLogInCircle />
                 </IconContext.Provider>
               </Link> 
               )}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default MainNavigation;

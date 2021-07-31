import { useContext, useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

import {
  Menu,
  MenuItem,
  MenuButton,
  FocusableItem
} from '@szhsin/react-menu';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import { DiReact } from "react-icons/di";
import { BiLogInCircle, BiLogOutCircle, BiUserCircle, BiUserPin } from "react-icons/bi";

import { IconContext } from "react-icons";
import { AiOutlineDashboard } from "react-icons/ai";


import {func2,routes} from '../../helpers/Helpers.js';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;


  
  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  const [filter, setFilter] = useState('');

 

  let pathname = window.location.pathname;
    useEffect(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname]);




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
          
                  {routes().filter(cheetsheet => cheetsheet.name.toUpperCase().includes(filter.trim().toUpperCase())).map(cheetsheet => (
                    <MenuItem 
                    href={cheetsheet.path} key={cheetsheet.id} 
                
                    className={ [`${pathname.match(cheetsheet.path) ? classes.activeClass : classes.HoverClass }`, classes.filterItem ].join(' ')}
                     >
                    {cheetsheet.name}
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
              
                  {func2().filter(person => person.name.toUpperCase().includes(filter.trim().toUpperCase())).map(person => (
                    <MenuItem href={person.link}key={person.id} className={({ active, hover }) => active ? 'activeClass' : hover ? 'HoverClass' : 'filterItem'} >
                    {person.name}
                  </MenuItem>
                  ))}
            </NavDropdown>
           
            </Nav>
            <Nav>
               
               {isLoggedIn && (
                <NavDropdown  align="end" title=
                {[
                  "Welcome User! ", <IconContext.Provider value={{ color: "#00e0f8", size: "2em", className: "global-class-name" }}>
                  <BiUserCircle />
                </IconContext.Provider>
                ]
                 
                  
                } 
                id="basic-nav-dropdown" >
                 
                  
                  
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
                <Nav.Link href="/auth">
                  <IconContext.Provider value={{ color: "#00e0f8", size: "2.8em", className: "global-class-name" }}>
                   <BiLogInCircle />
                 </IconContext.Provider>
                 </Nav.Link>  
               )}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default MainNavigation;

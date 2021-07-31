import {React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useRouteMatch, 
  withRouter 
} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import {routes} from '../../helpers/Helpers.js';
import {Row, Col, Nav, Container} from 'react-bootstrap';

import classes from './CheetSheet.module.css';


export default function CheetSheet() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnClick = index => {
    setActiveIndex(index); 
  };

  let pathname = window.location.pathname;
    useEffect(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname]);

  return (
    <Container>
      <div className="singleHeaderBar">
      
      <h2>CheetSheet</h2>
      </div>
    <Router>
    <Row>
        <Col sm={2}>
        <Switch>
        <ListGroup as="ul" className={classes.sidebarCheetSheet}>
        {routes().map((route, index) => (
        
          <ListGroup.Item as="li" key={index} onClick={() => handleOnClick(index)}
          className={ [`${pathname.match(route.path) ? classes.active : classes.unActive }`, classes.sideNavItem ].join(' ')}
         
        >
              <Link to={route.path}
            
              >{route.name}</Link>
              </ListGroup.Item>
            ))}
              </ListGroup>
      </Switch>

          <Switch>
            {routes().map((route, index) => (
        
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
     

        </Col>
        <Col sm={10}>
          <div  className={classes.contentArea}>
          <Switch>
            {routes().map((route, index) => (
    
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>

          </div>
         
          </Col>
      </Row>
    </Router>
    </Container>
  );
}

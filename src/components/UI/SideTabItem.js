import { useContext, useState, useRef  } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import {Row, Col, Nav, Container} from 'react-bootstrap';



function SideTabItem(props) {

  

    return (
    
    <Nav.Item>
        <Nav.Link eventKey={props.id} ><Link to={`/cheetsheet/${props.link}`}>{props.title}</Link></Nav.Link>
      </Nav.Item>

  
    );
  }

  export default SideTabItem;

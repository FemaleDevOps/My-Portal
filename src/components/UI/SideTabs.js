import { useContext, useState, useRef  } from 'react';
import Tab from 'react-bootstrap/Tab';
import {Row, Col, Nav, Container} from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
function SideTabs(props) {
  
    return (
   
     
    
      <Tab.Pane eventKey={props.id}>
  
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      </Tab.Pane>
    
    );
  }


  export default SideTabs;

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Menu from './tabs/Menu';

import ControlledTabs from '../../components/UI/ControlledTabs';

import {Row, Col, Nav, Container} from 'react-bootstrap';
const Dashboard = () => {
  
  return (
    <Container>
      <div className="singleHeaderBar">
      <h2>Dashboard</h2>
      </div>

     
{/*   
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Banners</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">CheetSheet</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <Menu />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <>
          <h4>Coming Soon</h4>
          </>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container> */}
  <ControlledTabs />
  
  </Container>
  );

};

export default Dashboard;

import { useContext, useState, useRef  } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
function ControlledTabs() {
    const [key, setKey] = useState('home');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <h1>home</h1>
        </Tab>
        <Tab eventKey="profile" title="Profile">
        <h1>fff</h1>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
        <h1>fff</h1>
        </Tab>
      </Tabs>
    );
  }


  export default ControlledTabs;

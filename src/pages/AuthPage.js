import AuthForm from '../components/Auth/AuthForm';
import {Row, Col} from 'react-bootstrap';


const AuthPage = () => {
  let background = process.env.PUBLIC_URL + 'images/react.jpg';
  return(
    <div className="loginPage">
       <Row>
         <Col lg="5" className="signUpInner">
           <AuthForm />
        </Col>
        <Col className="signUpInner" style={{ backgroundImage: `url(${background})` }}></Col>
      </Row>
    </div>
   
  )
};

export default AuthPage;

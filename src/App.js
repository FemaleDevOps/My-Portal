import { useContext } from 'react';

import {
  BrowserRouter as Router,
  Link,
  useLocation,
  Switch,
  Route,
  Redirect,
  useParams
} from "react-router-dom";

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

import AllQuotes from './pages/quotes/AllQuotes';
import QuoteDetail from './pages/quotes/QuoteDetail';
import NewQuote from './pages/quotes/NewQuote';

import HttpApi from './pages/books/API-Http';

import NotFound from './pages/quotes/NotFound';
import Dashboard from './pages/dashboard/Dashboard';

import CheetSheet from './pages/cheetsheet/CheetSheet';



function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Router>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/api-firebase' exact>
          <AllQuotes />
        </Route>
        <Route path='/api-firebase/:quoteId'>
          <QuoteDetail />
        </Route>

        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='/api-http' exact>
            <HttpApi />
        </Route>
        <Route path='/cheetSheet' exact>
            <Redirect to="/cheetSheet/getting-started" />
        </Route>
        <Route path='/cheetSheet/' >
            <CheetSheet />
        </Route>
     
        {!authCtx.isLoggedIn && (
          <Route path='/auth' >
            <AuthPage />
          </Route>
        )}
        <Route path='/profile'>
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='/dashboard'>
          {authCtx.isLoggedIn && <Dashboard />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      </Router>
    </Layout>
  );
}

export default App;

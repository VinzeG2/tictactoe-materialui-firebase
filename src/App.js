import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './components/Navigation';

import LandingPage from './components/LandingPage';
import HomePage from './components/Home';
import SignUpPage from './components/Authentication/SignUp';
import SignInPage from './components/Authentication/SignIn';

import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Authentication/Session';

const App = ({authUser}) => {
  console.log(authUser)
  return (
    <Router>
      <div>
        <Navigation authUser={authUser} />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
      </div>
    </Router>
  ); 
}
   

export default withAuthentication(App);

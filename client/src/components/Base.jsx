import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

import Auth from '../modules/Auth.js'

import PrivateRoute from '../containers/PrivateRoute.jsx';
import PublicRoute from '../containers/PublicRoute.jsx';

import HomePage from './HomePage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import DashboardPage from '../containers/DashboardPage.jsx';

const Base = () => (
  <div>
  {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
      <ul className="navbar-nav">
      <li className="nav-item active">
      <a className="navbar-brand" href="/">Project 3</a>
      </li>
      <li className="nav-item">
      <Link to="/">Home</Link>
      </li>
      {Auth.isUserAuthenticated() ?(
      <li className="nav-item">
      <Link to="/logout">Log out</Link>
      </li>
      ) : <div>
      <li className="nav-item">
      <Link to="/login">Log in</Link>
      </li>
      <li className="nav-item">
      <Link to="/signup">Sign up</Link>
      </li>
      </div>
      }
      </ul>
  </nav> */}

  <nav className="navbar navbar-expand-lg navbar-light bg-light col-md-12 header">
    sbdfksbdfkjs
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav ml-auto">
         <li>
         <a className="nav-link"><Link to="/">Home</Link></a>
         </li>
           {Auth.isUserAuthenticated() ?(
           <li className="nav-item nav-buttons">
             <a className="nav-link"><Link to="/logout">Logout</Link></a>
           </li>
           ): 
           <div>
           <li className="nav-item nav-buttons">
           <a className="nav-link"><Link to="/login">Log in</Link></a>
           </li>
           <li className="nav-item nav-buttons">
             <a className="nav-link"><Link to="/signup">Sign up</Link></a>
           </li>
           </div>
           }
         </ul>
       </div>
  </nav>

  <Switch>
        <PublicRoute exact path='/login' component={LoginPage} authenticated={Auth.isUserAuthenticated()} />
        <PublicRoute exact path='/signup' component={SignUpPage} authenticated={Auth.isUserAuthenticated()} />
        <PrivateRoute exact path='/dashboard' component={DashboardPage} authenticated={Auth.isUserAuthenticated()} />
        <PrivateRoute exact path='/logout'
          component={() => {
            Auth.deauthenticateUser();
            return (
              <Redirect to="/" replace />
            );
          }}
          authenticated={Auth.isUserAuthenticated()}
        />
        <Route exact path='/' component={HomePage} />
      </Switch>

  
  
    {/* <div className="navbar static-top">
    <ul className="navbar-nav">
      <li className="navbar-brand">
        <Link to="/">React App</Link>
      </li>
      {Auth.isUserAuthenticated() ? (
        <li className="nav-item">
          <Link to="/logout">Log out</Link>
        </li>
      ) : (
        <li className="nav-item">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </li>
      )}

      </ul>
      <Switch>
        <PublicRoute exact path='/login' component={LoginPage} authenticated={Auth.isUserAuthenticated()} />
        <PublicRoute exact path='/signup' component={SignUpPage} authenticated={Auth.isUserAuthenticated()} />
        <PrivateRoute exact path='/dashboard' component={DashboardPage} authenticated={Auth.isUserAuthenticated()} />
        <PrivateRoute exact path='/logout'
          component={() => {
            Auth.deauthenticateUser();
            return (
              <Redirect to="/" replace />
            );
          }}
          authenticated={Auth.isUserAuthenticated()}
        />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div> */}
  </div>
);

export default Base;

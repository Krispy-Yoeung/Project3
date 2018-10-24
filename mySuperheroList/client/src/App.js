import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css'
// components
import Signup from './components/Forms/sign-up-form'
import LoginForm from './components/Forms/login-form'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Superheros from './components/Superhero'
import Dashboard from './components/Dashboard'


import Footer from './components/Footer/footer'
import Forum from './components/Forum/forum';
import Random from './components/Forum/Categories/random';
import Superhero from './components/Forum/Categories/superhero';
import Villain from './components/Forum/Categories/villain';


import NewTopic from './components/Forum/NewTopic/newTopic';


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Route
          exact path="/"
          component={Home} />

        <Route
          exact path="/superheros"
          component={Superheros} />

        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup
              signup={this.signup}
            />}
        />
        <Route
          exact path="/dashboard"
          render={() =>
            <Dashboard
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          exact path="/forum"
          render={() =>
            <Forum
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          exact path="/newtopic"
          render={() =>
            <NewTopic
              username={this.state.username}
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          exact path="/forum/random"
          render={() =>
            <Random
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          exact path="/forum/superhero"
          render={() =>
            <Superhero
              loggedIn={this.state.loggedIn}
            />}
        />
        <Route
          exact path="/forum/villain"
          render={() =>
            <Villain
              loggedIn={this.state.loggedIn}
            />}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;
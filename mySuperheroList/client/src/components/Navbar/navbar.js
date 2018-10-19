import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../logo.svg';
import axios from 'axios'
import "./navbar.css";

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                        <div id="top-filler"></div>
                        <a className="navbar-brand" href="/">
                            <img src="https://via.placeholder.com/350x150" width="50" height="50"  alt=""/>
                        </a>
                            <h1 className="App-title">mySuperheroList</h1>
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="/dashboard" className="btn btn-link ml-5">
                                    <span className="text-secondary">Dashboard</span>
				                </Link>
                                <Link to="/superhero" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Superhero</span>
				                </Link>
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">Logout</span></Link>
                            </section>
                        ) : (
                            <section className="navbar-section">
                                <Link to="/" className="btn btn-link text-secondary ml-5">
                                    <span className="text-secondary">Home</span>
                                </Link>
                                <Link to="/login" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Login</span>
				                </Link>
                                <Link to="/signup" className="btn btn-link">
                                    <span className="text-secondary">Sign up</span>
				                </Link>
                
                            </section>
                        )}
            </nav>

        );

    }
}

export default Navbar
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from '../logo.svg';
import axios from "axios";
import "./navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <nav className="navbar navbar-expand-sm navbar-light">
        <div id="top-filler" />
        <a className="navbar-brand" href="/">
          <img
            className="title-image"
            src="http://freeaddon.com/wp-content/uploads/2017/09/marvel-vs-dc-0.jpg"
            alt="Marvel vs DC"
          />
        </a>
        <h1 className="App-title">mySuperheroList</h1>
        {loggedIn ? (
          <section className="navbar navbar-default navbar-static-top">
            <Link to="/dashboard" className="btn btn-link ml-5">
                                    <span className="text-secondary">Super Finder</span>
				                </Link>
                                {/* <Link to="/superheros" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Superhero</span>
				                </Link> */}
                                <Link to="/forum" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Forum</span>
				                </Link>
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">Logout</span></Link>
                            </section>
                        ) : (
                            <section className="navbar-section">
                                <Link to="/" className="btn btn-link text-secondary ml-5">
                                    <span className="text-secondary">Home</span>
                                </Link>
                                <Link to="/forum" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Forum</span>
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

export default Navbar;

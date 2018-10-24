import React, { Component } from "react";

import { Col, Row, Container } from "../Grid";
import ComicCharacters from "../ComicCharacters";
import Youtube from "../Youtube";
// import Youtube from "../SearchBar";

import "./DashBoard.css";
import SearchBar from "../SearchBar";

import $ from "jquery";
import ComicRows from "../ComicRows";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch();
  }
  performSearch = searchTerm => {
    const queryURL = "http://superheroapi.com/api/";
    const access = "2160363873976801/";
    $.ajax({
      url: `${queryURL}${access}search/${searchTerm}`,
      method: "GET"
    }).then(data => {
      let res = data.results;
      let comicRows = [];
      //   char is short for character
      res.forEach(char => {
        console.log(char);
        const comicRow = (
          <ComicRows
            key={char.id}
            name={char.name}
            image={char.image.url}
            bio={char.biography.publisher.toUpperCase()}
            heroOrVillian={char.biography.alignment.toUpperCase()}
            group={char.connections["group-affiliation"]}
          />
        );
        comicRows.push(comicRow);
      });
      this.setState({
        rows: comicRows
      });
    });
  };

  searchHandler = event => {
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  };
  render() {
    return (
      <Container>
        <SearchBar onChange={this.searchHandler} />
        <Row>
          <Col size="md-12">
            <ComicCharacters rows={this.state.rows} />
          </Col>
          {/* <Col size="md-4">
            <Youtube />
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Dashboard;

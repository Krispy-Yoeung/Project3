import React, { Component } from "react";
// import $ from "jquery";
// import ComicRows from "../ComicRows";

class ComicCharacters extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <input
          style={{
            fontSize: 24,
            display: "block",
            width: "100%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          onChange={this.searchHandler}
          placeholder="Enter search term"
        /> */}
        {this.props.rows}
      </React.Fragment>
    );
  }
}

export default ComicCharacters;

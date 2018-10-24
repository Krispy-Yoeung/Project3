import React, { Component } from "react";
import $ from "jquery";

import Video from "../Video";

class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.videoSearch();
  }
  videoSearch(searchTerm) {
    let key = "AIzaSyADMF71GHCjKHyWc_B4BOWAEppM64x59zE";
    let URL = "https://www.googleapis.com/youtube/v3/search/";
    let options = {
      part: "snippet",
      maxResults: 10,
      key: key,
      q: searchTerm
    };
    $.getJSON(URL, options, data => {
      const res = data.items;
      const videos = [];

      res.forEach(item => {
        const video = (
          <Video
            key={item.id.videoId}
            id={item.id.videoId}
            title={item.snippet.title}
          />
        );
        videos.push(video);
      });

      this.setState({
        iframe: videos
      });
    });
  }

  searchHandler = event => {
    const searchTerm = event.target.value;
    this.videoSearch(searchTerm);
  };

  render() {
    return (
      <div className="App">
        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          onChange={this.searchHandler.bind(this)}
          placeholder="Enter search term"
        />
        <h1>Youtube Videos</h1>
        <div className="video-content">{this.state.iframe}</div>
      </div>
    );
  }
}

export default Youtube;

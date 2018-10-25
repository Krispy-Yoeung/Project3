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
      maxResults: 25,
      key: key,
      q: `${this.props.name} ${this.props.publishers} ${this.props.realName}`
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

  // searchHandler = event => {
  //   const searchTerm = event.target.value;
  //   this.videoSearch(searchTerm);
  // };

  render() {
    return (
      <div>
        <h1>Video Viewing</h1>
        {this.state.iframe}
      </div>
    );
  }
}

export default Youtube;

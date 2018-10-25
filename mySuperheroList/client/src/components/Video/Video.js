import React, { Component } from "react";
import "./Video.css";
class Video extends Component {
  render() {
    return (
      <div className="video-content">
        <table key={this.props.id} id={this.props.id}>
          <thead>
            <th className="video">{this.props.title}</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <iframe
                  // className="videos"
                  width="400"
                  height="200"
                  title={this.props.title}
                  src={"https://www.youtube.com/embed/" + this.props.id}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Video;

import React, { Component } from "react";
// import "../App.css";
class Video extends Component {
  render() {
    return (
      <div className="video-content">
        <table key={this.props.id} id={this.props.id}>
          <tbody>
            <tr>
              <td className="videos">
                <iframe
                  width="560"
                  height="315"
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

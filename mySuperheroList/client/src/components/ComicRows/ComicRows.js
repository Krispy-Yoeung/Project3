import React, { Component } from "react";

import "./ComicRows.css";

import Modal from "../Modal";
import Youtube from "../Youtube";

class ComicRows extends Component {
  state = {
    show: false
  };
  // Youtube link

  // Wikipedia link
  movie = () => {
    // const url `http://www.omdbapi.com/?t=batman&apikey=cf7fc22c`
  };
  readMore = () => {
    const url = `https://en.wikipedia.org/wiki/${this.props.name}`;

    const win = window.open(url, "_blank");
    win.focus();
  };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  render() {
    return (
      <div>
        <table key={this.props.id} className="table">
          <tbody>
            <tr>
              <td className="name-picture">
                <img
                  className="pictures"
                  src={this.props.image}
                  alt={this.props.name}
                />
              </td>
              <td className="content">
                <div>
                  <h1>{this.props.name}</h1>
                  <span className="bold">Real Name: </span>{" "}
                  {this.props.realName}
                </div>
                <div>
                  <span className="bold">Alignment:</span>{" "}
                  {this.props.heroOrVillain}
                </div>
                <div>
                  <span className="bold">Group Affiliation:</span>{" "}
                  {this.props.group}
                </div>
                <div>
                  <span className="bold">Alter-Egos: </span>
                  {this.props.ego}
                </div>
                <div>
                  <span className="bold">Alias:</span> {this.props.alias}
                </div>
                <h6>
                  <span className="bold">Publishers:</span> {this.props.bio}
                </h6>
                <input
                  className="button"
                  type="button"
                  value="Read More"
                  onClick={this.readMore.bind(this)}
                />

                <input
                  className="button"
                  type="button"
                  onClick={this.showModal}
                  value="Watch Videos"
                />

                <Modal onClose={this.showModal} show={this.state.show}>
                  <Youtube
                    name={this.props.name}
                    publishers={this.props.bio}
                    realName={this.props.realName}
                  />
                </Modal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ComicRows;

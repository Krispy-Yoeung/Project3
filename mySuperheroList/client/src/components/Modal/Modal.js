import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Col, Row } from "../Grid";
import "./Modal.css";

class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="back-drop-style">
        <div className="header">
          <Row>
            <button
              className="Close"
              onClick={e => {
                this.onClose(e);
              }}
            >
              Close
            </button>
          </Row>
        </div>
        <Container>
          <div className="modal-content">
            <div className="modal-style">{this.props.children}</div>
          </div>
        </Container>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired
};
export default Modal;

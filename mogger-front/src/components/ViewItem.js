import React, { Component } from "react";
import axios from "axios";
import "../ViewItem.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

class ViewItem extends Component {
  state = {
    data: [],
    modalIsOpen: false
  };
  componentDidMount() {
    axios.get(`/api/view/${this.props.match.params.id}`).then(res => {
      this.setState({ data: res.data });
    });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <div className="modal-container center-align">
            <h2>{data.title}</h2>
            <img className="modal-img" src={data.imgLink} alt="Transmog" />
          </div>
        </Modal>
        <div className="row">
          <div className="form-container">
            <div className="col s12 m2 l4 offset-l4">
              <div className="card">
                <div className="card-image">
                  <img className="full-item" src={data.imgLink} />
                </div>
                <div className="card-content center-align">
                  <span className="card-title">{data.title}</span>
                  <div>Head: {data.head || <span>No item specified</span>}</div>
                  <div>
                    Shoulder: {data.shoulder || <span>No item specified</span>}
                  </div>
                  <div>
                    Chest: {data.chest || <span>No item specified</span>}
                  </div>
                  <div>Back: {data.back || <span>No item specified</span>}</div>
                  <div>
                    Wrists: {data.wrists || <span>No item specified</span>}
                  </div>
                  <div>
                    Hands: {data.hands || <span>No item specified</span>}
                  </div>
                  <div>
                    Waist: {data.waist || <span>No item specified</span>}
                  </div>
                  <div>Legs: {data.legs || <span>No item specified</span>}</div>
                  <div>Feet: {data.feet || <span>No item specified</span>}</div>
                  <div>
                    Weapon: {data.weapon || <span>No item specified</span>}
                  </div>
                  <div>
                    Off-hand: {data.weapon2 || <span>No item specified</span>}
                  </div>
                </div>
                <div className="card-action center-align">
                  <h5>Extra notes</h5>
                  <p>
                    {data.notes || (
                      <span>No extra notes for this transmog</span>
                    )}
                  </p>
                </div>
              </div>
              <button className="btn" onClick={this.openModal}>
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewItem;

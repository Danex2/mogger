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
            <div className="col s12 m12 l6 offset-l3">
              <div className="card">
                <div className="card-image">
                  <img className="full-item" src={data.imgLink} />
                </div>
                <div className="card-content center-align">
                  <span className="card-title">{data.title}</span>
                  <div>
                    <span className="item-slot">Head:</span>{" "}
                    {data.head || <span>No item specified</span>}
                  </div>
                  <div>
                    <span className="item-slot">Shoulder:</span>{" "}
                    {data.shoulder || <span>No item specified</span>}
                  </div>
                  <div>
                    <span className="item-slot">Chest:</span>{" "}
                    {data.chest || <span>No item specified</span>}
                  </div>
                  <div>
                    {" "}
                    <span className="item-slot">Back:</span>{" "}
                    {data.back || <span>No item specified</span>}
                  </div>
                  <div>
                    <span className="item-slot">Wrists:</span>{" "}
                    {data.wrists || <span>No item specified</span>}
                  </div>
                  <div>
                    <span className="item-slot">Hands:</span>{" "}
                    {data.hands || <span>No item specified</span>}
                  </div>
                  <div>
                    <span className="item-slot">Waist:</span>{" "}
                    {data.waist || <span>No item specified</span>}
                  </div>
                  <div>
                    {" "}
                    <span className="item-slot">Legs:</span>{" "}
                    {data.legs || <span>No item specified</span>}
                  </div>
                  <div>
                    {" "}
                    <span className="item-slot">Feet:</span>{" "}
                    {data.feet || <span>No item specified</span>}
                  </div>
                  <div>
                    <span className="item-slot">Weapon:</span>{" "}
                    {data.weapon || <span>No item specified</span>}
                  </div>
                  <div>
                    <span className="item-slot">Off-hand:</span>{" "}
                    {data.weapon2 || <span>No item specified</span>}
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
              <button className="btn col s12 m12 l12" onClick={this.openModal}>
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

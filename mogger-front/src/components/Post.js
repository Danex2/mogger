import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    title: "",
    image: "",
    head: "",
    shoulder: "",
    chest: "",
    back: "",
    wrists: "",
    hands: "",
    waist: "",
    legs: "",
    feet: "",
    weapon: "",
    offhand: "",
    notes: "",
    armorType: "",
    class: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const postData = {
      title: this.state.title,
      imgLink: this.state.image,
      head: this.state.head,
      shoulder: this.state.shoulder,
      chest: this.state.chest,
      back: this.state.back,
      wrists: this.state.wrists,
      hands: this.state.hands,
      waist: this.state.waist,
      legs: this.state.legs,
      feet: this.state.feet,
      weapon: this.state.weapon,
      weapon2: this.state.offhand,
      notes: this.state.notes,
      class: this.state.class,
      armorType: this.state.armorType
    };
    axios
      .post("/api/post", postData)
      .then(res => {
        this.props.history.push("/view");
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state);
  };

  handleArmorChange = e => {
    this.setState({ armorType: e.target.value });
    console.log(this.state.armorType);
  };

  handleClassChange = e => {
    this.setState({ class: e.target.value });
    console.log(this.state.class);
  };

  render() {
    return (
      <div className="row container form-container">
        <h5 className="center-align">New Transmog Post</h5>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="title"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="title">Post Title</label>
            </div>
            <div className="input-field col s6">
              <input
                id="image"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="imgLink">Image Link</label>
            </div>
            <div className="input-field col s6">
              <input
                id="head"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="head">Head</label>
            </div>
            <div className="input-field col s6">
              <input
                id="shoulder"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="shoulder">Shoulder</label>
            </div>
            <div className="input-field col s6">
              <input
                id="chest"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="chest">Chest</label>
            </div>
            <div className="input-field col s6">
              <input
                id="back"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="back">Back</label>
            </div>
            <div className="input-field col s6">
              <input
                id="wrists"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="wrists">Wrists</label>
            </div>
            <div className="input-field col s6">
              <input
                id="hands"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="hands">Hands</label>
            </div>
            <div className="input-field col s6">
              <input
                id="waist"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="waist">Waist</label>
            </div>
            <div className="input-field col s6">
              <input
                id="legs"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="legs">Legs</label>
            </div>
            <div className="input-field col s6">
              <input
                id="feet"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="feet">Feet</label>
            </div>
            <div className="input-field col s6">
              <input
                id="weapon"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="weapon">Weapon</label>
            </div>
            <div className="input-field col s6">
              <input
                id="offhand"
                type="text"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <label htmlFor="weapon2">Off-hand</label>
            </div>
            <div className="input-field col s12">
              <textarea
                id="notes"
                className="materialize-textarea"
                placeholder="Extra info about the transmog"
                onChange={this.handleChange}
              />
              <label htmlFor="notes">Notes</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Post;

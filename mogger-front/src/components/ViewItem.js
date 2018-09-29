import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class ViewItem extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios.get(`/api/view/${this.props.match.params.id}`).then(res => {
      this.setState({ data: res.data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="center-align row">
        <div className="container form-container">
          <div className="col s12 m2 l6 offset-l3">
            <div className="card">
              <div className="card-image">
                <img src={data.imgLink} />
                <span className="card-title">{data.title}</span>
              </div>
              <div className="card-content center-align">
                <div>Head: {data.head}</div>
                <div>Shoulder: {data.shoulder}</div>
                <div>Chest: {data.chest}</div>
                <div>Back: {data.back}</div>
                <div>Wrists: {data.wrists}</div>
                <div>Hands: {data.hands}</div>
                <div>Waist: {data.waist}</div>
                <div>Legs: {data.legs}</div>
                <div>Feet: {data.feet}</div>
                <div>Weapon: {data.weapon}</div>
                <div>Off-hand: {data.weapon2}</div>
              </div>
              <div className="card-action center-align">
                <h5>Extra notes</h5>
                <p>{data.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewItem;

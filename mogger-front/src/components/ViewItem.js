import React, { Component } from "react";
import axios from "axios";

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
      <div className="container">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={data.imgLink} />
              <span className="card-title">{data.title}</span>
            </div>
            <div className="card-content">
              <p>{data.notes}</p>
            </div>
            <div className="card-action center-align">
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
          </div>
        </div>
      </div>
    );
  }
}

export default ViewItem;

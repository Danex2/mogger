import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

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
      <div className="row">
        <div className="container d-flex justify-content-center">
          <div className="card mb-3 col-lg-9 col-sm-12">
            <img
              className="card-img-top"
              src={data.imgLink}
              alt="Transmog Image"
            />
            <div className="card-body text-center">
              <h5 className="card-title">{data.title}</h5>
            </div>
          </div>
          <div class="card text-center mb-3">
            <div class="card-header">Items</div>
            <div class="card-body">
              <p class="card-text">{data.head}</p>
              <p class="card-text">{data.shoulder}</p>
              <p class="card-text">{data.chest}</p>
              <p class="card-text">{data.back}</p>
              <p class="card-text">{data.wrists}</p>
              <p class="card-text">{data.hands}</p>
              <p class="card-text">{data.waist}</p>
              <p class="card-text">{data.legs}</p>
              <p class="card-text">{data.feet}</p>
              <p class="card-text">{data.weapon}</p>
              <p class="card-text">{data.weapon2}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewItem;

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
      <div>
        <h1>help</h1>
      </div>
    );
  }
}

export default ViewItem;

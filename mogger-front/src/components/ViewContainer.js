import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import ViewItem from '../components/ViewItem';
import View from '../components/View';

class ViewContainer extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get('/api/view/all').then(res => {
      this.setState({ data: res.data });
    });
  }
  render() {
    const { data } = this.state;
    return <View data={data} />;
  }
}

export default ViewContainer;

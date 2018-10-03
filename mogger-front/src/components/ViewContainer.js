import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import View from "../components/View";
import Spinner from "./Spinner";

class ViewContainer extends Component {
  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    axios.get("/api/view/all").then(res => {
      this.setState({ data: res.data, loading: false });
    });
  }
  render() {
    const { data, loading } = this.state;
    if (loading) {
      return (
        <div className="spinner-container">
          <Spinner />
        </div>
      );
    }

    return <View data={data} />;
  }
}

export default ViewContainer;

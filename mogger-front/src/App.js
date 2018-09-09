import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get("/api/view/all").then(res => {
      this.setState({ data: res.data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="card-container">
        {data.map((item, i) => {
          return (
            <div key={i} className="card col-lg-2">
              <img className="card-img-top" src={item.imgLink} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <a href="#" className="btn btn-primary">
                  View full transmog
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

// turn this into container

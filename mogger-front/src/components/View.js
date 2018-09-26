import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class View extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="row container">
        {data.map(item => {
          return (
            <div key={item.id} className="col s12 m6 l4">
              <div className="card">
                <div className="card-image">
                  <img src={item.imgLink} />
                </div>
                <div className="card-content">
                  <p className="center-align">{item.title}</p>
                </div>
                <div className="card-action left-align">
                  <Link to={`/view/${item.id}`}>View full transmog</Link>
                  <span className="right-align">
                    Class: {item.class} Type: {item.armorType}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default View;

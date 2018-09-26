import React from "react";
import { Link } from "react-router-dom";

class View extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return data.map(item => {
      return (
        <div key={item.id} className="row container">
          <div className="col s12 m7 l4">
            <div className="card">
              <div className="card-image">
                <img src={item.imgLink} />
              </div>
              <div className="card-content center-align">
                <p>{item.title}</p>
              </div>
              <div className="card-action center-align">
                <Link to={`/view/${item.id}`}>View this transmog</Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default View;

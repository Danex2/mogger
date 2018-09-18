import React from 'react';
import { Link } from 'react-router-dom';

class View extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-container d-flex justify-content-center">
        {this.props.data.map(item => {
          return (
            <div
              key={item.id}
              className="card col-lg-3 col-sm-10 col-md-9 mb-3"
            >
              <h5 className="card-title d-flex justify-content-center mt-2">
                {item.title}
              </h5>
              <img
                className="card-img-top mt-1 container rounded h-75"
                src={item.imgLink}
              />
              <div className="card-body d-flex justify-content-center">
                <Link
                  to={`/view/${item.id}`}
                  className="btn btn-primary align-self-end"
                >
                  View full transmog
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default View;

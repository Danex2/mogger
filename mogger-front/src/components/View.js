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
            <div key={item.id} className="card col-lg-3 col-sm-10 col-md-9">
              <h5 className="card-title d-flex justify-content-center mt-2">
                {item.title}
              </h5>
              <img
                className="card-img-top mt-1 container rounded"
                src={item.imgLink}
              />
              <div className="card-body">
                <Link
                  to={`/view/${item.id}`}
                  className="btn btn-primary d-flex justify-content-center"
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

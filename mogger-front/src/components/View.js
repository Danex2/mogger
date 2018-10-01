import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class View extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <div className="row">
        <div className="row">
          <div className="input-field col s12 m6 l6">
            <select className="browser-default">
              <option value="Mage">Mage</option>
              <option value="Death Knight">Death Knight</option>
              <option value="Warrior">Warrior</option>
              <option value="Hunter">Hunter</option>
              <option value="Priest">Priest</option>
              <option value="Warlock">Warlock</option>
              <option value="Druid">Druid</option>
              <option value="Demon Hunter">Demon Hunter</option>
              <option value="Rogue">Rogue</option>
              <option value="Shaman">Shaman</option>
              <option value="Paladin">Paladin</option>
            </select>
          </div>
          <div className="input-field col s12 m6 l6">
            <select className="browser-default">
              <option value="Cloth">Cloth</option>
              <option value="Mail">Mail</option>
              <option value="Plate">Plate</option>
              <option value="Leather">Leather</option>
            </select>
          </div>
        </div>
        {data.map(item => {
          return (
            <div key={item.id} className="col s12 m6 l4">
              <div className="card">
                <div className="card-image">
                  <img className="view-img" src={item.imgLink} />
                </div>
                <div className="card-content">
                  <p className="center-align">{item.title}</p>
                </div>
                <div className="card-action center-align">
                  <Link to={`/view/${item.id}`}>View full transmog</Link>
                </div>
                <div className="center-align moginfo-container">
                  <span className="mog-info">{item.class}</span>{" "}
                  <span className="mog-info">{item.armorType}</span>
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

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "All",
      type: "All"
    };
  }
  handleClassChange = e => {
    this.setState({ class: e.target.value });
  };

  defaultImg = e => {
    e.target.src = "https://via.placeholder.com/100x100";
  };

  handleArmorChange = e => {
    this.setState({ type: e.target.value });
  };

  render() {
    const { data } = this.props;
    let filter = data.filter(data => {
      if (this.state.class === "All" && this.state.type !== "All") {
        return data.armorType === this.state.type;
      } else if (this.state.class !== "All" && this.state.type === "All") {
        return data.class === this.state.class;
      } else if (this.state.class !== "All" && this.state.type !== "All") {
        return (
          data.class === this.state.class && data.armorType === this.state.type // this can be refactored
        );
      } else {
        return data;
      }
    });
    return (
      <div className="row">
        <div className="row">
          <div className="input-field col s12 m6 l6">
            <select
              className="browser-default"
              onChange={this.handleClassChange}
              value={this.state.class}
            >
              <option value="All">All</option>
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
            <select
              className="browser-default"
              onChange={this.handleArmorChange}
              value={this.state.type}
            >
              <option value="All">All</option>
              <option value="Cloth">Cloth</option>
              <option value="Mail">Mail</option>
              <option value="Plate">Plate</option>
              <option value="Leather">Leather</option>
            </select>
          </div>
        </div>
        {filter.map(item => {
          return (
            <div key={item.id} className="col s12 m6 l3">
              <div className="card">
                <div className="card-image">
                  <img
                    onError={this.defaultImg}
                    className="view-img"
                    src={item.imgLink}
                  />
                </div>
                <div className="card-content">
                  <p className="center-align truncate">{item.title}</p>
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

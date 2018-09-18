import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    title: '',
    image: '',
    head: '',
    shoulder: '',
    chest: '',
    back: '',
    wrists: '',
    hands: '',
    waist: '',
    legs: '',
    feet: '',
    weapon: '',
    offhand: '',
    notes: ''
  };

  onSubmit = e => {
    e.preventDefault();
    const postData = {
      title: this.state.title,
      imgLink: this.state.image,
      head: this.state.head,
      shoulder: this.state.shoulder,
      chest: this.state.chest,
      back: this.state.back,
      wrists: this.state.wrists,
      hands: this.state.hands,
      waist: this.state.waist,
      legs: this.state.legs,
      feet: this.state.feet,
      weapon: this.state.weapon,
      weapon2: this.state.offhand,
      notes: this.state.notes
    };
    axios
      .post('/api/post', postData)
      .then(res => {
        this.props.history.push('/view');
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="container post-container d-flex align-items-center">
        <form onSubmit={this.onSubmit}>
          <h1 className="text-center">Post new transmog</h1>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Post title</label>
              <input
                onChange={this.handleChange}
                name="title"
                type="text"
                className="form-control"
                placeholder="Name your transmog post"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Image Link</label>
              <input
                onChange={this.handleChange}
                name="image"
                type="text"
                className="form-control"
                placeholder="Image link"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Head</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Head"
                name="head"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Shoulder</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Shoulder"
                name="shoulder"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Chest</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Chest"
                name="chest"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Back</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Back"
                name="back"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Wrists</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Wrists"
                name="wrists"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Hands</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Hands"
                name="hands"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Waist</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Waist"
                name="waist"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Legs</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Legs"
                name="legs"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Feet</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Feet"
                name="feet"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Weapon</label>
              <input
                onChange={this.handleChange}
                name="weapon"
                type="text"
                className="form-control"
                placeholder="Mainhand/2Hand"
              />
            </div>
            <div className="col-lg-12 mb-3">
              <label htmlFor="formGroupExampleInput2">Off-hand</label>
              <input
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Off-hand"
                name="offhand"
              />
            </div>
            <div className="col-lg-12 mb-3">
              <label htmlFor="formGroupExampleInput2">Additional Notes</label>
              <textarea
                onChange={this.handleChange}
                name="notes"
                className="form-control"
                placeholder="Any other important information"
                rows="4"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Class</label>
              <select className="form-control form-control-sm">
                <option>Class</option>
                <option>Mage</option>
                <option>Hunter</option>
                <option>Rogue</option>
                <option>Paladin</option>
                <option>Shaman</option>
                <option>Druid</option>
                <option>Warlock</option>
                <option>Priest</option>
                <option>Warrior</option>
                <option>Death Knight</option>
                <option>Monk</option>
                <option>Demon Hunter</option>
              </select>
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="formGroupExampleInput2">Armor Type</label>
              <select className="form-control form-control-sm">
                <option>Armor Type</option>
                <option>Cloth</option>
                <option>Leather</option>
                <option>Plate</option>
                <option>Mail</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mb-5 col-lg-12">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Post;

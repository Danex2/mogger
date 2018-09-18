import React, { Component } from 'react';

class Post extends Component {
<<<<<<< HEAD
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
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.shoulder);
  };
=======
>>>>>>> eeebdf6a955c51afcf3ce5aa784d9013de979fa4
  render() {
    return (
      <div className="container post-container d-flex align-items-center">
        <form>
          <h1 className="text-center">Post new transmog</h1>
<<<<<<< HEAD
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
=======
          <div class="row">
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Post title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name your transmog post"
              />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Image Link</label>
              <input
                type="text"
                class="form-control"
                placeholder="Image link"
              />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Head</label>
              <input type="text" class="form-control" placeholder="Head" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Shoulder</label>
              <input type="text" class="form-control" placeholder="Shoulder" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Chest</label>
              <input type="text" class="form-control" placeholder="Chest" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Back</label>
              <input type="text" class="form-control" placeholder="Back" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Wrists</label>
              <input type="text" class="form-control" placeholder="Wrists" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Hands</label>
              <input type="text" class="form-control" placeholder="Hands" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Waist</label>
              <input type="text" class="form-control" placeholder="Waist" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Legs</label>
              <input type="text" class="form-control" placeholder="Legs" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Feet</label>
              <input type="text" class="form-control" placeholder="Feet" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Weapon</label>
              <input
                type="text"
                class="form-control"
                placeholder="Mainhand/2Hand"
              />
            </div>
            <div class="col-lg-12 mb-3">
              <label for="formGroupExampleInput2">Off-hand</label>
              <input type="text" class="form-control" placeholder="Off-hand" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Additional Notes</label>
              <textarea
                class="form-control"
>>>>>>> eeebdf6a955c51afcf3ce5aa784d9013de979fa4
                placeholder="Any other important information"
                rows="4"
              />
            </div>
<<<<<<< HEAD
            <div className="col-lg-6 mb-5">
              <label htmlFor="formGroupExampleInput2">Class</label>
              <select class="form-control form-control-sm">
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
              <select class="form-control form-control-sm">
                <option>Armor Type</option>
                <option>Cloth</option>
                <option>Leather</option>
                <option>Plate</option>
                <option>Mail</option>
              </select>
=======
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Class</label>
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Armor Type</label>
              <input type="text" class="form-control" placeholder="Last name" />
>>>>>>> eeebdf6a955c51afcf3ce5aa784d9013de979fa4
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Post;

import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="container post-container d-flex align-items-center">
        <form>
          <h1 className="text-center">Post new transmog</h1>
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
                placeholder="Any other important information"
                rows="4"
              />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Class</label>
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
            <div class="col-lg-6 mb-3">
              <label for="formGroupExampleInput2">Armor Type</label>
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Post;

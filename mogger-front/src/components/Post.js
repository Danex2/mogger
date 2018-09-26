import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    title: "",
    image: "",
    head: "",
    shoulder: "",
    chest: "",
    back: "",
    wrists: "",
    hands: "",
    waist: "",
    legs: "",
    feet: "",
    weapon: "",
    offhand: "",
    notes: "",
    armorType: "",
    class: ""
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
      notes: this.state.notes,
      class: this.state.class,
      armorType: this.state.armorType
    };
    axios
      .post("/api/post", postData)
      .then(res => {
        this.props.history.push("/view");
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

  handleArmorChange = e => {
    this.setState({ armorType: e.target.value });
    console.log(this.state.armorType);
  };

  handleClassChange = e => {
    this.setState({ class: e.target.value });
    console.log(this.state.class);
  };

  render() {
    return <div>11</div>;
  }
}

export default Post;

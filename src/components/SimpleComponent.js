
import React, { Component } from 'react';

class SimpleComponent extends Component {

  state = {
    mood: "happy"
  }

  render() {
    console.log("inside render")
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }

  handleClick = () =>{
    // e.preventDefault();
    this.setState({
      mood: "sad"
    })
  }

}

export default SimpleComponent;

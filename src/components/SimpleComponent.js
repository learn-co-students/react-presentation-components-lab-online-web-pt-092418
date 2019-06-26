
import React, { Component } from 'react';

class SimpleComponent extends Component {

  state = {
    mood: "happy"
  }

  render() {
    // console.log("inside render")
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }

  handleClick = (e) =>{
    e.preventDefault();
    if (this.state.mood === 'happy') {
      this.setState({
        mood: "sad"
      })
    } else if (this.state.mood === 'sad') {
      this.setState({
        mood: "happy"
      })
    }
  }

 //  handleClick = () => {
 //   const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
 //   this.setState({ mood: newMood });
 // }

}

export default SimpleComponent;

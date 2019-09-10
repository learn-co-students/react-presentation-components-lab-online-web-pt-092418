import React from 'react'

const mood = 'happy';

const SimplerComponent = (props) => {
  return <div onClick={props.handleClick}>I am just happy</div>
}

export default SimplerComponent;

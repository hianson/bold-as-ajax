import React from 'react';

export class DisplayContainer extends React.Component {


  render() {
    return (
      <div style={style}>
        DisplayContainer
      </div>
    )
  }
}

const style = {
  width: '30vw',
  height: '40vh',
  background: '#e9ebee',
  border: '1px solid purple'
  // overflowY: 'scroll'
}

const DisplayContainerStyle = {
  padding: '0',
  margin: '0'
}

export default DisplayContainer;

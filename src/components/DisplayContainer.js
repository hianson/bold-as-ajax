import React from 'react';

export class DisplayContainer extends React.Component {
  displayAnimal() {
    if (this.props.display) {
      return(
        this.props.display.name.$t
      )
    }
  }

  render() {
    console.log(this.props)
    return (
      <div style={style}>
        DisplayContainer
        {this.displayAnimal()}
      </div>
    )
  }
}

const style = {
  width: '30vw',
  height: '40vh',
  background: '#e9ebee'
  // overflowY: 'scroll'
}

// const DisplayContainerStyle = {
//   padding: '0',
//   margin: '0'
// }

export default DisplayContainer;

import React from 'react';

export class ListContainer extends React.Component {
  render() {
    return (
      <div style={style}>
        ListContainer Component
      </div>
    )
  }
}

const style = {
  width: '30vw',
  height: '75vh',
  border: '1px solid blue'
}

export default ListContainer;

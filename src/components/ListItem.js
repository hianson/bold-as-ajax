import React from 'react';

export class ListItem extends React.Component {
  render() {
    console.log('ListItem', this.props.animals)
    return (
      <div style={style}>
        ListItem Component
      </div>
    )
  }
}

const style = {
  width: '30vw',
  height: '75vh',
  border: '1px solid blue'
}

export default ListItem;

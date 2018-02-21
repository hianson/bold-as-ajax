import React from 'react';
// import ListItem from './ListItem';

export class ListContainer extends React.Component {

  renderListItems() {
    // console.log('rendering listItems')
    const animals = this.props.animals
    const listItems = this.props.animals.map((animal) => {
      return(
        <li key={animal.name.$t}>{animal.name.$t}</li>
      )
    })
    return(
      <ul>{listItems}</ul>
    )
  }

  render() {
    return (
      <div style={style}>
        ListContainer Component
        {this.renderListItems()}
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

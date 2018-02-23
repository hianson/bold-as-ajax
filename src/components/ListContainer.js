import React from 'react';
import ListItem from './ListItem';
import NoPhoto from '../img/no-photo-s.png'

export class ListContainer extends React.Component {
  renderListItems() {
    const listItems = this.props.animals.map((animal) => {
      var img = NoPhoto
      if (animal.media.photos) {
        img = animal.media.photos.photo[2].$t
      }
      return(
        <ListItem
          key={animal.id.$t}
          animal={animal}
          img={img}
          handleDisplayData={this.props.handleDisplayData}
          />
      )
    })
    return(
      <ul style={ListContainerStyle}>{listItems}</ul>
    )
  }

  render() {
    return (
      <div style={style}>
        {this.renderListItems()}
      </div>
    )
  }
}

const style = {
  width: '30vw',
  height: '40vh',
  background: '#e9ebee',
  overflowY: 'scroll'
}

const ListContainerStyle = {
  padding: '0',
  margin: '0'
}

export default ListContainer;

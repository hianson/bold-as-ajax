import React from 'react';
import ListItem from './ListItem';
import NoPhoto from '../img/no-photo-s.png'

export class ListContainer extends React.Component {

  // img, name, breed[s], sex, size


  renderListItems() {
    const listItems = this.props.animals.map((animal) => {
      var img = NoPhoto
      if (animal.media.photos) {
        img = animal.media.photos.photo[2].$t
      }
      // console.log(animal.media.photos)

      // if (animal.media)
      // let img = animal.media.photos.photo[2]
      return(
        <ListItem
          key={animal.id.$t}
          name={animal.name.$t}
          animal={animal.animal.$t}
          sex={animal.sex.$t}
          age={animal.age.$t}
          img={img}
          size={animal.size.$t} />
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

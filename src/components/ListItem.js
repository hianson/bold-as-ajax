import React from 'react';

export class ListItem extends React.Component {
  render() {
    return (
      <li onClick={() => this.props.handleDisplayData(this.props.animal)} style={listItem}>
        <div style={listItemContainerStyle}>
          <div style={imgContainer}>
            <img style={imgStyle} src={this.props.img} alt={'pup'} />
          </div>
          <div style={detailsContainer}>
            {this.props.animal.name.$t}
          </div>
        </div>
      </li>
    )
  }
}

const listItem = {
  border: '1px solid #dddfe2',
  borderRadius: '3px',
  background: 'white',
  listStyleType: 'none',
  height: '50px',
}

const listItemContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  overflow: 'hidden'
}

const imgContainer = {
  display: 'flex',
  alignitems: 'center',
  justifyContent: 'center',
  height: '50px',
  width: '75px',
}

const detailsContainer = {
  width: '100%',
  textAlign: 'center',
  fontSize: '24px'
}

const imgStyle = {
  width: 'inherit',
  height: 'inherit'
  // maxWidth: '100%',
  // maxHeight: '100%'
}


export default ListItem;

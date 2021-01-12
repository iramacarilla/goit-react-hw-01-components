import React from 'react';
import PropTypes from 'prop-types';
import List from "./FriendListStyled";


function FriendListItem ({name, avatar, isOnline}) {
    return (
  <List className="item">
  <span isOnline={isOnline}>
  </span>
  <img className='avatar' src= {avatar} alt= {name} width="48" />
  <p className="name">{name}</p>
</List>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
export default FriendListItem;
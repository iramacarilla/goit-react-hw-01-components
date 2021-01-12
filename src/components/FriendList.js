import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";

function FriendList ({friends}) {
   return (
    <ul class="friend-list">
     {friends.map((friend) => (
      <FriendListItem {...friend} key={friend.id}/>
  ))}
</ul>)
    
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
  };

 export default FriendList; 
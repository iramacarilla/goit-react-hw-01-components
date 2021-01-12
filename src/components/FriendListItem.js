import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Online = styled.span`
display: inline-block;
height: 15px;
width: 15px;
border-radius: 50%;
background-color: ${props => (props.isOnline ? 'green': 'red')};
margin-right: 20px;
`
const List = styled.li`
display: flex;
width: 300px;
height: 80px;
padding: 0 20px;
margin-bottom: 20px;
background-color: beige;
box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
align-items: center;
justify-content: flex-start;
}
`
const Picture = styled.img`
border-radius: 50%;
margin-right: 20px;
`

function FriendListItem ({name, avatar, isOnline}) {
    return (
  <List className="item">
  <Online isOnline={isOnline}>
  </Online>
  <Picture className='avatar' src= {avatar} alt= {name} width="48" />
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
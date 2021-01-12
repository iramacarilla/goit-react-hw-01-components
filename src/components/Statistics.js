import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

function generateColor()  {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

const Section = styled.section`
border: grey solid 1px;
width: fit-content;
height: fit-content;
display: block;
margin: 0 auto;
`
const Title = styled.h2`
text-align: center;
margin: 0;
`

const ListItem = styled.li`
background-color: ${generateColor()};
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 20px;

` 
const List = styled.ul`
list-style: none;
display: flex;
margin: 0;
`

function Statistics ({title, stats}) {
return (
  <Section>
  {title && (
    <Title>{title}</Title>)
   }
  <List className="stat-list">
    {stats.map(stat => (
    <ListItem key={stat.id} style= {{backgroundColor: generateColor()}}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </ListItem>))}
  </List>
</Section>
    )
}

Statistics.defaultProps = {
    title: ' ',
};



Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}
export default Statistics;
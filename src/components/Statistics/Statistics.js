import React from 'react';
import PropTypes from 'prop-types';
import Section from "./StaticticsStyled";

function generateColor()  {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}



function Statistics ({title, stats}) {
return (
  <Section>
  {title && (
    <h2>{title}</h2>)
   }
  <ul className="stat-list">
    {stats.map(stat => (
    <li key={stat.id} style= {{backgroundColor: generateColor()}}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>))}
  </ul>
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
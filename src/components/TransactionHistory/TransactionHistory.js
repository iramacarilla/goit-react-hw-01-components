import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import  Table  from './TransactionHistoryStyled'


function TransactionHistory ({items}) {
    return (
        <Table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
{items.map(item => (
<TransactionHistoryItem {...item} key={item.id} />
))}
  </Table>
  )  
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

export default TransactionHistory;
import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionItem = ({ id, type, amount, currency }) =>{
    return (
        <tr key={id}>
          <td className={css.row}>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      );
}

TransactionItem.prototype = {
    key: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };
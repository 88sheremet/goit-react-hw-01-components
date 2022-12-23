import PropTypes from 'prop-types';
// import css from '../TransactionHistory/TransactionHistory.module.css';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return <TransactionItem key={id} type={type} amount={amount} currency={currency} />
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.prototype = {
  key: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

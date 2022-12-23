import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendItem = ({ avatar, name, isOnline, id }) =>{
return ( <li className={css.friends__item} key={id}>
    <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className="">{name}</p>
  </li>)
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  };
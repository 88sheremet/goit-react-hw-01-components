import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';
import { FriendItem } from '../FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendItem
              key={name}
              avatar={avatar}
              isOnline={isOnline}
              id={id}
              name={name}
            />
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

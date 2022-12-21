import PropTypes from "prop-types"

export const FriendList = ({ friends }) => {
  
return (
    <div className="">
      <ul className="">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className="" key={id}>
            <span className="">
              {isOnline}
            </span>
            <img className="" src={avatar} alt={name} />
            <p className="">{name}</p>
          </li>
        ))}
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
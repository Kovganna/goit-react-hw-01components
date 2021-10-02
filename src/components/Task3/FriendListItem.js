import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline = 'true' }) => {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'true' : 'false'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propType = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.string,
};

export default FriendListItem;

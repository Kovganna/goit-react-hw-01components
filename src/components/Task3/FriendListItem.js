import PropsTypes from 'prop-types';

const FriendListItem = ({ id, avatar, name, isOnline = 'true' }) => {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'true' : 'false'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propsType = {
  avatar: PropsTypes.string,
  name: PropsTypes.string,
  isOnline: PropsTypes.string,
  id: PropsTypes.number,
};

export default FriendListItem;

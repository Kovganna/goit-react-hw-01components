import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

const FriendListItem = ({ avatar, name, isOnline = 'true' }) => {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propType = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.string,
};

export default FriendListItem;

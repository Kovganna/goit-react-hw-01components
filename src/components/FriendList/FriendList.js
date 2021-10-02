import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

const Friendlist = ({ friends = [] }) => {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default Friendlist;

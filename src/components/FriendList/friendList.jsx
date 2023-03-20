import css from 'components/FriendList/FriendList.module.css';
import FriendListItem from 'components/FriendListItem/friendListItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          isOnline={el.isOnline}
          avatar={el.avatar}
          name={el.name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

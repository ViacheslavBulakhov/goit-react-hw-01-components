import PropTypes from 'prop-types';

import css from 'components/Profile/Profile.module.css';
import validator from 'utils/validNumber';

export default function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{validator(followers)}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{validator(views)}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{validator(likes)}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

import PropTypes from 'prop-types';

import css from './Profile.module.css'
import validator from '../utils/validNumber'    

export default function Profile({ username, tag, location, avatar, followers, views, likes }){
return (    
            <div className={css.profile}>
            <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
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
        )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};
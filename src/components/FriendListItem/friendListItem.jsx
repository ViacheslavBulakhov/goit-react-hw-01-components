import css from './friendListItem.module.css';
import PropTypes from 'prop-types';


export default function FriendListItem ({avatar, name , isOnline}){
    return (
            <li className={css.item}>
                <span className={isOnline ? css.isOnline : css.isOfline}></span>
                <img className={css.avatar} src={avatar} 
                alt="User avatar" width="48" />
                <p className="name">{name}</p>
            </li>
            )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string, 
    name: PropTypes.string , 
    isOnline : PropTypes.bool,
}
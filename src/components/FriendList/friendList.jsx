import css from './friendList.module.css'
import friends from '../path/friends.json';
import FriendListItem from '../FriendListItem/friendListItem'
import PropTypes from 'prop-types';


export default function FriendList({friends}){
return (    
<ul className={css.friend_list}>
{
    friends.map(el => 
       <FriendListItem
       key ={el.id} 
      isOnline = {el.isOnline}
      avatar = {el.avatar} 
      name = {el.name}/>
        )
  }
</ul>
        )
}

FriendList.propTypes = {
  friends : PropTypes.array,
}
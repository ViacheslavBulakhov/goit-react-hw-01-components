import Profile from './Profile/profile';
import Statistics from './Statistics/statistics';
import FriendList from './FriendList/friendList';
import TransactionHistory from './TransactionHistory/transactionHistory'

import user from './path/user.json';
import data from './path/data.json';
import friends from './path/friends.json';
import transactions from './path/transactions.json';



export const App = () => {
  return (<>

    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />
  <Statistics title="Upload stats" stats={data} />
  <Statistics stats={data} />

  <FriendList friends={friends} />

  <TransactionHistory items={transactions} />;
  </>)
};




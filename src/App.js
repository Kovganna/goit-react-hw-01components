import './App.css';
import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile';
import statisticalData from './components/Statistics/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './components/FriendList/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './components/Transactions/transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory';

const App = () => {
  return (
    <div className="App">
      <Profile
        userName={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

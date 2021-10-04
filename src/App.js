import './App.css';
import user from './json/user.json';
import Profile from './components/Profile/Profile';
import statisticalData from './json/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './json/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './json/transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory';

const App = () => {
  return (
    <div className="App">
      <Profile
        userName={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

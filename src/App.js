import './App.css';
import user from './components/Task1/user.json';
import Profile from './components/Task1/Profile';
import statisticalData from './components/Task2/statistical-data.json';
import Statistics from './components/Task2/StatisticItem';
import friends from './components/Task3/friends.json';
import FriendList from './components/Task3/FriendList';
import transactions from './components/Task4/transactions.json';
import TransactionHistory from './components/Task4/TransactionHistory';

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
      ,
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />,
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;

import Header from './Header';
import './App.css';
import ImageCard, { Image } from './ImageCard';
import Gallery from './Gallery';
import { useEffect, useState } from 'react';
import images from './images.json';

function App() {
  const [users, setUsers] = useState<{ name: string }[] | null>(null);

  useEffect(() => {
    loadData().then((users) => {
      setUsers(users);
    });
  }, []);

  if (users === null) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <span>{users[0].name}</span>
    </div>
  );
}

async function loadData() {
  console.log('loading data');
  // fetch users
  await new Promise((res) => setTimeout(res, 1000));

  return [
    {
      name: 'Jim',
    },
    {
      name: 'Bob',
    },
  ];
}

export default App;

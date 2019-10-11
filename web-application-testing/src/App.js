import React, { useState, useEffect } from 'react';
import './App.css';

import Dashboard from './Components/Dashboard';
import Display from './Components/Display';

import { useCount } from './Hooks/Counts';

function App() {
const [strikes, setStrikes] = useState(0);
const [balls, setBalls] = useState(0)

const updateCounts = (type) => {
  switch(type) {
    case 'strike': 
      setStrikes(strikes + 1)
      break;
    case 'ball': 
      setBalls(balls + 1);
      break;
    case 'hit': 
      setStrikes(0);
      setBalls(0);
      break;
    case 'foul':
      strikes > 2 && setStrikes(strikes + 1);
      break;
  }
}

useEffect(() => {
 if(balls === 4 || strikes === 3) {
   setBalls(0);
   setStrikes(0);
 }
}, [balls, strikes])
  return (
    <div className="App">
      <Dashboard updateCounts={updateCounts} />
      <Display strikes={strikes} balls={balls} />
    </div>
  );
}

export default App;

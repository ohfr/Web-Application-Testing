import React, { useState } from 'react';
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
  }
}
  return (
    <div className="App">
      <Dashboard updateCounts={updateCounts}/>
      <Display strikes={strikes} balls={balls} />
    </div>
  );
}

export default App;

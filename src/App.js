import React from 'react';
import './App.css';
import List from './list';
import { listenerCount } from 'events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <List threshold={61} ></List>
      </header>
    </div>
  );
}

export default App;

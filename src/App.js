import React from 'react';
import './App.css';
import List from './list';
import { listenerCount } from 'events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ol>
          <List></List>
        </ol>
      </header>
    </div>
  );
}

export default App;

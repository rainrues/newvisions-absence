import React from 'react';
import './App.css';
import List from './list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <List threshold={61} dataType={"studentId"} ></List>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Feed from './components/Feed';
import './App.css';


function App() {
  return (
    <div className="app">
        <Sidebar />
        <Feed />
        <Widgets />

    </div>
  );
}

export default App;

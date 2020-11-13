import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Feed from './components/Feed';
import './App.css';


function App() {
  return (
    <div className="app">
    <Router>
          <Sidebar />
          <Feed />
          <Widgets />
    </Router>
          
    </div>
  );
}

export default App;

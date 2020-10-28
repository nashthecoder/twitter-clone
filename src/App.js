import React from 'react';
import { BrowseRouter, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Login from './components/Login';
import Feed from './components/Feed';
import './App.css';


function App() {
  return (
    <div className="app">
        <Sidebar />
        <Feed />
        <Widgets />
        <Login />

    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Feed from './components/Feed';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app"> 
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Sidebar />
            <Feed />
            <Widgets />
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;

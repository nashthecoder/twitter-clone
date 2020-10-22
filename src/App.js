import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SidebarOption from './components/SidebarOption';
import Widgets from './components/Widgets';
import Feed from './components/Feed';


function App() {
  return (
    <div className="App">
      <h1>Twitter Clone <span>🚀🔥</span></h1>
        
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed /> 

        {/* Widgets */}
        <Widgets />

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Profile from './components/Profile'
import Repositories from './components/Repositories'
function App() {
  return (
    <>
      <div className="header">

      </div>
      <div className="App container mt-3">

        <div className="row">
          <div className="col-md-3">
            <Profile />
          </div>
          <div className="mt-3 col-md-9">
            <Repositories />
          </div>
        </div>

      </div>
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from Rohan Sunki</h1>
        <h1>We now have Auth!</h1>
      </header>
    </div>
  );
}

export default App;

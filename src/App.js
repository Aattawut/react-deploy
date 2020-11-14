import React from 'react';
import profileImage from './img/3587.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi, My React App</h1>
      <h2>Author: Aattawut Nutlamyong</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;

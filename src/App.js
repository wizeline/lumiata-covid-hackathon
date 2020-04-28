import React from 'react';
import './App.css';
import firebase from './firebase';

function App() {
  const app = firebase.app();
  console.log('Firebase App Name: ' + app.name);
  return (
    <div className="App">
    </div>
  );
}

export default App;

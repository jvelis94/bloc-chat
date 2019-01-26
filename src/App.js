import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6mRakDzOBLRGt0tFCjf4i6uwb2j1xWKg",
    authDomain: "bloc-chat94.firebaseapp.com",
    databaseURL: "https://bloc-chat94.firebaseio.com",
    projectId: "bloc-chat94",
    storageBucket: "bloc-chat94.appspot.com",
    messagingSenderId: "33874571017"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <RoomList firebase={firebase}/>
    );
  }
}

export default App;

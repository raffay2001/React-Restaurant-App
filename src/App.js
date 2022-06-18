import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter, Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      // Enclosing the whole App in the BrowserRouter Component in order to make use of React Router
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;

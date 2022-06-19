import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter, Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


class App extends Component {
  render() {
    return (
      // Enclosing the whole App in the BrowserRouter Component in order to make use of React Router
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;

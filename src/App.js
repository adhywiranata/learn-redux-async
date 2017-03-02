import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';

import Header from './components/Header';
import AppRoutes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <AppRoutes />
        </div>
      </Provider>
    );
  }
}

export default App;

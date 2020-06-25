import React, {Component} from 'react';
import './App.css';
import {createStore} from 'redux';
import reducer from './reducer';
import Header from './components/Header';
import Content from './components/Content';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Content />
        </div>
      </Provider>
    );
  }
}

export default App;

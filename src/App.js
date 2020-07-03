import React, {Component} from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import reducer from './reducer';
import Header from './components/Header';
import Content from './components/Content';
import Login from './components/Login';

class App extends Component {
  render() {
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Content} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

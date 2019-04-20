import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyAWxZFWPRRwV_mhy1PXqED-4xfc2m17pFk',
      authDomain: 'ff-manager-714dc.firebaseapp.com',
      databaseURL: 'https://ff-manager-714dc.firebaseio.com',
      projectId: 'ff-manager-714dc',
      storageBucket: 'ff-manager-714dc.appspot.com',
      messagingSenderId: '582979347667'
    };
      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

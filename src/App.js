import React, { Component } from 'react';
//import { Container, Content, Button, Card, CardItem, } from 'native-base';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers/';
import LoginForm from './components/LoginForm';

class App extends Component {

componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCqX2OSTFWpY6rQZDgDCl617IqLv0VJfD8',
    authDomain: 'cfsdemo-bd9e8.firebaseapp.com',
    databaseURL: 'https://cfsdemo-bd9e8.firebaseio.com',
    storageBucket: 'cfsdemo-bd9e8.appspot.com',
    messagingSenderId: '153722002074'
  };
  firebase.initializeApp(config);
}

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;

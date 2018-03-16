import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './src/store/configureStore';

/** creamos la funcion para el Store */
const store = configureStore()

const RNredux = () => (
  <Provider store={ store } >
    <App />
  </Provider>
)

AppRegistry.registerComponent('rncourse', () => RNredux);

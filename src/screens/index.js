/**
 * Entry Point basado en la documentacion oficiall de react-native-navigation
 * URL: https://wix.github.io/react-native-navigation/#/usage
 *
 * para usarlo hay qeu modificar el archivo app.js
 */

import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

/** Pantallas */
import AuthScreen from './Auth/Auth'
import SharePlaceScreen from './SharePlace/SharePlace'
import FindPlaceScreen from './FindPlace/FindPlace'

/** Store */
import configureStore from '../store/configureStore';

/** creamos la funcion para el Store */
const store = configureStore()

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent(
    "awesome-places.AuthScreen",
    () => AuthScreen,
    store,
    Provider
  )
  Navigation.registerComponent(
    "awesome-places.SharePlaceScreen",
    () => SharePlaceScreen,
    store,
    Provider
  )
  Navigation.registerComponent(
    "awesome-places.FindPlaceScreen",
    () => FindPlaceScreen,
    store,
    Provider
  )
}

/*   */
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'

import configureStore from './src/store/configureStore';

/** creamos la funcion para el Store */
const store = configureStore()

// Registramos las Pantallas
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

Navigation.registerComponent(
    "awesome-places.PlaceDetailScreen",
    () => PlaceDetailScreen,
    store,
    Provider
)

// Iniciar la App
Navigation.startSingleScreenApp({
    screen: {
        screen: 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
        title: 'Awesome Places' // title of the screen as appears in the nav bar (optional)
    },
})
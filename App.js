import { Navigation } from 'react-native-navigation'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'

// Registramos las Pantallas
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen)
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen)
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen)

// Iniciar la App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
    title : 'Login' // title of the screen as appears in the nav bar (optional)
  },
})


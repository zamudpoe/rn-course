import { Navigation } from 'react-native-navigation'
import AuthScreen from './src/screens/Auth/Auth'

// Pantallas Registradas
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen)

// Iniciar la App
Navigation.startSingleScreenApp({
    screen: {
        screen          : 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
        title           : 'Login' // title of the screen as appears in the nav bar (optional)
    },
})

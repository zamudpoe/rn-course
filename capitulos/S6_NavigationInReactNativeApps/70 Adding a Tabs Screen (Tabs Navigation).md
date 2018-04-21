# Seccion 6 - Navigation in React Native Apps

## **Clase 70:** Adding a Tabs Screen (Tabs Navigation)
---

En el capitulo anterior aprendimos como crear las pantallas y como registrarlas para despues usarlas!. ahora vamos a aprender a crear navegacion a traves de Pestañas "Tabs"

**NOTA:** Visitar la documentacion oficial para repasar lo aprendido, reforzar lo aprendido y como material de apoyo a lo que iremos aprendiendo [React Native Navigation-Top Level API]

Bien ahora aprenderemos como crear e implementar la navegacion en nuestra aplicacion.

---
## Pantalla de autenticacion "Auth.js"

```js
import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

/** importamos el componente funcional startMainTabs  */
import startMainTabs from '../MainTabs/startMainTabs'

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTabs()
  }

  render () {
    return (
      <View>
        <Text>Ventana de Acceso</Text>
        <Button
          title   = "Login ..."
          onPress = { this.loginHandler }
        />
      </View>
    )
  }

}

export default AuthScreen;

```

---
## navigation.**startTabBasedApp**

Con el  uso del helper  ``startTabBasedApp`` de la libreria ``Navigation`` hacemos que nuestra apicacion nageve por medio de tabs.


```js
import { Navigation } from 'react-native-navigation'

import Icon from '../../../node_modules/react-native-vector-icons/Ionicons'

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", size = 30) ,
    Icon.getImageSource("md-share", size = 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label : "Find Place",
          title : "Find Place",
          icon  : sources[0]
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label : "Share Place",
          title : "Share Place",
          icon  : sources[1]
        }
      ]
    })
  })

}

export default startTabs

```
una ves que tenemos registrada todas las pantallas en nuestra App, lo que procedemos es decirle como sera dicho inicio o carga inicial de la aplicacion,

En nuestro archivo ``App.js`` le diremos cual es la primera pagina con la que iniciaremos , la cual sera la pantalla de autenticacion , tambien realizamos el registro de las pantallas a usar en nuestra App.

**``App.js``**
```js
/*   */
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'

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

// Iniciar la App
Navigation.startSingleScreenApp({
    screen: {
      screen: 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
      title : 'Awesome Places' // title of the screen as appears in the nav bar (optional)
    },
})
```
Ya en el capitulo anterior, ya creamos cada una de las pantallas ``screens``

---
## Documentacion Oficial

* [React Native Navigation-Top Level API]


---
**ERRORES & SOLUCIONES:**

> **FAILURE:** Build failed with an exception.

> What went wrong: ```Could not determine java version from '9.0.1'.```

**SOLUCION:**

  ```unix
  export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
  printenv JAVA_HOME
  ```


[Usando el componente ScrollView]:(https://facebook.github.io/react-native/docs/using-a-scrollview.html)
[Documentacion Oficial del Componente ScrollView]:(https://facebook.github.io/react-native/docs/scrollview.html)
[Using List Views]:(https://facebook.github.io/react-native/docs/using-a-listview.html)
[Documentacion oficial del Componente FlatList]:(https://facebook.github.io/react-native/docs/flatlist.html)
[Documentacion oficial del Componente SectionList]:(https://facebook.github.io/react-native/docs/sectionlist.html)
[Recursos Estaticos : Imagenes]:(https://facebook.github.io/react-native/docs/images.html)
[Documentacion oficial del Componente Image]:(https://facebook.github.io/react-native/docs/image.html)
[Componente Modal]:(https://facebook.github.io/react-native/docs/modal.html)
[Redux]:(https://redux.js.org/)
[React Redux]:(https://redux.js.org/faq/react-redux)
[Redux DevTools Integration]:(https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md)
[React Native Debugger]:(https://github.com/jhen0409/react-native-debugger)
[More about Debugging]: (https://facebook.github.io/react-native/docs/debugging.html)
[Navigating Between Screens]:(http://facebook.github.io/react-native/docs/navigation.html)
[React Native Navigation]:(https://github.com/wix/react-native-navigation)
[iOS Installation]:(https://wix.github.io/react-native-navigation/#/installation-ios)
[React Native Navigation-Top Level API]:(https://wix.github.io/react-native-navigation/#/top-level-api)

# Seccion 6 - Navigation in React Native Apps

## **Clase 69:** Registering and Rendering a Screen
---
Vamos a utilizar la libreria **React Native Navigation** por que es una estupenda libreria.

---
## Entry Point para iOS y Android

Craemos estos archivos ``index.ios.js`` & ``index.android.js`` en raiz del proyecto y les escribimos esto

```js
import App from './App'
```

y nuestro entry point principal ``index.js`` :

```js
import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './src/store/configureStore';

/** creamos la funcion para el Store */
const store = configureStore()

/** Helper Component */
const RNredux = () => (
  <Provider store={ store } >
    <App />
  </Provider>
)

AppRegistry.registerComponent('rncourse', () => RNredux);

```
---
**App.js**
Aqui realizaremos el registro de las pantallas que usaremos en nuestra aplicacion.

El archivo ``app.js`` debe tener lo siguiente :

```js
/*   */
import { Navigation } from 'react-native-navigation'

import AuthScreen from './src/screens/Auth/Auth'

// Registramos las Pantallas con el ID : awesome-places. y la pantall a ejecutar
Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => AuthScreen
)

// Iniciar la App
Navigation.startSingleScreenApp({
    screen: {
      screen: 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
      title : 'Awesome Places' // title of the screen as appears in the nav bar (optional)
    },
})
```
Consultar la documentacion para ver como se configura y usan las pantallas registrads
[React Native Navigation-Top Level API]

---
## Estructura de archivos
Creamos la estructura  ``screens`` con la siguente estructura , para nuestras pantallas.
  ```js
  .
  └── src
      ├── assets
      ├── componentes
      ├── screens
      │   ├── Auth
      │   ├── FindPlace
      │   ├── MainTabs
      │   └── SharePlace
      └── store
          ├── actions
          └── reducers
  ```

---
## Pantallas
Creamos las pantallas


### Pantalla Auth

```js
import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

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

### Pantalla FindPlace

```js
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import PlaceList from '../../componentes/PlaceList'

class FindPlaceScreen extends Component {
  render() {
    return (
      <View>
        <PlaceList places={ this.props.places } />
      </View>
    )
  }
}

const MapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect (MapStateToProps) (FindPlaceScreen)

```

### Pantalla MainTabs

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


### Pantalla SharePlace


```js
import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'

import PlaceInput from '../../componentes/PlaceInput'
import { addPlace, deletePlace } from '../../store/actions/index' /** Action Creators */

class SharePlaceScreen extends Component {
  placeAddHandler = placeName => {
    this.props.onAdddPlace(placeName)
  }

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded = { this.placeAddHandler } />
      </View>
    )
  }
}

const MapDispatchToProps = dispatch => {
  return {
    onAdddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}

export default connect(null, MapDispatchToProps)(SharePlaceScreen)


```

Bien hasta este punto ya creamos las pantallas con su estructura y los entry points para iOS , Android y reescribimos App.js donde realizamos el registro de nuestas pantallas y les pasamos el store y provider.


---
## **package.json**

```js
{
    "name": "rn-course",
    "version": "0.1.0",
    "private": false,
    "devDependencies": {
        "babel-preset-react-native-stage-0": "^1.0.1",
        "jest-react-native": "^18.0.0",
        "react-test-renderer": "16.2.0"
    },
    "scripts": {
        "start": "react-native start",
        "android": "react-native run-android",
        "ios": "react-native run-ios",
        "test": "node node_modules/jest/bin/jest.js"
    },
    "jest": {
        "preset": "react-native"
    },
    "dependencies": {
        "npm": "^5.8.0",
        "react": "16.2.0",
        "react-devtools": "^3.2.1",
        "react-native": "0.52.0",
        "react-native-navigation": "^1.1.441",
        "react-native-vector-icons": "^4.6.0",
        "react-redux": "^5.0.7",
        "redux": "^3.7.2",
        "to": "^0.2.9",
        "update": "^0.7.4"
    }
}

```


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

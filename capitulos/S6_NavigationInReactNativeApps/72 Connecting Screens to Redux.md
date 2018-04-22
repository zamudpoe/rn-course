# Seccion 6 - Navigation in React Native Apps

## **Clase 72:** Connecting Screens to Redux
---
Si queremos agregar ``redux`` tendremos que ir a donde esta la carga o registro de todos los componentes o pantallas!. Donde es esto?, pues donde realizamos el registro de las pantallas con ``Navigation`` ahi mismo pasaremos el ``store`` y  ``Provider``, nos iremos a trabajar con el archivo ``App.js``


1. Importamos ``Provider`` en ``App.js``
    ```js
    import { Provider } from 'react-redux'
    ```
1. Necesitamos tener acceso a nuestra ``store`` , asi que nos **copiamos** de entry point ``index.js`` las siguientes lineas :

    ```js
    import configureStore from './src/store/configureStore';

    /** creamos la funcion para el Store */
    const store = configureStore()

    ```

    Nuestro archivo quedara asi :

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

    /* Registramos las Pantallas */
    Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen)
    Navigation.registerComponent("awesome-places.SharePlaceScreen", ( => SharePlaceScreen)
    Navigation.registerComponent( "awesome-places.FindPlaceScreen", () => FindPlaceScreen)

    /* Iniciar la App */
    Navigation.startSingleScreenApp({
        screen: {
          screen: 'awesome-places.AuthScreen', /* unique ID registered with Navigation.registerScreen */
          title : 'Awesome Places' /* title of the screen as appears in the nav bar (optional) */
        },
    })
    ```


1. Una vez que tenemos configurada la store podemos proceder a agregar provider y store a las pantallas.

    Ejemplo:

    ```js
    /* Registramos las Pantallas */
    Navigation.registerComponent(
      "awesome-places.AuthScreen",
      () => AuthScreen,
      store,
      Provider
    )
    ```
    Nuestro Archivo final quedara como sigue:

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

    /* Registramos las Pantallas */
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

    /* Iniciar la App */
    Navigation.startSingleScreenApp({
        screen: {
          screen: 'awesome-places.AuthScreen', /* unique ID registered with Navigation.registerScreen */
          title : 'Awesome Places' /* title of the screen as appears in the nav bar (optional) */
        },
    })

    ```
---
## AGREGANDO REDUX

Bien ya configuramos el store y el provider para cada pantalla de nuestra aplicacion , ahora ya podemos proceder a conectar el middleware ```connect``` de ``react-redux`` , y pasarle  funcones a nuestras pantallas por medio de ```MapDispatchToProps``` , a cada pantalla.

Bien la receta es la siguiente , en el archivo ``SharePlace.js``

1. Importamos ``connect``
    ```js
    import React, { Component } from 'react'
    import { View, Text } from 'react-native'

    import { connect } from 'react-redux'
    ...
    ```
1. Importamos el componente ``PlaceInput`` y las acciones ``addPlace, deletePlace`` que le pasaremos a ``Dispatch``

    ```js
    import PlaceInput from '../../componentes/PlaceInput'
    import { addPlace, deletePlace } from '../../store/actions/index' /** Action Creators */
    ```

1. Creamos la funcion ``MapDispatchToProps`` y le pasamos la accion ``addPlace``
    ```js
    const MapDispatchToProps = dispatch => {
      return {
        onAdddPlace: (placeName) => dispatch(addPlace(placeName))
      }
    }
    ```

1. Creamos el handler ``placeAddHandler`` que le pasaremos al componente ``<PlaceInput />``

    ```js
    placeAddHandler = placeName => {
        this.props.onAdddPlace(placeName)
      }
    ```

1. Le pasamos el handler ``placeAddHandler`` a la prop ``onPlaceAdded`` del componente .

    ```js
    <View>
      <PlaceInput onPlaceAdded = { this.placeAddHandler } />
    </View>
    ```

1. Finalmente exportamos nuestro componente
    ```js
    export default connect(null, MapDispatchToProps)(SharePlaceScreen)
    ```

1. Listo nuestro archivo final ``SharePlaceScreen`` es el siguiente:
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

Y asi le hacemos con la pantalla: ``FindPlace.js``

## FindPlace.js

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
[React Native Navigation-StartTabBasedAppParams]:(https://wix.github.io/react-native-navigation/#/top-level-api?id=starttabbasedappparams)
[React Native Vector Icons]:(https://github.com/oblador/react-native-vector-icons)
[Ionicons]:(https://ionicframework.com/docs/ionicons/)

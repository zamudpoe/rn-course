# Seccion 6 - Navigation in React Native Apps

## **Clase 73:** Actualizando Redux
---

Bueno en nuestro capitulo anterior nos aseguraos que podamos una vez mas agregar lugares y usarlos. pero que pasa si deseamos darle click a un lugar?, **obtendremos un error** por que no estamos manejando esto en los items seleccionados. asi que vamos a configurar este evento pero lo haremos de una nueva manera, asi que vamos a modificar nuestro archivo ```PlaceDetail.js``` y vamos a eliminar el uso del modal por que aprenderemos algo nuevo aqui... veamos!

```js
  import React from 'react'
  import {
      Modal,  <----- 1. Eliminamos esta linea
      View,
      Image,
      Text,
      Button,
      StyleSheet,
      TouchableOpacity
  } from 'react-native'

  import Icon from '../../node_modules/react-native-vector-icons/dist/Ionicons'

  const PlaceDetail = props => {
     5 Eliminamos modalContent la variable y la sentencia IF
      let modalContent = null

      if (props.selectedPlace) {
          modalContent = (
    >>> 4       <View style = { { backgroundColor: 'whitesmoke' } } >
            <Image
              source = { props.selectedPlace.image }
              style = { styles.placeImage }
            />
            <Text style = { styles.placeName } > { props.selectedPlace.name } </Text>
          </View>
    >>> 4      )
      }

      return (
        <Modal   <----- 2. Eliminamos el modal
          onRequestClose = { props.onModalClosed }
          visible = { props.selectedPlace !== null }
          animationType = "fade"
        >
          <View >
            { modalContent } <---- 3 Remplazamos esto por la view del punto marcado como 4
            <View>
              <TouchableOpacity onPress= { props.onItemDeleted } >
                <View style = { styles.deleteButton } >
                  <Icon
                    name = 'ios-trash'
                    color = 'tomato'
                    size = { 30 }
                  />
                  <Text style={{ left: 5 ,fontSize: 24, color: 'tomato' }} >Eliminar</Text>
                </View>
              </TouchableOpacity>
              <Button
                title = "Cerrar"
                onPress = { props.onModalClosed }
              />
            </View>
          </View>
        </Modal>
      )
  }

  const styles = StyleSheet.create({
      modalContainer: {
        margin: 22
      },
      placeImage: {
        width: "100%",
        height: 200
      },
      placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
      },
      deleteButton: {
        flexDirection : 'row',
        justifyContent: "center",
        alignItems    : "center",
      }
  });

  export default PlaceDetail

```

nos quedara asi :

```js
 import React from 'react'
  import {
      View,
      Image,
      Text,
      Button,
      StyleSheet,
      TouchableOpacity
  } from 'react-native'

  import Icon from '../../node_modules/react-native-vector-icons/dist/Ionicons'

  const PlaceDetail = props => {
      return (
          <View >
            <View style = { { backgroundColor: 'whitesmoke' } } >
              <Image
                source = { props.selectedPlace.image }
                style = { styles.placeImage }
              />
              <Text style = { styles.placeName } > { props.selectedPlace.name } </Text>
            </View>
            <View>
              <TouchableOpacity onPress= { props.onItemDeleted } >
                <View style = { styles.deleteButton } >
                  <Icon
                    name = 'ios-trash'
                    color = 'tomato'
                    size = { 30 }
                  />
                  <Text style={{ left: 5 ,fontSize: 24, color: 'tomato' }} >Eliminar</Text>
                </View>
              </TouchableOpacity>
              <Button
                title = "Cerrar"
                onPress = { props.onModalClosed }
              />
            </View>
          </View>
      )
  }

  const styles = StyleSheet.create({
      modalContainer: {
        margin: 22
      },
      placeImage: {
        width: "100%",
        height: 200
      },
      placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
      },
      deleteButton: {
        flexDirection : 'row',
        justifyContent: "center",
        alignItems    : "center",
      }
  });

  export default PlaceDetail
```
Deseamos usarlo como una pantalla asi que lo moveremos a la seccion de screens nuestra estructura se mirara asi :


```js
.
├── App.js
├── README.md
├── app.json
├── index.android.js
├── index.ios.js
├── index.js
├── package.json
└── src
    ├── assets
    │   ├── beautiful-place.jpg
    │   └── descarga.jpeg
    ├── componentes
    │   ├── ListItem.js
    │   ├── PlaceInput.js
    │   └── PlaceList.js
    ├── screens
    │   ├── Auth
    │   │   └── Auth.js
    │   ├── FindPlace
    │   │   └── FindPlace.js
    │   ├── MainTabs
    │   │   └── startMainTabs.js
    │   ├── PlaceDetail
    │   │   └── PlaceDetail.js
    │   ├── SharePlace
    │   │   └── SharePlace.js
    │   └── index.js
    └── store
        ├── actions
        │   ├── actionTypes.js
        │   ├── index.js
        │   └── places.js
        ├── configureStore.js
        └── reducers
            └── places.js
```

Coo podemos apreciar nuestro componente es un componente funcinoal y no una clase, mas adelante la convertiremos a clase pero ahora por el bien del curso lo dejaremos asi como esta.


1. Renombramos el nombre del estilo modalContainer a Container solamente
1. Elminamos la referencia al boton por que no es necesario ya que ahora es una pantalla regular.

una vez hecho esto veamos si podemos cargar esta nueva pantalla, y para esto tenemos que realizar los pasos para agregar pantallas a la aplicacion.

1. Nos vamos al archivo ``app.js``
1. Registramos la pantalla ```PlaceDetail``` como registramos las otras pantallas.

```js
/*   */
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail'  <---- 1

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

Navigation.registerComponent(    <-----
  "awesome-places.PlaceDetail",
  () => PlaceDetail,
  /** No pasaremos store y provider ya que ahora no  necesitamos redux aqui */
)

// Iniciar la App
Navigation.startSingleScreenApp({
    screen: {
      screen: 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
      title : 'Awesome Places' // title of the screen as appears in the nav bar (optional)
    },
})

```

---
## PUSH

Ahora aprenderemos como lanzar una pantalla desde otra pantalla, es hora de matar chinches de otra forma, pero antes estudiemos la documentacion y estudiamos el metodo ```push```

  Documentacion oficial : **[Screens API]**



```js
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import PlaceList from '../../componentes/PlaceList'

class FindPlaceScreen extends Component {

  onItemSelectedHandler = key => {
    const selPlace =  this.props.places.find(place=> {
                        return place.key === key
                      })

    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetailScreen',
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      },
    })
  }

  render() {
    return (
      <View>
        <PlaceList
          places         = { this.props.places }
          onItemSelected = { this.onItemSelectedHandler }
       />
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
[Screens API]:(https://wix.github.io/react-native-navigation/#/screen-api)

# Seccion 6 - Navigation in React Native Apps

## **Clase 73:** Actualizando Redux
---

Solo vamos a usar las acciones ``ADD_PLACE`` Y ``DELETE_PLACE`` las otras acciones las eliminamos ``SELECT_PLACE`` y ``DESELECT_PLACE`` del archivo ``actionTypes.js``

Nuestro archivo ``actionTypes.js`` quedara asi:
```js
export const ADD_PLACE    = 'ADD_PLACE'
export const DELETE_PLACE = 'DELETE_PLACE'
```

Ahora haremos lo mismo para los archivos ``./actions/places.js`` e ``./actions/index.js``

---
## actions/Places.js
```js
import {
  ADD_PLACE,
  DELETE_PLACE
} from './actionTypes'

export const addPlace = ( placeName ) => {
  return {
    type     : ADD_PLACE,
    placeName: placeName
  }
}

export const deletePlace = () => {
  return {
    type     : DELETE_PLACE,
  }
}
```
## actions/index.js

```js
export { addPlace, deletePlace } from './places'
```

---
## ./reducers/places.js
Ahora actualicemos nuestro reductor para que solo tengamos configuradas las acciones:
* ``ADD_PLACE``
* ``DELETE_PLACE``

Nuestro archivo ``places.js`` debe quedar asi:
```js
import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

/*  State inicial   */
const initialState = {
    places: []
}

/** si no recibimos el State usaremos el inicial */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
          ...state,
          places: state.places.concat({
              key: Math.random(),
              name: action.placeName,
              image: {
                  uri: 'https://media-cdn.tripadvisor.com/media/photo-s/09/58/8c/3f/playa-lancheros.jpg'
              }
          })
      }

    case DELETE_PLACE:
      return {
          ...state,
          places: state.places.filter(place => {
              return place.key !== state.selectedPlace.key;
          })
      }

    default:
      return state
  }
}

/** esportamos nuestro reductor raiz  */
export default reducer
```
---
## SharePlace
Configuramos nuestro componente para que haga uso de Redux.

**``SharePlace.js``**
```js
import React, { Component } from 'react'
import { View, Text } from 'react-native'
/* Importamos connect para agregar la funcino onAdddPlace a nuestro componente por medio del metodo MapDispatchToProps **/
import { connect } from 'react-redux'

/*
  Importamos el componente <PlaceInput />  para agregar los lugares
  haciendo uso de la accion addPlace, agregaremos deletePlace por que lo usaremos mas adelante.
*/
import PlaceInput from '../../componentes/PlaceInput'
/* Action Creators */
import { addPlace, deletePlace } from '../../store/actions/index'

class SharePlaceScreen extends Component {

  placeAddHandler = placeName => {
    /* Usamos la funcion anexada por MapDispatchToProps */
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

/* por medio de props pasaremos la funcino onAdddPlace y esta funcion despachara la accino addPlace  */
const MapDispatchToProps = dispatch => {
  return {
    onAdddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}

export default connect( null, MapDispatchToProps ) ( SharePlaceScreen )
```
---
## **PlaceInput**
Nuestro componente ``<SharePlaceScreen />`` usa el componente ``<PlaceInput />`` el cual recibe por la prop ``onPlaceAdded``
el lugar que agregamos.

```js
import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

class PlaceInput extends Component {
  state = {
    placeName: ''
  }

  componentDidMount () {
    console.log('%cBienvenido PlaceInput', 'color: tomato;')
  }

  _placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  }

  _placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "" ) {
      return
    }
    this.props.onPlaceAdded(this.state.placeName)
    this.setState({ placeName: '' })
  }

  render () {
    return (
      <View style={styles.inputContainer } >
        <TextInput
            placeholder      = "Asombrosos lugares..."
            value            = { this.state.placeName }
            onChangeText     = { this._placeNameChangeHandler.bind(this) }
            clearTextOnFocus = { true }
            style            = { styles.placeInput }
        />
        <Button
            title   = "Add"
            style   = { styles.placeButton }
            color   = "teal"
            onPress = { this._placeSubmitHandler.bind(this) }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width          : '100%',
    flexDirection  : 'row',
    justifyContent : 'space-between',
    alignItems     : 'center',
    backgroundColor: 'silver',
  },
  placeInput: {
    width    : '70%',
    color    : 'teal',
    textAlign: 'left',
    fontSize : 24,
  },
  placeButton:{
    width: '30%',
  },
})

export default PlaceInput

```

## ConfigureStore.js

Configuramos nuestro store para que nos entregue pasarle el reductor ```places``` al store.

```js
import { createStore, combineReducers, compose } from 'redux'
import placesReducer from './reducers/places'

const rootReducer = combineReducers({
  places: placesReducer
})

let composeEnhancers = compose

/* SI ESTAMOS EN MODO DESARROLLO */
if ( __DEV__ ) {
  composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers())
}

export default configureStore

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

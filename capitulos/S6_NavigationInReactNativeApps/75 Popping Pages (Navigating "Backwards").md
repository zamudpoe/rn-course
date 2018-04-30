# Seccion 6 - Navigation in React Native Apps

## **Clase 75:** Popping Pages (Navigating "Backwards")
---

Ahora queremos conectar directamentenuestra pantalla ``PlaceDetail`` a ``redux`` a nuestra ``store`` para esto haremos lo siguente y despachar directamente la accion ``Delete`` desde aqui.

* Quitar "Eliminar" un elemento
* Volver "Atras" a la pantalla anterior  "Find Place" una vez que se elimino el item seleccinado.
* Ir atras si le damos click al boton ``"Find Place"``
Todo el rtabajo lo realizaremos en el componente ```PlaceDetail```
* lo convertiremos de ser un componente funcinoal lo haremos un componente basado en clases.
* pasaremos el dispatch a una funcion y dicha funciono la pasaremos como props gracias a ```mapDispatchToprops``` para esto importaremos ``connect`` como lo venimos configurando ``null``
* Para lograr lo anterior importaremos la accion ``deletePlace`` de nuestro entry point de ``actions``
* Convertiremos nuestro componente funcional en uno basado en clases.

Nuestro archivo ``PlaceDetail.js`` quedara como sigue:

```js
import React, { Component } from 'react'
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Icon from '../../../node_modules/react-native-vector-icons/dist/Ionicons'
import { deletePlace } from '../../store/actions/index'

class PlaceDetail extends Component {

  placeDeletedHandler = () => {
    this.props.onDeletePlace (this.props.selectedPlace.key)

    this.props.navigator.pop({
      animated: false,         // does the pop have transition animation or does it happen immediately (optional)
      animationType: 'fade',  // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    });

  }

  render () {
    return (
      <View >
        <View style = { styles.Container } >
          <Image
            source = { this.props.selectedPlace.image }
            style = { styles.placeImage }
          />
          <Text style = { styles.placeName } > { this.props.selectedPlace.name } </Text>
        </View>
        <View>
          <TouchableOpacity onPress= { this.placeDeletedHandler} >
            <View style = { styles.deleteButton } >
              <Icon
                name = 'ios-trash'
                color = 'tomato'
                size = { 30 }
              />
              <Text style={{ left: 5 ,fontSize: 24, color: 'tomato' }} >Eliminar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
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

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch (deletePlace(key))  /**  tendremos que modificar la accion deletePlace */
  }
}

export default connect (null, mapDispatchToProps) (PlaceDetail)

```

### Modificamos la accion ``deletePlace`` en ``../../src/store/actions/places.js``

```js
export const deletePlace = (key) => {
  return {
    type     : DELETE_PLACE,
    placeKey : key
  }
}
```

## Modificamos nuestro reductor ``places.js``

Ahora haremos uso de la accion para obtener el key del item seleccinoado.

```js
 case DELETE_PLACE:
  return {
    ...state,
    places: state.places.filter(place => {
      return place.key !== action.placeKey;
    })
  }
```

## **``App.js``**
Le pasaremos el ``store`` y ``provider`` a nuestra pantalla registrada ``PlaceDetailScreen``.

```js
Navigation.registerComponent(
    "awesome-places.PlaceDetailScreen",
    () => PlaceDetailScreen,
    store,
    Provider
)
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

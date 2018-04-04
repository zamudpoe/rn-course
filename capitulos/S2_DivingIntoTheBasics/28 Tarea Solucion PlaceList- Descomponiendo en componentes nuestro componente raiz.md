# Seccion 2 - **Diving into the basics**
## **28 TAREA SOLUCION** Descomponiendo nuestro componente en mas componentes

---
### Configurando nuestro **Componente Funcional ```<PlaceList />```**

> Como **NO necesitamos controlar ningun ESTADO** aqui en este componente , crearemos un componente funcional que recibira todo por **PROPS**

### Platilla base PlaceList.js

Tomaremos como plantilla base una que ya solo nos enfocaremos a incluir el **componente [Componente FlatList]  <FlatList />** de la **libreria react-native** , que sera la novedad en esta seccion, los estilos los cortaremos del objeto de estilos **listContainer** en nuestro componente Raiz App.js.

  ```js
  import React from 'react'
  import { View, StyleSheet } from 'react-native';

  import ListItem from './ListItem'

  const PlaceList = props => {

    return (
      // CODIGO JSX
    )
  }

  const styles = StyleSheet.create({
    listContainer: {
      width: "100%",
      backgroundColor: 'tomato',
    }
  })

  export default PlaceList

  ```

---
### Componente FlatList

> **OJO :** Para conocer mas del componente FlatList visitemos la documentacion oficial: [Componente FlatList]

Interfaz de rendimiento para la representación de listas simples y planas, que admite las funciones más prácticas

* Fully cross-platform.
* Optional horizontal mode.
* Configurable viewability callbacks.
* Header support.
* Footer support.
* Separator support.
* Pull to Refresh.
* Scroll loading.
* ScrollToIndex support.

Si necesitas **soporte de seccion** , use **```<SectionList>```**

### **Minimal Example:**

```js
<FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>
```

---
## Configurando nuestro componente **FlatList**

Nuestra configuracion seria la siguiente:

  * **style :** ya lo tenemos configurado desde el inicio de la creacion del componente ```PlaceList```
  * **data :** la data recibira su valor por props, que sera el **ESTADO** del componente Raiz App.js pasado por props
  * **renderItem:** Aqui pararemos el Componente que vamos a renderizar por cada uno de los elementos individuales, en nuestro caso sera nuestro componente funcional previamente creado. **```<ListItem />```**

    ```js
      <FlatList
        style      = { styles.listContainer }
        data       = { props.places }
        renderItem = { (info) => (
          <ListItem
            placeName     = { info.item.name }
            placeImage    = { info.item.image }
            onItemPressed = { () => props.onItemSelected(info.item.key) }
          />
        )}
      />
    ```

  Listo nuestro componente esta configurado , pero ahora necesitamos agregarlo a donde lo usaeremos

> **IMPORTANTE : ** Necesitamos antes probar que todo nuestro flujo de preceso sigue igual funcional antes de agregar el componente FlatList, para esto vamos a agregar la vista que veniamos usando y nos quedara asi el codigo:

Nuestro componente **```<PlaceList />```** quedara como sigue :
> **OJO:** Cambiamos **```this.state por props```**

  ```js
  import React from 'react'
  import { View, StyleSheet } from 'react-native';

  import ListItem from './ListItem'

  const PlaceList = props => {
    // OJO camb iamos this.state por props
    const placesOuput = props.places.map((place, idx) => (
      <ListItem key={ idx } placeName={ place } />
    ))

    return (
      <View style={ styles.listContainer } >
        { placesOuput }
      </View>
    )
  }

  const styles = StyleSheet.create({
    listContainer: {
      width: "100%",
      backgroundColor: 'tomato',
    }
  })
  export default PlaceList
  ```


1. Nuestro render quedara asi en nuestro **```componnete raiz App.js```**

```js
  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style= { styles.textLabel } >🗽 Mis Lugares</Text>
        <PlaceInput onPlaceAdded={ this._placeAddedHandler.bind(this) } />
        <PlaceList places = { this.state.places } />
      </View>
    )
  }
```

1. Componente Raiz App.js Final:

```js
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

import PlaceInput from './src/componentes/PlaceInput'
import PlaceList from './src/componentes/PlaceList'

export default class App extends Component {
  state = {
    places: []
  }

  _placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    }, console.log('%o', this.state))
  }

  render () {

    return (
      <View style={styles.mainContainer}>
        <Text style= { styles.textLabel } >🗽 Mis Lugares</Text>
        <PlaceInput onPlaceAdded={ this._placeAddedHandler.bind(this) } />
        <PlaceList places = { this.state.places } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex           : 1, /* Toma todo el espacio vertical disponible para ti */
    padding        : 25,  /* Le damos padding para alejar nuestro componente del top  */
    flexDirection  : 'column', /* Establece el eje principal (Eje Y) y la direccion de sus hijos sera de arriba hacia abajo  */
    justifyContent : 'flex-start', /* coloca a tus hijos al inicio del eje principal (Eje Y)  */
    alignItems     : 'center', /* Posicionate en el centro del eje perpendicular (Eje X) al principal (Eje Y) */
    backgroundColor: 'whitesmoke',

  },
  textLabel: {
    color   : 'teal',
    fontSize: 24,
  }
});
```

---
## Agregando **```Componente FlatList```**

Lo veremos en nuestro proximo capitulo!




---
**ERRORES :**

> **FAILURE:** Build failed with an exception.

> What went wrong: ```Could not determine java version from '9.0.1'.```

**SOLUCION:**

  ```unix
  export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
  printenv JAVA_HOME
  ```


[Componente FlatList]:(https://facebook.github.io/react-native/docs/flatlist.html#docsNav)

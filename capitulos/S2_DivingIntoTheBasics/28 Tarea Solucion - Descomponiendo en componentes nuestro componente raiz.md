# Seccion 2 - **Diving into the basics**
## **28 TAREA SOLUCION** Descomponiendo nuestro componente en mas componentes

---
### Creando los archivos en estructura de componentes

En nuestra carpeta de componentes
  ```unix
    .
    `-- src
        `-- componentes
  ```

Creamos los archivos vacios ```**PlaceInput.js```** y ```**PlaceList.js```** para cada componentes  **```<PlaceInput />```** y **```<PlaceList />```** :
  ```unix
    .
    |-- App.js
    |-- App.test.js
    |-- index.js
    `-- src
        `-- componentes
            |-- ListItem.js
            |-- PlaceInput.js
            `-- PlaceList.js
  ```

---
### Configurando nuestro componente **```<PlaceInput />```** como un **componente basado en Clase**

Primero que nada debemos definir que tipo de componente crearemos si uno **funcional** o uno con **Estado** , es simple averiguarlo ya que si nuestro componente va a manipular su propio estado pues procederemos a crear un componente con estado o lo que es lo mismo **componente basado en Clase** ,

1. Creamos nuestro componente PlaceInput desde la plantilla base
    ```js
    import React, { Component } from 'react'

    class PlaceInput extends Component {
      render () {
        return (
          // Que componente renderizaremos?, echemosle un vistazo a nuestro componente raiz App.js
          // OJO: recordemos que solo podemos retornar un componente que envuelva mas componentes hijos.
        )
      }
    }

    export default PlaceInput
    ```

1. Cortamos toda la vista con clase **inputContainer** y lo pegamos en nuestra seccion de **retorno de JSX** de nuestro componente **PlaceInput**

    ```js
      <View style={styles.inputContainer } >
        <TextInput
            onChangeText = { this._placeNameChangeHandler.bind(this) }
            placeholder  = "Asombrosos lugares..."
            value        = { this.state.placeName }
            style        = { styles.placeInput }
        />
        <Button
            title   = "Add"
            onPress = { this._placeSubmitHandler.bind(this) }
            style   = { styles.placeButton }
        />
      </View>
    ```

1. ¿Que mas necesita nuestro componente? ... Claro **Los Estilos** :

    * En nuestro **Componente Raiz App.js** nos traemos los estilos **"inputContainer, placeInput, placeButton"** a nuestro componente **PlaceInput.js**
      > **OJO:** Antes que nada importamos **```View, TextInput, Button, StyleSheet```** de la libreria ```react-native```,
      ```js
      import { StyleSheet } from 'react-native'
      ```
      Listo ahora si pegamos nuestros estilos:
      ```js
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
      ```

1. ¿Que mas necesita nuestro componente?... Por Supuesto **El Estado** del componente ```<TextInput />```
    ```js
    state = {
      placeName: '',
    }
    ```

1. ¿Que mas necesita nuestro componente?...  **CLARO!!, hacer el binding de las funciones handler** , comencemos con la del componente <Buton />> , este componente recibira en su **propiedad onPlaceAdded** la funcion handler **```placeAddedHandler```**

    En nuestro **```componente raiz App.js```** le bindeamos el **```handler placeAddedHandler```** a la **propiedad onPlaceAdded** del componente ```<PlaceInput />```

    ```js
    <PlaceInput onPlaceAdded={ this._placeAddedHandler.bind(this) } />
    ```

    Y en nuestro componente PlaceInput.js **"```<PlaceInput />```"**

    ```js
    <Button
        title   = "Add"
        style   = { styles.placeButton }
        onPress = { this._placeSubmitHandler.bind(this) }
    />
    ```
    Y nuestro handler **```_placeSubmitHandler```**

    ```
    _placeSubmitHandler = () => {
      if (this.state.placeName.trim() === "" ) {
        return
      }
      this.props.onPlaceAdded(this.state.placeName);
      // this.setState({ placeName: '' })
    }
    ```

---
## **Archivos finales!**

### Componente Raiz **App.js**


```js
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

import ListItem from './src/componentes/ListItem'
import PlaceInput from './src/componentes/PlaceInput'

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
    const placesOuput = this.state.places.map((place, idx) => (
      <ListItem key={ idx } placeName={ place } />
    ))

    return (
      <View style={styles.mainContainer}>
        <Text style= { styles.textLabel } >🗽 Mis Lugares</Text>
        <PlaceInput onPlaceAdded={ this._placeAddedHandler.bind(this) } />
        <View style={ styles.listContainer } >
          { placesOuput }
        </View>
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
  listContainer: {
    /*
      Como estos estilos se aplicaran a los hijos ,
      es decir a nuestro componente personalizado <ListItem />
    */
    width: '100%',
  },
  textLabel: {
    color   : 'teal',
    fontSize: 24,
  }
});
```


### Componente hijo **PlaceInput.js**
Este componente baso en clase con Estado es hijo del componnete Raiz App.js

```js
import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

class PlaceInput extends Component {
  state = {
    placeName: ''
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
    this.props.onPlaceAdded(this.state.placeName);
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





---
### Configurando nuestro componente **```<PlaceList />```**





---
**ERRORES :**

> **FAILURE:** Build failed with an exception.

> What went wrong: ```Could not determine java version from '9.0.1'.```

**SOLUCION:**

  ```unix
  export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
  printenv JAVA_HOME
  ```

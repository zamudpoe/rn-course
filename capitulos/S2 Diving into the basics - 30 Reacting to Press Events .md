# Seccion 2 - **Diving into the basics**
## **30 Reacting to Press Events**

Hasta ahora lo que aprendimos en el capitulo anterior fue haer un ```Componente Touchable``` configurandole una **funcionalidad inline** a su propiedad ```onPress```, lo cual fue exitoso en dicho capitulo pero no es nuestra meta usar esto con una funcionalidad inline , nosotros queremos disparar algun metodo nuestro componente ```PlaceList``` ligado a una  ```propiedad onItemPressed``` del componente ```<ListItem />```

### **¿Cual es nuestra meta en este capitulo? R:** " Eliminar un elemento cuando lo toquemos".

Nuestro Actual componente ```<PlaceList />```
```js
const PlaceList = props => {
  // Cambiamos this.state por props
  const placesOuput = props.places.map((place, idx) => (
    <ListItem
      key           = { idx }
      placeName     = { place }
      onItemPressed= {() => console.log('\n\n\t%c¡Alo Item [ %c%s - %s %c]\n', 'color: teal;', 'color: purple; font-Weight: bold;', idx, place, 'color: teal;' )}
    />
  ))

  return (
    <View style={ styles.listContainer } >
      { placesOuput }
    </View>
  )
}
```

### **PASOS ** para pasar metodos desde el **```componente Raiz App.js```** a los descendientes

1. Eliminamos la funcionalidad inline y le bindearemos un metodo recibido por props. ```props.onItemDeleted(idx)``` aunque ahora no lo tengasmo creado solo lo registraremos en el componente por el momento.

    > **OJO :** Como la funcionalidad estara creada en el componente raiz **```App.js```** la recibiremos por props de padre a hijo y sera definida y pasara como prop al componente **```<PlaceList />```** en **```App.js```**

    * **```<App />```** ---> **```<PlaceList />```** : **App.js** le pasa su handler **```_onPlaceDeletedHandler```** al componente **```<PlaceList />```** a su propiedad **```onItemDeleted```**
      ```js
        render () {
          return (
            <View style={styles.mainContainer}>
              <Text style= { styles.textLabel } >🗽 Mis Lugares</Text>
              <PlaceInput onPlaceAdded={ this._placeAddedHandler.bind(this) } />
              <PlaceList
                places        = { this.state.places }
                onItemDeleted = { this._onPlaceDeletedHandler }
              />
            </View>
          )
        }
      ```
    * **```<PlaceList />```** ---> **```<ListItem />```** : **PlaceList** recibe en sus **props** el metodo  **```onItemDeleted```** y se lo pasa a su hijo **```<ListItem />```** en sus propiedad **```onItemPressed```**

      ```js
      const PlaceList = props => {
        const placesOuput = props.places.map((place, idx) => (
          <ListItem
            key           = { idx }
            placeName     = { place }
            onItemPressed = { () => props.onItemDeleted(idx) } /* <--- Metodo recibido por props  */
          />
        ))

        return (
          <View style={ styles.listContainer } >
            { placesOuput }
          </View>
        )
      }
      ```

    * **```<ListItem />```** recibe por props el metodo **```onItemPressed```** y se lo asigna a la propiedad **```onPress```** del **componente touchable** ```<TouchableOpacity onPress = { props.onItemPressed } >```

      ```js
      const ListItem = (props) => (
        <TouchableOpacity onPress = { props.onItemPressed } >
          <View style   = { styles.listItem }  >
            <Text style={{ color: 'purple' }} >
              { props.placeName }
            </Text>
          </View>
        </TouchableOpacity>
      )
      ```


1. Finalmente en el **Componente Raiz**  **```App.js```** Creamos la funcionalidad **```_onPlaceDeletedHandler```**

    ```js
      _onPlaceDeletedHandler = index  => {
        this.setState(prevState => {
          return {
            places: prevState.places.filter((place, idxArray) => {
              return idxArray !== index
            })
          }
        }, console.log('\n\n%cEliminando el elemento %s\n', 'color: tomato; font-weight: bold;' , index))
      }
    ```
    > **NOTA:** **El metodo javascript ```filter()```** Crea un nuevo arreglo con todos los elementos que pasan la prueba implementada en la funcion, En nuestro caso sera true cuando el elemento que vamos a eliminar **NO SEA IGUAL** a uno del array existente, dando como resultado en un nuevo array sin el elemento a eliminar, dicho array sera actualizado en el estado por medio del metodo ```setState``` ocacionando que se rerenderice nuestro componente sin el elemento eliminado!.

      ```js
      return {
            places: prevState.places.filter((place, idxArray) => {
              return idxArray !== index
            })
          }
      ```

1. Probamos nuestra aplicacion y podremos ver que nuestra aplicacion agrega y elimina items por medio del componente Touchable.

# **MISION CUMPLIDA!!**, hemos aprendido a pasar metodos desde componente Raiz a los hijos.

## PERO ESPEREN UN MOMENTO!! **¿Que sucede si nuestra lista crece demasiado que excede el ancho de nuestra pantalla o viewport?**... 😖No podemos:

* ver los elementos!,
* ni mover la lista para verlos
* o navegar entre los elementos!!

Entonces como Podemos manejar vistas que son actualmente mas largas que nuestro viewport? mmm 🤔

# **Que no panda el cunico!**, Exploraremos este tema en el proximo capitulo!. 😍

--
# Archivos finales

## **Componente Raiz ```App.js```**

  ```js
    import React, { Component } from 'react';
    import { StyleSheet, View,  Text } from 'react-native';

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

      _onPlaceDeletedHandler = index  => {
        this.setState(prevState => {
          return {
            places: prevState.places.filter((place, idxArray) => {
              return idxArray !== index
            })
          }
        }, console.log('\n\n%cEliminando el elemento %s\n', 'color: tomato; font-weight: bold;' , index))
      }

      render () {
        return (
          <View style={styles.mainContainer}>
            <Text style= { styles.textLabel } >🗽 Mis Lugares</Text>
            <PlaceInput onPlaceAdded={ this._placeAddedHandler.bind(this) } />
            <PlaceList
              places = { this.state.places }
              onItemDeleted = { this._onPlaceDeletedHandler }
            />
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
        color   : 'tomato',
        fontSize: 24,
      }
    });
  ```

## **Componente Raiz ```PlaceList.js```**

  ```js
    import React from 'react'
    import { StyleSheet, View } from 'react-native';

    import ListItem from './ListItem'

    const PlaceList = props => {
      const placesOuput = props.places.map((place, idx) => (
        <ListItem
          key           = { idx }
          placeName     = { place }
          onItemPressed = { () => props.onItemDeleted(idx) }
        />
      ))

      return (
        <View style={ styles.listContainer } >
          { placesOuput }
        </View>
      )
    }

    const styles = StyleSheet.create({
      listContainer: {
        width: '100%',
        backgroundColor: 'white'  // '#eee',
      }
    })

    export default PlaceList
  ```

## **Componente Raiz ```ListItem.js```**

  ```js
    import React from 'react'
    import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

    const ListItem = (props) => (
      <TouchableOpacity onPress = { props.onItemPressed } >
        <View style   = { styles.listItem }  >
          <Text style={{ color: 'purple' }} >
            { props.placeName }
          </Text>
        </View>
      </TouchableOpacity>
    )

    const styles = StyleSheet.create({
      listItem: {
        // width       : '100%', /** este estilo se controlara desde el componente papa */
        marginBottom   : 5 ,
        padding        : 10,
        backgroundColor: '#eee',
      },
    })

    export default ListItem
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


[Documentacion Oficial del Componente View]:(https://facebook.github.io/react-native/docs/view.html)

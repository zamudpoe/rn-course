# Seccion 2 - Diving into the basics
## 27 Adding a Button and Managing State

Agregaremos un boton y manejaremos el estado para agregar un nuevo elemento al arreglo.

Vamos a crear el **handler** para la prop **onPress** del componente ```<Button />``` , nosotros previamente habiamos creado el handler ```_onPress``` , lo vamos a renombrar por ```_placeSubmitHandler``` , solo para efectos de respetar los nombres metodos y procedimientos que va realizando el instructor!.

Renombramos **```_onBotonPress```**

  ```js
    _onBotonPress = () => {
      console.log('%cHey me has tocado %c\n\n\t¡Pervertido!\n', 'color: teal; font-weight: bold;', 'color: red; font-weight: bold; font-size: 2.5em' )
    }
  ```
Por: **```_placeSubmitHandler```**

  ```js
    _placeSubmitHandler = () => {
      console.log('%cHey me has tocado %c\n\n\t¡Pervertido!\n', 'color: teal; font-weight: bold;', 'color: red; font-weight: bold; font-size: 2.5em' )
    }
  ```

---
## Manejando el ESTADO con el componente <Button />


1. Agregamos una nueva propiedad a nuestro Estado , llamada 'places' y sera un array

  ```js
    state ={
      placeName = "",
      places    = []
    }
  ```

1. Creamos la constante ```placesOuput``` en la funcion render para manejar el nuevo arreglo que iremos mapeando a un componente ```<Text />```

  ```js
    const placesOuput = this.state.places.map((place, idx) => (
      <Text key= { idx } >{ place } </Text>
    ))
  ```

1. Agregamos nueva seccion para renderizar la lista de componentes  ```<Text />```
  ```jsx
    <View>
      { placesOuput }
    </View>
  ```

> Nuestro componente final quedaria asi

  ```js
    import React, { Component } from 'react';
    import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

    export default class App extends Component {
      state = {
        placeName: '',
        places: []
      }

      _placeNameChangeHandler = (val) => {
        this.setState({
          placeName: val
        }, console.log('%c%s', "color: teal; fontWeight: bold;", val))
      }

      _placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
          return
        }
        this.setState(prevState => {
          return {
            places: prevState.places.concat(prevState.placeName)
          }
        })
      }

      render () {
        const placesOuput = this.state.places.map((place, idx) => (
          <Text key= { idx } >{ place } </Text>
        ))

        return (
          <View style={styles.mainContainer}>
            <View style={styles.inputContainer } >
              <TextInput
                onChangeText = { this._placeNameChangeHandler.bind(this) }
                placeholder  = "Asombrosos lugares..."
                value        = { this.state.placeName }
                style        = { styles.textInputStyles }
              />
              <Button
                title   = "Add"
                onPress = { this._placeSubmitHandler.bind(this) }
                style   = { styles.btnStyles }
              />
            </View>
            <View>
              { placesOuput }
            </View>
          </View>
        )
      }
    }

    const styles = StyleSheet.create({
      mainContainer: {
        flex           : 1, /* Toma todo el espacio vertical disponible para ti */
        flexDirection  : 'column', /* Establece el eje principal (Eje Y) y la direccion de sus hijos sera de arriba hacia abajo  */
        justifyContent : 'flex-start', /* coloca a tus hijos al inicio del eje principal (Eje Y)  */
        alignItems     : 'center', /* Posicionate en el centro del eje perpendicular (Eje X) al principal (Eje Y) */
        paddingTop     : 25,  /* Le damos padding para alejar nuestro componente del top  */
        backgroundColor: 'red',
      },
      inputContainer: {
        width          : '100%',
        flexDirection  : 'row',
        justifyContent : 'space-between',
        alignItems     : 'center',
        backgroundColor: 'silver',
      },
      textInputStyles: {
        width    : '70%',
        color    : 'teal',
        textAlign: 'center',
        fontSize: 24,
      },
      btnStyles:{
        width: '30%',
      }
    })
  ```



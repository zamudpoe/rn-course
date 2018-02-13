import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  state = {
    placeName: ''
  }

  _placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    }, console.log('%c%s', "color: teal; fontWeight: bold;", val))
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style        = { styles.textInput }
          onChangeText = { this._placeNameChangeHandler.bind(this) }
          placeholder  = "Asombrosos lugares..."
          value        = { this.state.placeName }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1, /* Toma todo el espacio vertical disponible para ti */
    flexDirection  : 'column', /* Establece el eje principal (Eje Y) y la direccion de sus hijos sera de arriba hacia abajo  */
    justifyContent : 'flex-start', /* coloca a tus hijos al inicio del eje principal (Eje Y)  */
    alignItems     : 'center', /* Posicionate en el centro del eje perpendicular (Eje X) al principal (Eje Y) */
    paddingTop     : 25,  /* Le damos padding para alejar nuestro componente del top  */
    backgroundColor: 'teal',
  },
  textInput: {
    width      : 300 ,
    color      : 'tomato',
    textAlign  : 'center'
  }
});

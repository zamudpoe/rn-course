import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  state = {
    placeName: ''
  }

  _placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    }, console.log('%c%s', "color: teal; fontWeight: bold;", val))
  }

  _onBotonPress = () => {
    console.log('%cHey me has tocado %c\n\n\t¡Pervertido!\n', 'color: teal; font-weight: bold;', 'color: red; font-weight: bold; font-size: 2.5em' )
  }

  render () {
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
            onPress = { this._onBotonPress.bind(this) }
            style   = { styles.btnStyles }
          />
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
    backgroundColor: 'whitesmoke',
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
    textAlign: 'center'
  },
  btnStyles:{
    width: '30%',
  }
});

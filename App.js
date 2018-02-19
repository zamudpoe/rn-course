import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

import ListItem from './src/componentes/ListItem'

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  _placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    })
  }

  _placeSubmitHandler = () => {

    if (this.state.placeName.trim() === "") {
      return
    } else {
      this.setState(prevState => {
        return {
          places: prevState.places.concat(prevState.placeName)
        }
      }, console.log('%o', this.state))
    }
  }

  render () {
    const placesOuput = this.state.places.map((place, idx) => (
      <ListItem key={ idx } placeName={ place } />
    ))

    return (
      <View style={styles.mainContainer}>
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
  listContainer: {
    /*
      Como estos estilos se aplicaran a los hijos ,
      es decir a nuestro componente personalizado <ListItem />
    */
    width: '100%',
  }
});

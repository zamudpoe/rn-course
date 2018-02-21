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
    color   : 'teal',
    fontSize: 24,
  }
});

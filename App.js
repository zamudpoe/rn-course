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

import React, { Component } from 'react';
import { StyleSheet, View,  Text } from 'react-native';
import PlaceInput from './src/componentes/PlaceInput'
import PlaceList from './src/componentes/PlaceList'
import PlaceDetail from './src/componentes/PlaceDetail'

const urlImg = 'https://media-cdn.tripadvisor.com/media/photo-s/09/58/8c/3f/playa-lancheros.jpg'

export default class App extends Component {
  state = {
    places       : [],
    selectedPlace: null,
  }

  _placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: urlImg
          }
        })
      }
    }, console.log('%o', this.state))
  }

  _placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  _modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  _onPlaceSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style= { styles.textLabel } >🗽 Mis Lugares</Text>
        <PlaceDetail
          selectedPlace = { this.state.selectedPlace }
          onItemDeleted = { this._placeDeletedHandler }
          onModalClosed = { this._modalClosedHandler }
        />
        <PlaceInput onPlaceAdded={ this._placeAddedHandler } />
        <PlaceList
          places         = { this.state.places }
          onItemSelected = { this._onPlaceSelectedHandler }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex           : 1,            /* Toma todo el espacio vertical disponible para ti */
    padding        : 25,           /* Le damos padding para alejar nuestro componente del top  */
    flexDirection  : 'column',     /* Establece el eje principal (Eje Y) y la direccion de sus hijos sera de arriba hacia abajo  */
    justifyContent : 'flex-start', /* coloca a tus hijos al inicio del eje principal (Eje Y)  */
    alignItems     : 'center',     /* Posicionate en el centro del eje perpendicular (Eje X) al principal (Eje Y) */
    backgroundColor: 'whitesmoke',
  },
  textLabel: {
    color   : 'teal',
    fontSize: 24,
  }
});

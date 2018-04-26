import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'

import PlaceInput from '../../componentes/PlaceInput'
import { addPlace, deletePlace } from '../../store/actions/index' /** Action Creators */

class SharePlaceScreen extends Component {
  placeAddHandler = placeName => {
    this.props.onAddPlace(placeName)
  }

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded = { this.placeAddHandler } />
      </View>
    )
  }
}

const MapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}

/* anexamos la funcion onAddPlace para ser usada como props y asi acceder a la funcion dispatch */
export default connect(null, MapDispatchToProps)(SharePlaceScreen)


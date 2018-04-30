import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import PlaceList from '../../componentes/PlaceList'

class FindPlaceScreen extends Component {

  onItemSelectedHandler = key => {
    const selPlace =  this.props.places.find(place=> {
                        return place.key === key
                      })

    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetailScreen',
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace,
      },
      backButtonTitle: "Volver..."
    })
  }

  render() {
    return (
      <View>
        <PlaceList
          places         = { this.props.places }
          onItemSelected = { this.onItemSelectedHandler }
       />
      </View>
    )
  }
}

const MapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect (MapStateToProps) (FindPlaceScreen)

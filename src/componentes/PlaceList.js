import React from 'react'
import { StyleSheet, View } from 'react-native';

import ListItem from './ListItem'

const PlaceList = props => {
  // Cambiamos this.state por props
  const placesOuput = props.places.map((place, idx) => (
    <ListItem
      key           = { idx }
      placeName     = { place }
      onItemPressed= {() => alert('¡Alo Item [ ' + idx + ' - ' + place + ' ]' )}
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

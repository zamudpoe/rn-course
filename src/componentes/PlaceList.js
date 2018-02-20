import React from 'react'
import { StyleSheet, View } from 'react-native';

import ListItem from './ListItem'

const PlaceList = props => {
  const placesOuput = props.places.map((place, idx) => (
    <ListItem
      key           = { idx }
      placeName     = { place }
      onItemPressed = { () => props.onItemDeleted(idx) }
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

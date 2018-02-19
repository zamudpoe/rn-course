import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListItem = (props) => (
  <View style={ styles.listItem }  >
    <Text style={{ color: 'purple' }} >
      { props.placeName }
    </Text>
  </View>
)

const styles = StyleSheet.create({
  listItem: {
    // width       : '100%', /** este estilo se controlara desde el componente papa */
    marginBottom   : 5 ,
    padding        : 10,
    backgroundColor: '#eee',
  },
})

export default ListItem

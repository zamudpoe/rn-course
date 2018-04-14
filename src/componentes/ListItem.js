import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const ListItem = (props) => (
  <TouchableOpacity onPress = { props.onItemPressed } >
    <View style   = { styles.listItem }  >
      <Image
        resizeMode = 'cover'
        source = { props.placeImage }
        style  = { styles.placeImage }
      />
      <Text style={{ color: 'purple' }} >{ props.placeName }</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  listItem: {
    // width       : '100%', /** este estilo se controlara desde el componente papa */
    marginBottom   : 5 ,
    padding        : 10,
    backgroundColor: '#eee',
    flexDirection  : 'row',  /* la direccion sera horizontal en el eje X */
    alignItems     : 'center'  /* centramos los componentes hijos de la vista en el eje opuesto al principal  */
  },
  placeImage: {
    width      : 50,
    height     : 50,
    marginRight: 8,
  }
})

export default ListItem

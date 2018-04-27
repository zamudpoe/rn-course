import React from 'react'
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from '../../../node_modules/react-native-vector-icons/dist/Ionicons'

const PlaceDetail = props => {
    return (
        <View >
          <View style = { styles.Container } >
            <Image
              source = { props.selectedPlace.image }
              style = { styles.placeImage }
            />
            <Text style = { styles.placeName } > { props.selectedPlace.name } </Text>
          </View>
          <View>
            <TouchableOpacity onPress= { props.onItemDeleted } >
              <View style = { styles.deleteButton } >
                <Icon
                  name = 'ios-trash'
                  color = 'tomato'
                  size = { 30 }
                />
                <Text style={{ left: 5 ,fontSize: 24, color: 'tomato' }} >Eliminar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
      margin: 22
    },
    placeImage: {
      width: "100%",
      height: 200
    },
    placeName: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 28
    },
    deleteButton: {
      flexDirection : 'row',
      justifyContent: "center",
      alignItems    : "center",
    }
});

export default PlaceDetail

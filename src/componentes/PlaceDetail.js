import React from 'react'
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from '../../node_modules/react-native-vector-icons/dist/Ionicons'

const PlaceDetail = props => {
    let modalContent = null

    if (props.selectedPlace) {
        modalContent = (
        <View style = { { backgroundColor: 'whitesmoke' } } >
          <Image
            source = { props.selectedPlace.image }
            style = { styles.placeImage }
          />
          <Text style = { styles.placeName } > { props.selectedPlace.name } </Text>
        </View>
        )
    }

    return (
      <Modal
        onRequestClose = { props.onModalClosed }
        visible = { props.selectedPlace !== null }
        animationType = "fade"
      >
        <View >
          { modalContent }
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
            <Button
              title = "Cerrar"
              onPress = { props.onModalClosed }
            />
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
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

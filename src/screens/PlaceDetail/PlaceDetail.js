import React, { Component } from 'react'
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import Icon from '../../../node_modules/react-native-vector-icons/dist/Ionicons'
import { deletePlace } from '../../store/actions/index'

class PlaceDetail extends Component {

  placeDeletedHandler = () => {
    this.props.onDeletePlace (this.props.selectedPlace.key)

    this.props.navigator.pop({
      animated: false,         // does the pop have transition animation or does it happen immediately (optional)
      animationType: 'fade',  // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    });

  }

  render () {
    return (
      <View >
        <View style = { styles.Container } >
          <Image
            source = { this.props.selectedPlace.image }
            style = { styles.placeImage }
          />
          <Text style = { styles.placeName } > { this.props.selectedPlace.name } </Text>
        </View>
        <View>
          <TouchableOpacity onPress= { this.placeDeletedHandler} >
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

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch (deletePlace(key))
  }
}

export default connect (null, mapDispatchToProps) (PlaceDetail)

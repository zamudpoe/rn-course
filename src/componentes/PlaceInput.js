import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

class PlaceInput extends Component {
  state = {
    placeName: ''
  }

  componentDidMount () {
    console.log('%cBienvenido PlaceInput', 'color: tomato;')
  }

  _placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  }

  _placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "" ) {
      return
    }
    this.props.onPlaceAdded(this.state.placeName)
    this.setState({ placeName: '' })
  }

  render () {
    return (
      <View style={styles.inputContainer } >
        <TextInput
            placeholder      = "Asombrosos lugares..."
            value            = { this.state.placeName }
            onChangeText     = { this._placeNameChangeHandler.bind(this) }
            clearTextOnFocus = { true }
            style            = { styles.placeInput }
        />
        <Button
            title   = "Add"
            style   = { styles.placeButton }
            color   = "teal"
            onPress = { this._placeSubmitHandler.bind(this) }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width          : '100%',
    flexDirection  : 'row',
    justifyContent : 'space-between',
    alignItems     : 'center',
    backgroundColor: 'silver',
  },
  placeInput: {
    width    : '70%',
    color    : 'teal',
    textAlign: 'left',
    fontSize : 24,
  },
  placeButton:{
    width: '30%',
  },
})

export default PlaceInput

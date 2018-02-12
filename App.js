import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  state = {
    placeName: ''
  }

  _placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    }, console.log('%c%s', "color: teal; fontWeight: bold;", val))
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style        = { styles.textInput }
          onChangeText = { this._placeNameChangeHandler.bind(this) }
          placeholder  = "Asombrosos lugares!"
          value        = { this.state.placeName }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
    alignItems     : 'center',
    justifyContent: 'center',
  },
  textInput: {
    width      : 300 ,
    height     : 40,
    borderColor: 'gray',
    borderWidth: 1,
    color      : 'tomato'
  }
});

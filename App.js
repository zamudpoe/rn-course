import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style = {{ color: 'tomato' , fontWeight: 'bold' }} >OLA K ASE?</Text>
        <Text style = {{ color: 'teal'  }}>¿Programando React Native o k ase?</Text>
        <Text>Abre App.js para iniciar tu desarrollo de tu App!</Text>
        <Text>Los cambios que realices en el archivo se recargaran en automatico.</Text>
        <Text>Sacude (iOS CTRL + CMD + Z, Android CMD + M ) tu smartphone para abrir el menu del desarrollador.</Text>
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
});

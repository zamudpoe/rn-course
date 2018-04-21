import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

/** importamos el componente funcional startMainTabs  */
import startMainTabs from '../MainTabs/startMainTabs'

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTabs()
  }

  render () {
    return (
      <View>
        <Text>Ventana de Acceso</Text>
        <Button
          title   = "Login ..."
          onPress = { this.loginHandler }
        />
      </View>
    )
  }

}

export default AuthScreen;

# 23 Working on the App: Adding a Textinput

Nos vamos a vistar la documentacion oficial de React Native :  [React NAtive Getting Started] y navegamos hacia abajo en esa misma pagina y buscamos por **Components**  para conocer los componentes que tenemos disponibles solo para usar!.

* ActivityIndicator
* Button
* DatePickerIOS
* DrawerLayoutAndroid
* FlatList
* Image
* KeyboardAvoidingView
* ListView
* MaskedViewIOS
* Modal
* NavigatorIOS
* Picker
* PickerIOS
* ProgressBarAndroid
* ProgressViewIOS
* RefreshControl
* ScrollView
* SectionList
* SegmentedControlIOS
* Slider
* SnapshotViewIOS
* StatusBar
* Switch
* TabBarIOS
* TabBarIOS.Item
* Text
* TextInput
* ToolbarAndroid
* TouchableHighlight
* TouchableNativeFeedback
* TouchableOpacity
* TouchableWithoutFeedback
* View
* ViewPagerAndroid
* VirtualizedList
* WebView

Finalmentee usemos algunos de estos componentes para familiarizarnos mas con **RN** y hacer algo mas que solo mostrar texto.

> Recordemos que **No podemos usar elementos Web* como **div´s, span´s, etc**

Supongamos que deseamos manejar algunas entradas del usuario y crear un nuevo articulo, y asi iremos creando una **lista de entradas** por parte del usuario, auxiliandonos para esto con el uso de **Botones** , todo esto lo iremos logrango conforme llegamos al final de este curso.

### Remplacemos el componente nativo ```<Text>Ola K ASE?</Text>``` por ```<TextInput />```

1. Abrimos App.js
1. Importamos **TextInput** de la **libreria react-native**
1. **Eliminamos todos los elmentos Text** del area de renderizado
1. Agregamos en el area de renderizado el componente importado **TextInput**
1. **Configuramos el componente TextInput** para esto nos vamos a la documentacion oficial del componente [Documentacion de Componente Text Input] para conocer mas como funciona

  * Agregamos estado
    ```javascript
    state = {
      placeName: ''
    }
    ```
  * Le asigamos al **valor** del componente el **Estado** del componente.
    ```javascript
        <TextInput
          placeholder  = "Asombrosos lugares!"
          value        = { this.state.placeName }
        />
    ```
  * Agregamos Handler **_placeNameChangeHandler** para actualizar el **ESTADO** y **rerenderizar** el componente con ```setState```

    ```javascript
    _placeNameChangeHandler = (val) => {
      this.setState({
        placeName: val
      }, console.log('%c%s', "color: teal; fontWeight: bold;", val))
    }
    ```

  * Bindeamos **_placeNameChangeHandler** a la funcion **onChangeText** del componente.
    ```javascript
        <TextInput
          onChangeText = { this._placeNameChangeHandler.bind(this) }
          placeholder  = "Asombrosos lugares!"
          value        = {this.state.placeName}
        />
    ```
  * Le configuramos **width , borderColor, borderWidth** estilos para visualizar el componente
    ```javascript
        <TextInput
          style        = {{ width: 300 , height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText = { this._placeNameChangeHandler.bind(this) }
          placeholder  = "Asombrosos lugares!"
          value        = {this.state.placeName}
        />
    ```

LISTO!!! , Y es asi como configuramos un componente **TextInput**:

  ```javascript
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
            style        = {{ width: 300 , height: 40, borderColor: 'gray', borderWidth: 1}}
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
  });
  ```

Configuremos los estilos a nuestro objeto **styles** :

```javascript
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
```



[React NAtive Getting Started]:(https://facebook.github.io/react-native/docs/getting-started.html)
[Documentacion de Componente Text Input]:(https://facebook.github.io/react-native/docs/textinput.html)


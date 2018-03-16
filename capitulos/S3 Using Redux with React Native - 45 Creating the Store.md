# Seccion 3 - Using Redux With React Native
## **Clase: 45. Creating the Store**

Bien hemos terminado ya las acciones del usuario!, ahora necesitamos **Conectar nuestra Aplicacion ```React Native``` con ```Redux```.**

Vamosa a trabajar con nuestro archivo Entry Pint principal de la aplicacion **```index.js```**

```js
import { AppRegistry } from 'react-native';
import App from './App';
AppRegistry.registerComponent('rncourse', () => App);
```

Comencemos por importar 'algo'

```js
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import App from './App';
AppRegistry.registerComponent('rncourse', () => App);

```
Y ese algo es el componente ```Provider``` de la libreria ```react-native``` , Este componente conectara a nuestra ```store``` y entonces envolvera el componente ```App```

---
Archivo EntryPoint de nuestra App ```index.js```

```js
import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './src/store/configureStore';

/** creamos la funcion para el Store */
const store = configureStore()

const RNredux = () => (
  <Provider store={ store } >
    <App />
  </Provider>
)

AppRegistry.registerComponent('rncourse', () => RNredux);

```

***
**```configureStore.js```**

```js
import { createStore, combineReducers } from 'redux'
import placerReducer from './reducers/places'

const rootReducer = combineReducers({
  places: placerReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}
 export default configureStore

```

Listo!!! hemos creado el contenedor para la Store a nuestra Aplicacion ,React Native!, ahora lo que sigue es conectar nuestro contenedor a react-redux y asi poder despachar acciones y poder obtener nuestro Estado!..... veremos esto en el proximo capitulo!.

---
**ERRORES & SOLUCIONES:**

> **FAILURE:** Build failed with an exception.

> What went wrong: ```Could not determine java version from '9.0.1'.```

**SOLUCION:**

  ```unix
  export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
  printenv JAVA_HOME
  ```


[Usando el componente ScrollView]:(https://facebook.github.io/react-native/docs/using-a-scrollview.html)
[Documentacion Oficial del Componente ScrollView]:(https://facebook.github.io/react-native/docs/scrollview.html)
[Using List Views]:(https://facebook.github.io/react-native/docs/using-a-listview.html)
[Documentacion oficial del Componente FlatList]:(https://facebook.github.io/react-native/docs/flatlist.html)
[Documentacion oficial del Componente SectionList]:(https://facebook.github.io/react-native/docs/sectionlist.html)
[Recursos Estaticos : Imagenes]:(https://facebook.github.io/react-native/docs/images.html)
[Documentacion oficial del Componente Image]:(https://facebook.github.io/react-native/docs/image.html)
[Componente Modal]:(https://facebook.github.io/react-native/docs/modal.html)
[Redux]:(https://redux.js.org/)

# Seccion 4 - Debugging React Native Apps
## **Clase 53 :**  Depurando Redux

Hemos agregado **``react-native-debugger``** que es una herramienta asombrosa para la depuracion de Redux, pero no esta conectada a nuestra aplicacion React Native, que es lo que vamos a realizar ahora mismo...

Depurar Redux es relativamente sencillo, nos vamos a la documentacion oficial: **[Redux DevTools Integration]**

La documentacion nos dice que si habilitamos **``Debug Js Remotely``** para usarlo con la recien instalada aplicacion  **``React Native Debugger``** , la siguiente API esta incluida de forma global.

* window.__REDUX_DEVTOOLS_EXTENSION__
* window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
* window.__REDUX_DEVTOOLS_EXTENSION__.connect
* You can just use redux-devtools-extension npm package.

Todo el trabajo se realizara en nuestro store asi que nos vamos a nuestro store **``configureStore.js``** el cual actualmente se encuentra como sigue:

```js
import { createStore, combineReducers } from 'redux'
import placesReducer from './reducers/places'

const rootReducer = combineReducers({
  places: placesReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}
export default configureStore
```
---
## Configuracion del store **configureStore**
1. Importamos la funcion ``compose`` de la libreria ``redux``
    ``import { createStore, combineReducers } from 'redux'``
1. Definimos la variable ``composeEnhancers`` y le asignamos la funcion importada ``compose``
    ```js
    let composeEnhancers = compose
    ```
1. Asignamos la extension redux dev tools a ``composeEnhancers`` solo si estamos en modo desarrollador y no se asigne cuando estemos en produccion.

    ```js
    /* SI ESTAMOS EN MODO DESARROLLO */
    if ( __DEV__ ) {
      composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    }
    ```
1. Conectamos la funcion **``composeEnhancers()``** a la store **configureStore**

    ```js
    const configureStore = () => {
      return createStore(rootReducer, composeEnhancers())
    }
    ```

1. Nuestra store final quedara asi :

    ```js
    import { createStore, combineReducers, compose } from 'redux'
    import placesReducer from './reducers/places'

    const rootReducer = combineReducers({
      places: placesReducer
    })

    let composeEnhancers = compose

    /* SI ESTAMOS EN MODO DESARROLLO */
    if ( __DEV__ ) {
      composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    }

    const configureStore = () => {
      return createStore(rootReducer, composeEnhancers())
    }

    export default configureStore
    ```

1. recargamos la aplicacion en el simulador y nos vamos a depurador react native **"React Native Debugger"** y ya deemos poder ver todo lo referente a Redux en el depurador de React Native, como lo son las acciones, el Estado , etc...

---
### **Estructura de la App**
```js
.
├── App.js
├── index.js
├── package.json
└── src
    ├── assets
    │   ├── beautiful-place.jpg
    │   └── descarga.jpeg
    ├── componentes
    │   ├── ListItem.js
    │   ├── PlaceDetail.js
    │   ├── PlaceInput.js
    │   └── PlaceList.js
    └── store
        ├── actions
        │   ├── actionTypes.js
        │   ├── index.js
        │   └── places.js
        ├── configureStore.js
        └── reducers
            └── places.js
```



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
[React Redux]:(https://redux.js.org/faq/react-redux)
[Redux DevTools Integration]:(https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md)

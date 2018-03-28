# Seccion 3 - Using Redux With React Native
## **Clase: 46. Connecting React Native to Reduxe**
Ya casi lo logramos!, ahora vamos a conectar **```App.js```** a a **```React-Redux```** , para lograr esto vamos a importar **```Connect```** de la libreria  **```React-Redux```** en nuestro archivo **```App.js```**

La seccion de importar en nuestro archivo **```App.js```** quedara como sigue:

```js
import React, { Component } from 'react'
import { StyleSheet, View,  Text } from 'react-native'
import { connect } from 'react-redux'

import PlaceInput from './src/componentes/PlaceInput'
import PlaceList from './src/componentes/PlaceList'
import PlaceDetail from './src/componentes/PlaceDetail'

...

```


**```Connect```** nos permitira reconfigurar nuestro componente **```App```** en uno nuevo que nos entregara y que permitira recibir argumentos para conectar nuestro componente **```App```** a nuestro **```Store de Redux```**. y para lograr esto vamos a modificar la definicion de nuestro componente App

> **NOTA:** **```Connect```** es un Componente de Alto Orden ó Orden Superior  "HOC"

Antes:

```js
/* Eliminamos la exportacin por default de nuestro componente App */
export default class App extends Component {
  state = {
    places       : [],
    selectedPlace: null,
  }
  ....

```

Despues:
```js

class App extends Component {
  state = {
    places       : [],
    selectedPlace: null,
  }
  ...

/* Sl final hacemos la exportacion usando connect */
export default connect ()(App)

```

La funccion **```connect```** acepta dos argumentos:

* **mapStateToProps :** Esta funcion pasada por paramaetro a la funcion connect , lo que hace es entregar al nuevo componente creado por **```Connect```** el Estado el cual sera accesible por medio de **``props``** , ahora se podra acceder al estado por props ```props.estado.blabala```
* **mapDispatchToProps :** Es similar a **mapStateToProps** solo que en vez de entregar e las props el Estado del componente lo que entregara seran las funciones para que sean accesibles por medio de props en el nuevo componente.

**NOTA:** Podmeos visitar la documentacion oficial [React Redux] para informacion mas actualizada.

---
## Configurar el estado en mapStateToProps
1. Lo que haremos sera eliminar el estado local del compoente y crearlo en la funcion   **```mapStateToProps```**

    ```js
    ...
    const mapStateToProps = state => ({
      return {
        places: ,
        selecteedPlaces:
      }
    })

    export default connect ()(App)
    ```
1. Consultamos nuestro Reductor ```places.js``` y nuestra store ```configureStore.js``` para conocer el estado que estara disponible en nuestro componente App

  * En nuestro ```configureStore.js``` nos fijamos en nuestra funcion ```combineReducers``` asiganada a ```rootReducer``` que es la constante que se le pasa como parametro a ```createStore```  , que ya lleva el estado qeu nos entrega el reductor ```places.js```
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
  * En nuestro Reductor ```places.js``` podemos apreciar que ```initialState``` es asignado por default al parametro ``` state``` de la funcion reductora ```reducers``` y este lleva en su Estado ```places``` y ```selectedPlaces``` que es el estado que ocuparemos en la funcion **```matStateToProps```**

    ```js
    import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

    /*  State inicial   */
    const initialState = {
      places       : [],
      selectedPlace: null,
    }

    /** si no recibimos el State usaremos el inicial */
    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case ADD_PLACE:
          return {
            ...state,
            places: state.places.concat({
              key  : Math.random(),
              name : action.placeName,
              image: {
                uri: 'https://media-cdn.tripadvisor.com/media/photo-s/09/58/8c/3f/playa-lancheros.jpg'
              }
            })
          }

        case DELETE_PLACE:
          return {
            ...state,
            places: state.places.filter(place => {
              return place.key !== state.selectedPlace.key;
            }),
            selectedPlace: null
          }
        case SELECT_PLACE:
          return {
            ...state,
            selectedPlace: state.places.find(place => {
              return place.key === action.placeKey;
            })
          }
        case DESELECT_PLACE:
          return {
            ...state,
            selectedPlace: null
          }
        default:
          return state
      }
    }

    /** esportamos nuestro reductor raiz  */
    export default reducer

    ```


  * Asignamos el estado como props de nuestro Componente App.
  * > **NOTA :** Nosotros accederemos desde ahora el estado que nos entrega el **store** '' de redux , y el estado que nos entrega es **``places``** , esto podemos apreciarlo en el archivo **``configureStore.js``**

    ```js
    . . .
    const mapStateToProps = state => ({
      return {
        places         : state.places.places,
        selecteedPlace : state.places.selectedPlace
      }
    })

    export default connect (mapStateToProps)(App)
    ```

---
## Configurando **```mapDispatchToProps```**

1. Importamos las acciones a usar en nuestra funcion dispatch en el mapeo de funciones en la funcion **```mapDispatchToProps```**

    ```js
    /* Creadores de Acciones */
    import { addPlace, deletePlace, selectPlace, deselectPlace } from "./src/store/actions/index"
    ```

2. Ahora craemos nuestra **```funcion mapDispatchToProps```** la cual recibira por parametro **```dispatch```** que lo que hace es enviar las funciones creadas en nuestros actions creator ```actios/places.js``` y que preaviamente importamos del entry point de actions ```index```

    ```js
      const mapStateToProps = state => ({
        return {
          places         : state.places.places,
          selecteedPlace : state.places.selectedPlace
        }
      })

      const mapDispatchToProps = dispatch => {
        return {
          onAddPlace    : (name) => dispatch (addPlace(name)),
          onDeletePlace : () => dispatch(deletePlace()),
          onSelectPlace : (key) => dispatch(selectPlace(key)),
          onDeselectPlace: () => dispatch(deselectPlace())
        }
      }
      export default connect (mapStateToProps)(App)
    ```

    > **OJO:** Para saber como estan definidas las funciones que estamos pasandole a dispatch en su funcion **```mapDispatchToProps```** debemos de echarle un vistazo al reductor **```../src/store/reducers/places.js```**

---
## Acciones & Reductor Usados

Echemosle un vistazo a nuestro Reductor ```../src/store/reducers/places.js``` y podremos ver como se usan las acciones ```../src/store/actions//places.js```  que enviamos al reductor

Reductor places.js
```js
  import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

  /*  State inicial   */
  const initialState = {
    places       : [],
    selectedPlace: null,
  }

  /** si no recibimos el State usaremos el inicial */
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PLACE:
        return {
          ...state,
          places: state.places.concat({
            key  : Math.random(),
            name : action.placeName,
            image: {
              uri: 'https://media-cdn.tripadvisor.com/media/photo-s/09/58/8c/3f/playa-lancheros.jpg'
            }
          })
        }

      case DELETE_PLACE:
        return {
          ...state,
          places: state.places.filter(place => {
            return place.key !== state.selectedPlace.key;
          }),
          selectedPlace: null
        }
      case SELECT_PLACE:
        return {
          ...state,
          selectedPlace: state.places.find(place => {
            return place.key === action.placeKey;
          })
        }
      case DESELECT_PLACE:
        return {
          ...state,
          selectedPlace: null
        }
      default:
        return state
    }
  }

  /** esportamos nuestro reductor raiz  */
  export default reducer
```

Creador de acciones actions/places.js
```js
  import {
    ADD_PLACE,
    DELETE_PLACE,
    SELECT_PLACE,
    DESELECT_PLACE
  } from './actionTypes'

  export const addPlace = (placeName) => {
    return {
      type     : ADD_PLACE,
      placeName: placeName
    }
  }

  /**
   * Comos no recibimos parametros solo retornamos el tipo de accion
   * para ser controlado por el reductor.
  */
  export const deletePlace = () => {
    return {
      type     : DELETE_PLACE,
    }
  }

  export const selectPlace = (key) => {
    return {
      type    : SELECT_PLACE,
      placeKey: key
    }
  }

  export const deselectPlace = () => {
    return {
      type    : DESELECT_PLACE
    }
  }

```

---
## Store
Si revisamos nuestro store **```configureStore.js```** podremos apreciar que emvolvemos a nuestro componente ```App``` con el componente ```Provider``` y le pasamos en su  propiedad store la funcion configureStore y a su vez tambien recibe el ```Estado``` que configuramos en el archivo ```configureStore.js```

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

La store ya va totalmente configurada!

Esta es la razon por la que en el archivo ``App.js`` accedemos al **``estado places``** y **``selectedPlace``** por props, por medio de la rebanada de estado ```places```

```js
...
const mapStateToProps = state => {
  return {
    places        : state.places.places,
    selectedPlace : state.places.selectedPlace
  }
}
```

¿CONFUNDIDO?, la clave esta en la logica del reductor que es manejado en el store en su funcion combineReducers .

El reductor recibe un state inicial y una accion , y dependiendo el tipo de accion si la accion modifica el estado , el reductor nos devuelve ese nuevo estado y si no es modificado el estado, nos devuelve el estado por default, que en nuestro caso lo dejamos configurado en el objeto initialState ,

```js
/*  State inicial   */
const initialState = {
  places       : [],
  selectedPlace: null,
}

```

Ahora bien el reductor nos entrega un nuevo estado siempre, y nosottros ese estado lo recibimos en la store en```places: placesReducer``` ,

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
 Entonces podmeos pasar multiples reductores aqui en el objeto de configuracion pero siempre los reductores entregaran su estado, por ejemplo si tuvieramos otro reductor llamado ```pagos``` este nos entregara un estado y podriamos asignarlo a la propiedad  ```payments``` , pero por fuera este seria nuestro estado. ```payments```

```js
  const rootReducer = combineReducers({
    places: placesReducer,
    payments: pagos
  })
```

Asi ya podriamos acceder al estado ```payments.cXPagar``` ó ```payments.cXCobrar``` desde nuestro componente ```App``` en su funcion ```apStateToProps```

```js
...
const mapStateToProps = state => {
  return {
    places        : state.places.places,
    selectedPlace : state.places.selectedPlace,
    cXPagar       : state.payments.cXPagar,
    cXCobrar      : state.payments.cXCobrar
  }
}
```

¿Asi o mas facil?

Listo ahroa a probarla aplicacion , detenemos el servidor javascript y volvemos a levantar nuestro servidor ```npm run ios``` ó con ```react-native run-ios```

### Que pasa si deseamos **debuggear con redux implementado?**

### Que no cunda el panico esto lo veremos en el siguiente capitulo! **47. Wrap Up**


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

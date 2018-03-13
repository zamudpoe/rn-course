# Seccion 3 - Using Redux With React Native
## **Clase: 43 - Setting Up Actions**

Hasta el momento para la creacion de un nuevo lugar podemos pensar en las siguientes acciones :

* **ADD_PLACE** ```Agregar``` un lugar
* **DELETE_PLACE** ```Eliminar``` un lugar
* **SELECT_PLACE** ```Seleccionar``` un lugar
* **DESELECT_PLACE** y pensandolo bien tambien uno para cuando ```DesSeleccionamos``` un lugar.

Creamos nuestro archivo ```actionTypes.js``` para configuracion de los diferentes tipos de acciones antes mencionados como tambien ```places.js``` para nuestras acciones :

```js
   ...
    `-- store
            |-- actions
            |   |-- actionTypes.js
            |   `-- places.js
            `-- reducers
                `-- places.js
```

Asi que tenemos 4 tipos de acciones, las cuales le crearemos los tipos de acciones para cada accion en nuestro archivo ```actionTypes.js``` , esto es por convencion para asi evitar cometer errores al escribir y equivocarnos como tambien para poder encontrar un error de manera mas facil a la hora de estar dandole mantenimiento o depurando nuestra App.

Bien en nuestro archivo **```actionTypes.js```** procedemos a crear las constantes para cada uno de nuestros tipos de acciones que hasta este momento hemos detectado cuatro.

Nuestro archivo  **```actionTypes.js```** quedara como sigue

```js
export const ADD_PLACE      = 'ADD_PLACE'
export const DELETE_PLACE   = 'DELETE_PLACE'
export const SELECT_PLACE   = 'SELECT_PLACE'
export const DESELECT_PLACE = 'DESELECT_PLACE'
```

Nuestro archivo de acciones **```places.js```** que es donde usaremos , Para el caso cuado agregamos un nuevo lugar "addPlace" los tipos de acciones quedara como sigue:

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
```
> **Nota:** para saber como configurar nuestas acciones tenemos que echarle un ojo a como venimos manejando las acciones dichas en nuestro archivo de la aplicacion **```App.js```** , por ejemplo , para la accion ```addPlace``` nos fijamos en el handler **```_placeAddedHandler```** y asi sabremos si recibe o no parametros o alguna configuracion que debamos tomar en cuenta en la creacion de nuestra accion.

Como podemos apreciar nuestro handler recibe un parametro **```placeName```** y asi configuramos nuestra accion **```addPlace```**
```js
  ...
  _placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: urlImg
          }
        })
      }
    }, console.log('%o', this.state))
  }
````

Y asi de esta forma vamos configurando cada uno de los handlers en nuestro archivo ```App.js```
---
### **```places.js```**

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

Listo hemos creado nuestro archivo **```places.js```** para los ```creadores de acciones``` para las acciones y para los tipos de acciones creamos el archivo **```actionTypes.js```** , y para crear dichas acciones fuimos guiandonos de los handlers del archivo **```App.js```**

Solo nos falta un ultimo paso que es crear el **```Entry Point```** para las acciones **```ìndex.js```** , en este archivo usaremos **```places.js```** y **```actionTypes.js```**

Asi que creamos el archivo index.js en la carpeta de ```actions/```

```
`-- store
    |-- actions
    |   |-- actionTypes.js
    |   |-- index.js
    |   `-- places.js
    `-- reducers
        `-- places.js
```

---
### **```index.js```**

Dentro de nuestro EntryPoint **```index.js```** , exportaremos las acciones que previamente hemos creado y asi cunado necesitemos usar las acciones solo importaremos nuestro archivo **```index.js```**

```js
export { addPlace, deletePlace, selectPlace, deselectPlace } from './places'
```

> Parecera extraño pero es demasiado util solo tener un solo lugar desde donde importar todo.

Ahora ya podemos continuar configurarando nuestro **```reducer```** y comenzar a agregar logica en el para controlar nuestros distintos tipos de acciones. pero esto lo veremos en el proximo capitulo!.

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

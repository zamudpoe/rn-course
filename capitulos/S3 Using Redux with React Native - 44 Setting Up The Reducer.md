# Seccion 3 - Using Redux With React Native
## **Clase: 44 - Setting Up The Reducer**

Hasta el momento ya hemos definido los tipos de acciones **"```actionTypes```"** y los creadores de acciones **"```actions```"** ,

---
## **Configurando nuestro Reducer**

Dentro de nuestra case crearemos los distintos cases para las distintas acciones!. para los valores de cada case usaremos los ```actionTypes``` , asi que los importamos en nuestro **reducer :** ```places.js```




```js
import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

/*  State inicial   */
const initialState = {
  places       : [],
  selectedPlace: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

```

Ahora vamos a definir la logica para cada uno de los casos de las acciones en nuestro reducer, para lograr esto nos vamos a analisar la logica de **```App.js```** , nos traerems la logica para el handler placeAddHandler a nuestro reducer para el caso AddPlace.

> **Atencion** en **Redux** nunca retornamos el estado viejo si no que siempre retornamos un nuevo estado, y este reemplazara al viejo.

## Nuestra proxima meta sera **conectar nuestra app React Native a Redux** para que podamos despachar nuestras acciones y poder obetener el estado desde Redux.



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

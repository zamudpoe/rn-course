# Seccion 2 - **Diving into the basics**
## **31. Using a ScrollView**


Como vimos en el capitulo anterior generamos un listado de 'articulos' pero cuando la lista excede el viewport del dispositivo , la lista ya no se puede explorar , esto responde a una razon...

> ### **Las vistas no soportan navegacion de listas** solo contienen mas de un componente y les dan estilos!.

Para eso vamos **React Native** tiene un componente nativo **```<ScrollView />```**

* [Documentacion Oficial del Componente ScrollView]
* [Usando el componente ScrollView]

---
## **Implementando ScrollView en nuestra App**

Implementar el componente **```<ScrollView />```** es muy sencillo , lo unico que tenemos que hacer es reemplazar el componente **```<View />```** por **```<ScrollView />```** , veamos...

1. **[PlaceList.js] :** Importamos el componente nativo **```<ScrollView />```** de la libreria de ReactNative y eliminamos la importacion del componente **```<View />```**
    ```js
    import { StyleSheet, ScrollView } from 'react-native';
    ```

1. **[PlaceList.js] :** Hacemos el reemplazo de componente **```<View />```** por **```<ScrollView />```**

    ```js
    import React from 'react'
    import { StyleSheet, ScrollView } from 'react-native';

    import ListItem from './ListItem'

    const PlaceList = props => {
      const placesOuput = props.places.map((place, idx) => (
        <ListItem
          key           = { idx }
          placeName     = { place }
          onItemPressed = { () => props.onItemDeleted(idx) }
        />
      ))
      /* Reemplacemos el componente <View /> por <ScrollView /> */
      return <View style={ styles.listContainer } >{ placesOuput }</View>
    }

    const styles = StyleSheet.create({
      listContainer: {
        width: '100%',
        backgroundColor: 'white'  // '#eee',
      }
    })

    export default PlaceList
    ```

   Nuestro codigo quedara como sigue ya con el componente ```<ScrollView />``` implementado:

    ```js
    import React from 'react'
    import { StyleSheet, ScrollView } from 'react-native';

    import ListItem from './ListItem'

    const PlaceList = props => {
      const placesOuput = props.places.map((place, idx) => (
        <ListItem
          key           = { idx }
          placeName     = { place }
          onItemPressed = { () => props.onItemDeleted(idx) }
        />
      ))
      /* Usando el componente <ScrollView /> **/
      return <ScrollView style={ styles.listContainer } >{ placesOuput }</ScrollView>
    }

    const styles = StyleSheet.create({
      listContainer: {
        width: '100%',
        backgroundColor: 'white'  // '#eee',
      }
    })

    export default PlaceList
    ```

Es agradable tener una solucion para casos donde nuestros items exceedan el espacio en el dispositivo!, pero debemos considerar algunas situaciones anes de implementar **```<ScrollView />```**

**```<ScrollView />```** es genial en situaciones donde:

* Conocemos cuantos elementos vamos a tener para la lista ya que **reenderia todos los items a la vez**

**```<ScrollView />```** es ineficiente para casos donde:

* Se usara con listas demasiado largas que excedan por mucho el viewport del dispositivo
* Si se usara en dispositivos lentos o con poca memoria

Resumen con **```<ScrollView />```**  **Si tuvieramos miles de elementos nuestra aplicacion consumira mucha, demasiada memoria del dispositivo ya que cada item de la lista** (los que se ven y los que no se ven en el viewport) **es considerado en la memoria del dispositivo haciendolo lento, y mas si es un dispositivo con poca memoria o no de ultima generacion**, para este tipo de casos existe otro componente Nativo **```<FlatList />```** pero sera nuestro caso de estudio en el proximo capitulo!.



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

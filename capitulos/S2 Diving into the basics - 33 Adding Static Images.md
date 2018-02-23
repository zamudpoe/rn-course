# Seccion 2 - **Diving into the basics**
## **33 Adding Static Images**
### **Como agregamos una imagen a nuestros items de la lista ?**
Primero que nada debemos agregar los estaticos a nuestro proyecto para poder consumirlos en nuestra app.

1. Vamos a crear una carpeta para nuestros estaticos en nuestra carpeta **```./src```** llamada **```assets```**

    ```
    `-- src
        |-- assets
        `-- componentes
    ```

1. Bajamos imagenes de google a esa carpeta , en mi caso descarge una imagen llamada ```beautiful-place.jpg``` y ```descarga.jpeg```

    Listo nuestra estructura final debe parecerse a algo asi:

    ```
    .
    |-- App.js
    |-- App.test.js
    |-- README.md
    |-- README1.md
    |-- app.json
    |-- index.js
    |-- package.json
    `-- src
        |-- assets
        |   |-- beautiful-place.jpg
        |   `-- descarga.jpeg
        `-- componentes
            |-- ListItem.js
            |-- PlaceInput.js
            `-- PlaceList.js
    ```

1. Listo ya tenemos nuestros assets disponibles para consumirlos en el codigo de nuestra App

---
## Dialogo de confirmacion

Aparte de agregar una imagen acada item de la lista tambien deseamos que cuando el usuario le de click a un item se nos despliegue un dialogo de confirmacion mostrandonos detalles de nuestro item seleccionado.

###  **NOTA:** Por ahora solo vamos usar la imagen de forma hardcodeada pero mas adelante en el curso veremos como obtener una imagen de la galeria de nuestro celular o de la camara del celular


---
## Forma HardCode 1: source

1. Importamos nuestro estatico en **```app.js```**

    ```js
    import placeImage from './src/assets/beautiful-place.jpg'
    ```

1. En **```app.js```** Modificamos el handler ```_placeAddedHandler``` para que retorno el nuevo estado **places** con sus nuevas proppiedades.

    ```js
      _placeAddedHandler = placeName => {
        this.setState(prevState => {
          return {
            places: prevState.places.concat({
              indice: Math.random(),
              name: placeName,
              image: placeImage
            })
          }
        }, console.log('%o', this.state))
      }
    ```
    > **OJO: ** no olvidemos cambiar ```valor``` por ```name``` donde estemos usando el ```estado places```, en nuestro caso lo estamos usando en **```PlaceList.js```** , cambiamos ```info.item.value``` por ```info.item.name``` y de paso le agregamos el atributo ```placeImage = { info.item.image }```

      ```js
      renderItem={(info) => (
        <ListItem
          placeName     = { info.item.name }
          placeImage = { info.item.image }
          onItemPressed = { () => props.onItemDeleted(info.item.indice) }
          />
      )}
      ```
1. En  **```ListItems.js```** agregamos el componente nativo Image y lo configuramos dentro del View

    ```js
      ...
      import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

      const ListItem = (props) => (
        <TouchableOpacity onPress = { props.onItemPressed } >
          <View style   = { styles.listItem }  >
            <Image
              source = { props.placeImage }
            / >
            <Text style={{ color: 'purple' }} >{ props.placeName }</Text>
          </View>
        </TouchableOpacity>
      )
    ```
1. **```ListItems.js```** Configuramos sus estilos, al contenedor ```listItem``` le decimos que su flujo sera en el eje de las X y en el opuesto alineearemos de manera central. y agregaremos un nuevo objeto de estilos para la imagen , configurandole su ancho y alto, como un margen derecho para separa la imagen del texto.

    > **OJO:** Es muy importante asignarle un ancho y alto a nuestra imagen.

    ```js
      const styles = StyleSheet.create({
        listItem: {
          // width       : '100%', /** este estilo se controlara desde el componente papa */
          marginBottom   : 5 ,
          padding        : 10,
          backgroundColor: '#eee',
          flexDirection  : 'row',  /* la direccion sera horizontal en el eje X */
          alignItems     : 'center'  /* centramos los componentes hijos de la vista en el eje opuesto al principal  */
        },
        placeImage: {
          width      : 50,
          height     : 50,
          marginRight: 8,
        }
      })
    ```

1. Configuracion adicional del componente **```<image />```**

    Propiedad:  **```resizeMode```**

      ```js
      <Image
        resizeMode = 'cover' // <-- provemos como se comporta con cada valor [ cover|contain|stretch|center|repeat ]
        style  = { styles.placeImage }
        source = { props.placeImage }
      / >
      ```

   Propiedad:  **```resizeMode```** puede contener uno de los siguientes valores:

    * **cover :** Escale la imagen uniformemente (mantiene la relación de aspecto de la imagen) para que ambas dimensiones (ancho y alto) de la imagen **sean iguales o mayores** que la dimensión correspondiente de la vista (menos paddging).
    * **contain :** Escala la imagen de manera uniforme (mantiene la relación de aspecto de la image) para que ambas dimensiones (ancho y alto) de la imagen **sean iguales o menores** que la dimensión correspondiente de la vista (menos paddging)
    * **stretch :** Escala Ancho y alto independientemente, Esto puede cambiar la relación de aspecto del **```src```**.
    * **center :** centra la imagen
    * **repeat (solo iOS):** Repite la imagen para cubrir el marco de la vista. La imagen mantendrá su tamaño y relación de aspecto.


1. **```ListItems.js```**  quedara de la siguiente forma:

    ```js
      import React from 'react'
      import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

      const ListItem = (props) => (
        <TouchableOpacity onPress = { props.onItemPressed } >
          <View style   = { styles.listItem }  >
            <Image
              resizeMode = 'cover'
              style  = { styles.placeImage }
              source = { props.placeImage }
            / >
            <Text style={{ color: 'purple' }} >{ props.placeName }</Text>
          </View>
        </TouchableOpacity>
      )

      const styles = StyleSheet.create({
        listItem: {
          // width       : '100%', /** este estilo se controlara desde el componente papa */
          marginBottom   : 5 ,
          padding        : 10,
          backgroundColor: '#eee',
          flexDirection  : 'row',  /* la direccion sera horizontal en el eje X */
          alignItems     : 'center'  /* centramos los componentes hijos de la vista en el eje opuesto al principal  */
        },
        placeImage: {
          width      : 50,
          height     : 50,
          marginRight: 8,
        }
      })

      export default ListItem
    ```


---
## Forma HardCode 2: uri

Esta otra forma es similar a la anterior soloq ue la diferencia que los estaticos estan de forma remota y asi se acceden con el la propiedad ```uri``` del componente ```image```, solo se le asigna la **URL**  de la imagen

Nuestro componente ListItem quedaria como sigue:

```js
const ListItem = (props) => (
  <TouchableOpacity onPress = { props.onItemPressed } >
    <View style   = { styles.listItem }  >
      <Image
        style  = { styles.placeImage }
        source = { {uri: 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/bd/cancun.jpg'} }
      / >
      <Text style={{ color: 'purple' }} >{ props.placeName }</Text>
    </View>
  </TouchableOpacity>
)
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
[REcursos Estaticos : Imagenes]:(https://facebook.github.io/react-native/docs/images.html)
[Documentacion oficial del Componente Image]:(https://facebook.github.io/react-native/docs/image.html)

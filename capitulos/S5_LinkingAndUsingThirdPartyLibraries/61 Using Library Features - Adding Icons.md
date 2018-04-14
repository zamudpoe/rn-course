# Seccion 5 - Vinculando & Usando Librerias de 3ros
## **Clase 61 :** Usando caracteriscas de la libreria: Agregando Iconos
---

En capitulos anteriores hemos agregado la libreria a nuestra configuracion, ahora vamos a agregar iconos a nuestra aplicacino, que es la razon por la que agregamos esta libreria ``react-native-vector-icons`` , ¿correcto?


Agregar un icono es super simnple , pero donde podemos editarlo?, digamos que no deseamos tener el boton de **eliminar** como hasta ahora lo tenemos con texto "Eliminar", en su lugar deseamos un **icono de bote de basura**

```js
<Modal
  onRequestClose = { props.onModalClosed }
  visible        = { props.selectedPlace !== null }
  animationType  = "fade"
>
  <View style={styles.modalContainer}>
    {modalContent}
    <View>
      <Button title= "¿Eliminar?" color="red"  onPress = {props.onItemDeleted} />
      <Button title= "Cerrar" onPress = {props.onModalClosed} />
    </View>
  </View>
</Modal>
```

Asi qeu lo eliminaremos y en su lugar usaremos un icono!

1. En ``PlaceDetail.js``  Agregamos ``TouchableOpacity`` . para hacerlo transparente cuando hagamos click.

    ```js
    import React from 'react'
    import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
    ...
    ```

1. Agreagamos nuestro recien agreagdo componente ``<TouchableOpacity />``

    ```js
    <Modal
      onRequestClose = { props.onModalClosed }
      visible        = { props.selectedPlace !== null }
      animationType  = "fade"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity>
            /* Aqui agregaremos nuestro icono */
          </TouchableOpacity>
          <Button title= "Cerrar" onPress = {props.onModalClosed} />
        </View>
      </View>
    </Modal>
    ```
1. Importamos icon de la libreria ``react-native-vector-icons``

    ```js
    import Icon from 'react-native-vector-icons/Ionicons'
    ```

1. Agregamos el componente ``<icon>`` con su configuracion basica, size, name y color

    > **NOTA :** Consultemos la documentacion de como se implementa el componente ``Icon`` : [Icon Componente]

    ```js
    <Modal
      onRequestClose = { props.onModalClosed }
      visible        = { props.selectedPlace !== null }
      animationType  = "fade"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity>
            <Icon size= {30} name= "ios-trash-outline" color="tomato" />
          </TouchableOpacity>
          <Button title= "Cerrar" onPress = {props.onModalClosed} />
        </View>
      </View>
    </Modal>
    ```

Como coño se que icono usar?, simple nos apoyamos con la documentacion de ``Ionicons`` : [Ionicons], solo le damos click al icono que deseamos y ahi veremos los nombres con los que lo podremos usar.

De las 3 propiedades que usa el ``Componente <Icon />`` solo name es la que recibe el nombre del icono que nos de la documentacion , en nuestro caso escogimos [Ionicons]

```js
<Icon
  size  = {30}
  name  = "ios-trash-outline"
  color = "tomato"
/>
```

Ahora solo tenemos que detener el ``Servidor Javascript`` con ``Ctrl + C``  y reiniciarlo ``react-native run-ios`` ó ``react-native run-android`` y con esto nuestra app levantara los ultimos cambios.

  > **NOTA :** Debemos de recompilar (**``npm run ios y npm run android``** ó **``react-native run-ios react-native run-android``**) ambos proyectos cuando hagamos cambios en los iconos para que se nos actualicen los ``simuladores de los proyectos`` en ``iOS (XCode)`` y ``Android(Android Studio)``

Si despues de reinicializar los servidores javascript de los simuladores no vemos reflejado el icono en ellos, **Borramos las aplicaciones en los dispositivos y reiniciamos de nuevo** , para que se nos instale de nuevo en los simuladores.

  > **Consideracion** ``React Native Debugger`` no funciona correctamente cuando se tieen ambos servidores funcinoando , asi que dejemos el que nos interese trabajar y el otro lo cerramos.


---
## **Mejorando los Estilos del componente <icon />**

como podemos apreciar a nuestro componente <Icon /> le faltan estilos, lo cual vamos a proceder a realizar.

Haremos lo que siempre, envolveremos al componente ``<Icon />`` con el componente ``<View />`` y le agregaremos los estilos al componente ``<View />``

  ```jsx
    <TouchableOpacity>
      <View styles = { styles.deleteButton } >
        <Icon
          name = 'ios-trash'
          color = 'tomato'
          size = { 30 }
        />
      </View>
    </TouchableOpacity>
  ```

Creamos los estilos para nuestro componenete ``<View>``

  ```css
  deleteButton: {
    alignItems: "center",
  }
  ```

---
## Funcionalidad del boton Delete

Bien ya tenemos estilos en nuestro componente Icon, ahora vamos a restaurarle la funcionalidad de eliminar items. es muy simple:

1. en ``App,js`` nos fijamos que propiedades de las que recibe el componente ``<PlaceDetail>`` es la que tine la funcionalidad de eliminar items.

    ```js
    ...
    <PlaceDetail
      selectedPlace = { this.props.selectedPlace }
      onItemDeleted = { this._placeDeletedHandler }
      onModalClosed = { this._modalClosedHandler }
    />
    ...
    ```
Bien podemos observar que la propiedad es **``onItemDeleted``** es la que recibe la funcionalidad **``_placeDeletedHandler``** , asi que se la configuramos al componente ``<TouchableOpacity>`` en su propiedad ``onPress``

  ```js
  <TouchableOpacity onPress= { props.onItemDeleted } >
    <View style = { styles.deleteButton } >
      <Icon
        name  = 'ios-trash'
        color = 'tomato'
        size  = { 30 }
      />
    </View>
  </TouchableOpacity>
  ```
Excelente nuestra aplicacion esta funcionado al 100%, ahora ya podemos eliminar items!

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
[React Native Debugger]:(https://github.com/jhen0409/react-native-debugger)
[More about Debugging]: (https://facebook.github.io/react-native/docs/debugging.html)
[React Native Vector Icons]:(https://github.com/oblador/react-native-vector-icons)

[Entypo]:(http://entypo.com/)
[EvilIcons]:(http://evil-icons.io/)
[FontAwesome]:(https://fontawesome.com/icons)
[Feather]:(http://feathericons.com/)
[Foundation]:(https://zurb.com/playground/foundation-icon-fonts-3)
[Ionicons]:(https://ionicframework.com/docs/ionicons/)
[MaterialIcons]:(https://material.io/icons/)
[MaterialCommunityIcons]:(https://materialdesignicons.com/)
[Octicons]:(https://octicons.github.com/)
[Zocial]:(http://zocial.smcllns.com/)
[SimpleLineIcons]:(http://simplelineicons.com/)
[mas informacion de como hacerlo si esta disponible en la documentacion de React Native]:(http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)
[Icon Componente]:(https://github.com/oblador/react-native-vector-icons#icon-component)



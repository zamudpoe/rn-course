# Seccion 2 - **Diving into the basics**
## **35 Adding a Moda**

Vamos a agregar un Modal para confirmar la eliminacion de nuestro item de la lista de items, si nos vamos a la documentacion oficial de [Componente Modal] podemos apreciar un ejemplo :

```js
  import React, { Component } from 'react';
  import { Text, View, Button, Modal, StyleSheet } from 'react-native';

  export default class MyComponent extends Component {
    state = {
      modalVisible: false,
    };

    openModal() {
      this.setState({modalVisible:true});
    }

    closeModal() {
      this.setState({modalVisible:false});
    }

    render() {
      return (
          <View style={styles.container}>
            <Modal
                visible={this.state.modalVisible}
                animationType={'slide'}
                onRequestClose={() => this.closeModal()}
            >
              <View style={styles.modalContainer}>
                <View style={styles.innerContainer}>
                  <Text>This is content inside of modal component</Text>
                  <Button
                      onPress={() => this.closeModal()}
                      title="Close modal"
                  >
                  </Button>
                </View>
              </View>
            </Modal>
            <Button
                onPress={() => this.openModal()}
                title="Open modal"
            />
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'grey',
    },
    innerContainer: {
      alignItems: 'center',
    },
  });
```

Podemos apreciar que el  **```Componente Modal```** maneja un Estado para visualizar o no el modal en su propiedad **```visible```** , la cual cambia de false o true por medio de los  ```handler´s openMOdal``` y ```closeModdal``` que por medio del metodo ```setState``` cambia el valor del estado ```modalVisible``` de false a true y viseversa

Bueno ahora en base a este modelo base del modal vamos a integrarlo en nuestra App , nosotros vamos a crear un componente llamado **```PlaceDetail.js```** que sera nuestro **```Componente "Funcional"  Modal```**

---
## Estructura del componente Modal
El ```Componente Modal se usa como envoltura``` de los **```Componentes <View>```** y dentro los componentes view pondremos  los componentes que seran parte del Modal. el componente modal tiene 3 atributos **```onRequestClose, visible, animationType```** que se configuran para mostrar u ocultar el Modal como taambien el tipo de animacion con el que se mostrara u ocultara.

```js
  <Modal
    onRequestClose = { props.HandlerParaCerrarModal }
    visible        = { props.TRUE_O_FALSE } /* Puede ser una funcion que retorne booleano ó o una evaluacion que retorne true o false o el estado que sea booleano */
    animationType  = "fade"
  >
    <View style={styles.modalContainer}>
      <View>
        {*  Los omponentens nativos de react-native se configuran de acuerdo a la documentacion oficial *}
        <Image />
        <Text />
      </View>
      <View>
       {* Los omponentens nativos de react-native se configuran de acuerdo a la documentacion oficial *}
        <Button
          title   = "Boton01" color="blue"
          onPress = {props._onHandlerPersonalizado}
        />
        <Button
          title   = "Boton02" color="red"
          onPress = {props._onHandlerPersonalizado}
        />
      </View>
    </View>
  </Modal>
```

Basicamente asi se configura el componente Modal.

---
## Creacion & configuracion del **```Componente Funcional PlaceDetail.js```**

1. Crearemos nuestro componente funcional base **```PlaceDetail.js```**
    ```js
      import React from 'react'
      import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native'

      const PlaceDetail = props => {
        let modalContent = null

        if (props.selectedPlace) {
          modalContent = (
            <View style = {{ backgroundColor: 'purple' }} >
              <Image source={props.selectedPlace.image} style={styles.placeImage} />
              <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
          )
        }

        return (
          <Modal
            onRequestClose = { props.onModalClosed }
            visible        = { props.selectedPlace !== null }
            animationType  = "fade"
          >
            <View style={styles.modalContainer}>
              {modalContent}
              <View>
                <Button
                  title   = "Delete" color="red"
                  onPress = {props.onItemDeleted}
                />
                <Button
                  title   = "Close"
                  onPress = {props.onModalClosed}
                />
              </View>
            </View>
          </Modal>
        )
      }

      const styles = StyleSheet.create({
        modalContainer: {
          margin: 22
        },
        placeImage: {
          width: "100%",
          height: 200
        },
        placeName: {
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 28
        }
      });

      export default PlaceDetail
    ```

1. Lo importaremos desde nuestro componente raiz **```App.js```**
    ```js
    import PlaceDetail from './src/componentes/PlaceDetail'
    ```

1. Instanciamos el componente **```Componente Funcional PlaceDetail.js```** en ```App.js``` le configuramos sus props :
    * **selectedPlace:** Esta prop recibira el **Estado selectedPlace** que siempre tendra el valor mas actual
    * **onItemDeleted:** Esta prop recibira **el metodo handler ```_placeDeletedHandler```** que sera el encargado de manejar como se eliminaran los elementos de la lista.
    * **onModalClosed:** Esta prop recibira **el metodo handler ```_modalClosedHandler```** que sera el encargado de manejar como se cerrara el dialogo, lo haremos dejando nul el estado **selectedPlace** y ya internamente en **PlaceDEtail.js**

    ```js
      <PlaceDetail
        selectedPlace = { this.state.selectedPlace }
        onItemDeleted = { this._placeDeletedHandler }
        onModalClosed = { this._modalClosedHandler }
      />
    ```
    El componente Modal **```"PlaceDetail.js"```** quedara instanciado de la siguiente manera:
    ```js
      <Modal
        onRequestClose = { props.onModalClosed } /* aqui recibimos por props el metodo handler para cerrar el Modal. */
        visible        = { props.selectedPlace !== null } /* Aqui cambiamos de TRUE/FALSE el atributo visible para que se muestre o no el modal!. */
        animationType  = "fade" /* podemos configurar distintas formas de mostrarse el modal, podemos verlo en la documentacion. */
      >
    ```
    > **Configuracion minima de Modal** los siguients atributos del componente modal son los minimos para configurar nuestro Modal.

    * **onRequestClose :** aqui configuramos una funcion handler para cerrar el dialogo.
    * **visible:** este atributo muestra u oculta el dialogo.
    * **animationType :** Tipo de animacion con la que aparecera neustro modal.


1. Nuestro Componente **```PlaceDetail.js** quedara al final asi :

    ```js
      import React from 'react'
      import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native'

      const PlaceDetail = props => {
        let modalContent = null

        if (props.selectedPlace) {
          modalContent = (
            <View style = {{ backgroundColor: 'purple' }} >
              <Image source={props.selectedPlace.image} style={styles.placeImage} />
              <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
          )
        }

        return (
          <Modal
            onRequestClose = { props.onModalClosed }
            visible        = { props.selectedPlace !== null }
            animationType  = "fade"
          >
            <View style={styles.modalContainer}>
              {modalContent}
              <View>
                <Button
                  title   = "Delete" color="red"
                  onPress = {props.onItemDeleted}
                />
                <Button
                  title   = "Close"
                  onPress = {props.onModalClosed}
                />
              </View>
            </View>
          </Modal>
        )
      }

      const styles = StyleSheet.create({
        modalContainer: {
          margin: 22
        },
        placeImage: {
          width: "100%",
          height: 200
        },
        placeName: {
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 28
        }
      });

      export default PlaceDetail
    ```


1. Nuestro componente raiz **```App.js```** quedara configurado de la siguiente manera

    ```js
      import React, { Component } from 'react';
      import { StyleSheet, View,  Text } from 'react-native';

      import PlaceInput from './src/componentes/PlaceInput'
      import PlaceList from './src/componentes/PlaceList'
      import PlaceDetail from './src/componentes/PlaceDetail'

      const urlImg = 'https://media-cdn.tripadvisor.com/media/photo-s/09/58/8c/3f/playa-lancheros.jpg'

      export default class App extends Component {
        state = {
          places       : [],
          selectedPlace: null,
        }

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

        _placeDeletedHandler = () => {
          this.setState(prevState => {
            return {
              places: prevState.places.filter(place => {
                return place.key !== prevState.selectedPlace.key;
              }),
              selectedPlace: null
            };
          });
        };

        _modalClosedHandler = () => {
          this.setState({
            selectedPlace: null
          });
        };

        _onPlaceSelectedHandler = key => {
          this.setState(prevState => {
            return {
              selectedPlace: prevState.places.find(place => {
                return place.key === key;
              })
            };
          });
        };

        render () {
          return (
            <View style={styles.mainContainer}>
              <Text style= { styles.textLabel } >🗽 Mis Lugares</Text>
              <PlaceDetail
                selectedPlace = { this.state.selectedPlace }
                onItemDeleted = { this._placeDeletedHandler }
                onModalClosed = { this._modalClosedHandler }
              />
              <PlaceInput onPlaceAdded={ this._placeAddedHandler } />
              <PlaceList
                places         = { this.state.places }
                onItemSelected = { this._onPlaceSelectedHandler }
              />
            </View>
          )
        }
      }

      const styles = StyleSheet.create({
        mainContainer: {
          flex           : 1, /* Toma todo el espacio vertical disponible para ti */
          padding        : 25,  /* Le damos padding para alejar nuestro componente del top  */
          flexDirection  : 'column', /* Establece el eje principal (Eje Y) y la direccion de sus hijos sera de arriba hacia abajo  */
          justifyContent : 'flex-start', /* coloca a tus hijos al inicio del eje principal (Eje Y)  */
          alignItems     : 'center', /* Posicionate en el centro del eje perpendicular (Eje X) al principal (Eje Y) */
          backgroundColor: 'whitesmoke',
        },
        textLabel: {
          color   : 'teal',
          fontSize: 24,
        }
      });
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

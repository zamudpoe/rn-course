# Seccion 2 - **Diving into the basics**
## 28 **Creando Un Componente Personalizado**

Hasta ahora solo hemos trabajado con un solo componente, el raiz **```"App.js"```** , y hemos logrado un excelente progreso haciendo uso de los componentes nativos de la **```Libreria React Native```** para crear una lista de elementos sencilla, ahora vamos a crear un nuevo componente en el cual encapsularemos una lista de articulos o elementos!.

**Ejecutamos :**  ```tree -I 'node_modules|ios|android|.vscode|.expo’``` para conocer la estructura de todo nuestro proyecto a excepcion de ```node_modules|ios|android|.vscode|.expo```
---
## Creamos la estructura para nuestros componentes
* Creamos las carpetas ```./src/componentes```
* Creo mi primer componente reutilizable ```ListItem.js```
* listamos nuestra estructura para darnos una idea como va quedando con el siguiente comando : ```tree -I "node_modules|ios|android|.vscode|.expo|yarn.lock"```

    ```unix
      .
      |-- App.js
      |-- App.test.js
      |-- README.md
      |-- README1.md
      |-- app.json
      |-- index.js
      |-- package.json
      `-- src
          `-- componentes
              `-- ListItem.js
    ```

---
## Creacion de componente funcional **ListItem.js**

El componente **```<Text />```** esta muy limitado para nuestro caso de uso el cual es darle uso como un elemento de lista **"List Item"** , por que  si lo fuesemos a usar como un elemento de lista (En vez de un componente  **```<View />```**) vamos a tener opciones de estilos muy limitados,

Por ejemplo si intentamos darle un borde al componente ```<Text />``` no va a funcionar debido a  que no es tan stylizable como el componente ```<View />``` ; Por lo tanto si vamos a necesitar estilos muy significantes o destacados vamos a necesitar un compoente Vista ```<View />```

1. Asi qeu vamos a importar los componentes ```<View />``` y ```<Text />``` de la libreria **Reat-Native**

    ```js
    import React from 'react'
    import { View, Text } from 'react-native'
    ```

1. Creamos nuestro componente funcional

    ```js
    const ListItem = () => {
      <View>
        <Text> </Text>
      </View>
    }
    ```

1. Le pasamos por parametro las **```props```** para que por ese medio reciba de sus padres todos los valores.

    ```js
    const ListItem = (props) => (
    <View>
        <Text>{ props.placeName }</Text>
    </View>
    )
    ```

1. Ahora para darle estilos a nuestra vista, importamos el **helper StyleSheet** para los estilos y poder usarlos en nuestro componente:

    ```js
    import React from 'react'
    import { View, Text, StyleSheet } from 'react-native'
    ```

1. Creamos los estilos para nuestros componentes en un objeto de configuracion de estilos.

    ```js
    const styles = StyleSheet.create({
      listItem: {
          width       : '100%',
          marginBottom: 4 ,
          padding     : 10,
          backgroundColor: "#eee",
      },
    })
    ```

1. Utilizamos los estilos en nuestro componente
    ```js
    const ListItem = (props) => (
    <View style={ styles.listItem }  >
        <Text style={{ color: 'tomato' }} >
        { props.placeName }
        </Text>
    </View>
    )
    ```


---
## Utilizando nuestro componente personalizado en otros componentes.

Una vez que tenemos un componete creado , para poder utilizarlo en otro componente, en nuestro caso vamos a utilizarlo en el componente Raiz ``àpp.js```

1. En nuestro componente raiz ``App.js``` importamos nuestro componente funcional ```<ListItem />```
    ```js
    import ListItem from './src/componentes/ListItem'
    ```
1. Reemplazamos el componente ```<Text>``` por nuestro componente recien creado ```<ListItem />``` en la **funcion render**

    ```js
    render () {
      const placesOuput = this.state.places.map((place, idx) => (
          <ListItem />
      ))
      }
    }
    ```

1. Le pasamos por propiedades el indice **'key'** para qUe no se queje **React** cuando lo reenderice, y la propiedad **placeName** donde iremos haciendo uso de deestructuring para obtener cada elemento!.

    ```js
      render () {
        const placesOuput = this.state.places.map((place, idx) =(
                  <ListItem key={ idx } placeName={ place } />
                )
              )

        return (
          <View style={styles.mainContainer}>
            <View style={styles.inputContainer } >
            <TextInput
                onChangeText = { this._placeNameChangeHandler.bind(this) }
                placeholder  = "Asombrosos lugares..."
                value        = { this.state.placeName }
                style        = { styles.placeInput }
            />
            <Button
                title   = "Add"
                onPress = { this._placeSubmitHandler.bind(this) }
                style   = { styles.placeButton }
            />
            </View>
            <View style={ styles.listContainer } >
              { placesOuput }
            </View>
          </View>
        )
      }
    ```

1. Aplicamos estilos al componente raiz ```App.js```

    Vamos a darle un padding a nuestro contenedor principal **```mainContainer```**  de 25, y a nuestro

    ```css
        const styles = StyleSheet.create({
        mainContainer: {
            flex           : 1, /* Toma todo el espacio vertical disponible para ti */
            padding        : 25,  /* Le damos padding general para alejar nuestro componentes hijos de las orillas */
            flexDirection  : 'column', /* Establece el eje principal (Eje Y) y la direccion de sus hijos sera de arriba hacia abajo  */
            justifyContent : 'flex-start', /* coloca a tus hijos al inicio del eje principal (Eje Y)  */
            alignItems     : 'center', /* Posicionate en el centro del eje perpendicular (Eje X) al principal (Eje Y) */
            backgroundColor: 'whitesmoke',

        },
        inputContainer: {
            width          : '100%',
            flexDirection  : 'row',
            justifyContent : 'space-between',
            alignItems     : 'center',
            backgroundColor: 'silver',
        },
        placeInput: {
            width    : '70%',
            color    : 'teal',
            textAlign: 'left',
            fontSize : 24,
        },
        placeButton:{
            width: '30%',
        },
        listContainer: {
            /*
            Como estos estilos se aplicaran a los hijos ,
            es decir a nuestro componente personalizado <ListItem />
            */
            width: '100%',
            /* Como nuestro padre tiene un paddging gral de 25 , los hijos  ocuparan el 100% del espacio disponible dentro del padre.  */
        }
        });
    ```
    Y a nuestro componente hijo ```ListItem.js```

    ```css
        const styles = StyleSheet.create({
        listItem: {
            // width       : '100%', /** este estilo se controlara desde el componente papa */
            marginBottom   : 5 ,
            padding        : 10,
            backgroundColor: "#eee",
        },
        })
    ```
    > **NOTA:** Como podremos apreciar nuestros componentes hijos( Contenidos en vistas ) se apareceran como mas centrados aunque tengan como propiedad CSS de ancho de 100% , esto es debido  a que la vista que contiene los hijos es donde se le aplica el estilo ```padding: 25``` al estilo ```mainContainer```y al estilo ```listContainer``` , le damos un ``` width: '100%',```
---
**ERRORES :**

> **FAILURE:** Build failed with an exception.

> What went wrong: ```Could not determine java version from '9.0.1'.```

**SOLUCION:**

  ```unix
  export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
  printenv JAVA_HOME
  ```

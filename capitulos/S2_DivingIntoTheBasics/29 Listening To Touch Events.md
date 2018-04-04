# Seccion 2 - **Diving into the basics**
## **29 Listening to Touch Events**

**¿Que sucede cuando le damos click a algun elemento?... ¡NADA!**, esto es debido a que no le hemos agregado esa funcionalidad a nuestro componente!. vamos a agregarsela!.

---
## Agregando funcionalidad touch a la **Vista  "```<View />```"** de los elementos del componente ```<ListItem />```

Lo que haremos es agregarle funcionalidad a nuestra vista adicionandole la propiedad **onPress** y recibira por props el metodo **onItemPressed** (Puede llamarse como uds deseen!.) y desde el componente padre donde instanciemos nuestro componente **ListItem** le asignaremos a la propiedad **onItemPressed** una **funcionalidad inline** o le podemos asignar algun metodo handler. veamos como queda con una metodo inline , le pasaremos el **metodo javascript alert** , veamos que sucede...

Nuestro componente sin el metodo **onPress**
```js
const ListItem = (props) => (
  <View style={ styles.listItem }  >
    <Text style={{ color: 'purple' }} >
      { props.placeName }
    </Text>
  </View>
)
```

Componente **ListItem** itentando registrar el **evento onPress**
```js
const ListItem = (props) => (
  <View
    onPress= { props.onItemPressed }
    style  ={ styles.listItem }
  >
    <Text style={{ color: 'purple' }} >
      { props.placeName }
    </Text>
  </View>
)
```

En el componente **```<PlaceList />```** a la propiedad **onItemPressed** le pasamos el **metodo javascript alert** por funcionalidad inline.

```js
const PlaceList = props => {
  // Cambiamos this.state por props
  const placesOuput = props.places.map((place, idx) => (
    <ListItem
      key           = { idx }
      placeName     = { place }
      onItemPressed= {() => alert('¡Alo Item [ ' + idx + ' ]!')}
    />
  ))

  return (
    <View style={ styles.listContainer } >
      { placesOuput }
    </View>
  )
}
```

Como podremos apreciar cuando intentamos darle click a un elemento para verl a funcionalidad en accion, ¿Que sucede? ... ¡¡¡¡NADA!!!!..

**NO FUNCIONA!!!**. La razon es que :

  > **Por default los componentes ```<View />``` & ```<Text />``` NO SON
  TOUCHABLES !!**, Por lo tanto no podemos registrar el evento onPress en ellos. Esto podemos confirmarlo visitando la **Documentacion Oficial:** [Documentacion Oficial del Componente View] y buscamos

**En React Native cada componente tiene su propio conjunto de Propiedades & Metodos**.

Entonces como logramos que nuestra Vista o cualquier otro elemento que no sea touchable responda a **Eventos Touchables** , sencillo envolviendolos con componentes que si lo sean!!.

> **NOTA:** Todo componente que registre el **evento onPress** es un **Componente Touchable**.

  * **TouchableHighlight** : Mantiene un brillo cuando presionamos y soltamos
  * **TouchableNativeFeedback** : **Solo funciona con Android** y usa un estado dibujable nativo para mostrar el evento touch a la vista, se puede personalizar
  * **TouchableOpacity** : Oscurece levemente el componente mientras lo presionamos.
  * **TouchableWithoutFeedback** : No hace nada, vaya no genera ningun evento visual solo registra el evento onPress.

**Ejemplo:** Haremos touchable un elemento ```<Image />```
```js
renderButton: function() {
  return (
    <TouchableHighlight onPress={this._onPressButton}>
      <Image
        style={styles.button}
        source={require('./myButton.png')}
      />
    </TouchableHighlight>
  );
},
```

> **OJO:** ```<TouchableHighlight />``` debe tener un hijo(no ninguna o mas de uno). **Si deseamos tener muchos componentes hijos, debemos envolverlos en un componente ```<View/>```**

---
## **Haciendo Touchable** nuestro componente ```<ListItem />```

Haremos lo siguiente :
1. Importamos el componente **Touchable** (**```TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback```**) nativo de la **libreria react-native**
    ```js
    import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
    ```

1. Envolvemos el componente nativo ```<View />``` con el elemento nativo ```<TouchableOpacity />```

    ```js
    const ListItem = (props) => (
      <TouchableOpacity  >
        <View style   = { styles.listItem } onPress={props.onItemPressed} >
          <Text style={{ color: 'purple' }} >
            { props.placeName }
          </Text>
        </View>
      </TouchableOpacity>
    )
    ```

1. Movemos el registro del metodo **```onPress```** del componente **```<View />```** al componente  **```<TouchableOpacity />```**

    ```js
    const ListItem = (props) => (
      <TouchableOpacity onPress = { props.onItemPressed } >
        <View style   = { styles.listItem }  >
          <Text style={{ color: 'purple' }} >
            { props.placeName }
          </Text>
        </View>
      </TouchableOpacity>
    )
    ```

    > **NOTA:** Podemos probar como funcionan los demas **componentes touchables** (**```TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback```**) , usandolos uno por uno y probandolos dandoles Click sin soltar el boton del mouse (si estan probando con emuladores) y ver como se comporta mientras mantenemos presionados y cuando liberamos el boton.

---

## Nos vemos en el siguiente capitulo  **30. Reacting to Press Events**

---
**ERRORES & SOLUCIONES:**

> **FAILURE:** Build failed with an exception.

> What went wrong: ```Could not determine java version from '9.0.1'.```

**SOLUCION:**

  ```unix
  export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
  printenv JAVA_HOME
  ```


[Documentacion Oficial del Componente View]:(https://facebook.github.io/react-native/docs/view.html)

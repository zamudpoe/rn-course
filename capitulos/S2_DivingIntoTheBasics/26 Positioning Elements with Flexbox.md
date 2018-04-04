# Seccion 2 - Diving into the basics
## 26. Positioning Elements with Flexbox

En este capitulo vamos a realizar lo siguiente:

* **Agregar & configurar & Usar un boton** de la libreria ```react-native```
* **Posicionaremos el boton a un lado de nuestro componente** ```TextInput``` , con el modelo de estilos ```Flexbox``` ya que **React Native no soporta CSS real** , sino que lo emula por medio del modelo de diseño Flexbox.

---
## **Agregar & configurar & Usar un boton**

1. Consultemos la guia oficial de React para conocer que nos dice como agregar & configurar un boton: [Guia Oficial - Botones]
1. **Agregemos el componente** ó importemos el componente ```Button``` de la libreria ```react-native``` a nuestro codigo ```App.js```
    ```js
      import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
    ```
1. **Configuremos el boton agregado**, con dos propiedades **title** y **color**
    > **NOTA:** La propiedad **color** es opcional, y de no usarse por dedfault el boton usara el color azul.

    ```js
      <Button
        title="add"
        color="tomato"
      />
    ```
1. Usemos el Boton en la seccion render de nuestro componente ```App```
    ```js
      render () {
        return (
          <View style={styles.container}>
            <TextInput
              style        = { styles.textInput }
              onChangeText = { this._placeNameChangeHandler.bind(this) }
              placeholder  = "Asombrosos lugares..."
              value        = { this.state.placeName }
            />
            <Button
              title="Add"
              color="tomato"
            />
          </View>
        );
      }
    ```
   > **NOTA:** En el simulador apreciaremos el siguiente mensaje de advertencia : **```Warning: Failed prop type: The prop 'onPress' is marked as required in 'Button', but its value is 'undefined'```** ,

---
## prop 'onPress' is marked as required

  Esto lo solucionamos creando un hnadler para cuando le den click al boton y por el momento lo llamaremos : '''_onBotonPress'''

  ```js
    _onBotonPress = () => {
      console.log('%cHey me has tocado %c\n\n\t¡Pervertido!\n', 'color: teal; font-weight: bold;', 'color: red; font-weight: bold; font-size: 2.5em' )
    }
  ```

  Y en el boton le asignaremos este handler a la propiedad ```onPress```

    ```onPress = { this._onBotonPress.bind(this) }```


  Nuestro componente Button quedara como sigue:

    ```js
      <Button
        title   = "Add"
        onPress = { this._onBotonPress.bind(this) }
        style   = { styles.btnStyles }
      />
    ```
---
## **Posicionaremos el boton a un lado de nuestro componente**

Para posicionar el componente ```<Button />``` alado del componente ```<InputText />``` , vamos a envolverlos con un componente ```<View />``` y vamos a darle estilos a dicho contenedor.

  ```js
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer } >
        <TextInput
          onChangeText = { this._placeNameChangeHandler.bind(this) }
          placeholder  = "Asombrosos lugares..."
          value        = { this.state.placeName }
          style        = { styles.textInputStyles }
        />
        <Button
          title   = "Add"
          onPress = { this._onBotonPress.bind(this) }
          style   = { styles.btnStyles }
        />
      </View>
    </View>
  ```

Nuestros **estilos** quedarian asi:
  ```css
    const styles = StyleSheet.create({
      mainContainer: {
        flex           : 1, /* Toma todo el espacio vertical disponible para ti */
        flexDirection  : 'column', /* Establece el eje principal (Eje Y) y la direccion de sus hijos sera de arriba hacia abajo  */
        justifyContent : 'flex-start', /* coloca a tus hijos al inicio del eje principal (Eje Y)  */
        alignItems     : 'center', /* Posicionate en el centro del eje perpendicular (Eje X) al principal (Eje Y) */
        paddingTop     : 25,  /* Le damos padding para alejar nuestro componente del top  */
        backgroundColor: 'whitesmoke',
      },
      inputContainer: {
        width          : '100%',
        flexDirection  : 'row',
        justifyContent : 'space-between',
        alignItems     : 'center',
        backgroundColor: 'silver',
      },
      textInputStyles: {
        width    : '70%',
        color    : 'teal',
        textAlign: 'center',
      },
      btnStyles:{
        width: '30%',
      }
    });
  ```

[Guia Oficial - Botones]:(https://facebook.github.io/react-native/docs/button.html)

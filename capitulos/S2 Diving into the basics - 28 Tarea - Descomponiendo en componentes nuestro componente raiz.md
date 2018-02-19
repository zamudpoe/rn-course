# Seccion 2 - **Diving into the basics**
## **28 TAREA** Descomponiendo nuestro componente en mas componentes

Vamos a crear dos componentes separados:

* Uno para la vista con el estilo **```inputContainer```** y lo llamaremos **```<PlaceInput />```**

  Recibira por propiedad el metodo **PlaceAddedHandler**, y por parametro recibira el valor para actualizar estado **placeName** , el cual lo manejaremos dentro de este nuevo componente por lo tanto lo eliminaremos del componente raiz **```App.js```**

    ```js
      state = {
        placeName: '', /* Este estado lo controlaremos desde el componente <PlaceInput /> por lo tanto ya no lo ocupamos en el componente raiz App.js */
        places: []
      }
    ```

  Nos quedara el estado del **componente raiz ```App.js```** asi:
   ```js
      state = {
        places: []
      }
    ```

* Otro para la vista con el estilo **```listContainer```** y lo llamaremos **```<PlaceList />```**, con este componente contralaremos la lista.
    > **Nota:** Para este ultimo vamos a ocupar importar un componente de react-native para manejar listas.

**Cual es el objetivo?:** Tener un componente raiz mas ordenado y amigable a la vista, nos deberar quedar algo asi:

````js
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    padding        : 26,
    backgroundColor: "#fff",
    alignItems     : "center",
    justifyContent: "flex-start"
  }
});
````

Empezaremos por construir por separado cada uno de los componentes **PlaceInput, PlaceList**

Vamonos al siguiente capitulo:

---
**ERRORES :**

> **FAILURE:** Build failed with an exception.

> What went wrong: ```Could not determine java version from '9.0.1'.```

**SOLUCION:**

  ```unix
  export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
  printenv JAVA_HOME
  ```

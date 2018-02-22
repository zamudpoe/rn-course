# Seccion 2 - **Diving into the basics**
## **32 Rendering Lists Correctly**

## ¿Que necesitamos para un mejor performance en nuestra App a la hora de reenderizar listas en el viewport?

Lo que necesitamos es que solo sean considerados los **items** que estan dentro del viewport y los que estan fuera de el no sean considerados dinamicamente en la memoria, logrando asi un mejor manejo de la memoria en el dispositivo por lo tanto un mejor performance en dispositivos lentos y por supuesto que genial en los de ultima generacion!.

> Basicamente renderizar lo que podamos ver y ignorar los que van quedando fuera de la **parte superior** e **inferior** del **viewport** de nuestro dispositivo!

React Native tiene un componente Nativo que hace exactamente este trabajo **"Reenderizar Listas Dinamicas"** y se llama **```<FlatList />```**

---
## Implementando el componente Nativo de React Native **```<FlatList />```** en nuestra App.

En nuestro archivo **```PlaceList.js```**

1. Eliminamos la importacion de **```<ScrollView />```**  e importamos **```<FlatList />```**
    ```js
    import { StyleSheet, FlatList } from 'react-native';
    ```

1. Consultamos la documentacion oficial
    * [Documentacion oficial del Componente FlatList]
    * [Using List Views]

1. Remplazamos el componente **```<ScrollView />```** por **```<FlatList />```**
    > **Observacion:** Como no vamos a usar ya la constante **```placesOuput```** la eliminamos de nuestro componente **```FlatList```** y tambien eliminamos la carga manual de la constante **```placesOuput```** y  solo dejamos los estilos.

    ```js
    return (<FlatList style={ styles.listContainer } >  </FlatList>)
    ```

---
## Configurando el componente nativo **```<FlatList />```**

Ahora toca configurar nuestro componente **```<FlatList />```**  y para esto nos vamos a la  [Documentacion oficial del Componente FlatList] y estudiamos como funciona y cual es la configuracion minima

### **Configuracion minima**
  ```js
  <FlatList
    data={[{key: 'a'}, {key: 'b'}]}
    renderItem={({item}) => <Text>{item.key}</Text>}
  />
  ```
Aqui observamos que el atributo **data** lo inflamos ó recibe un arreglo de objetos , despues lo vamos desinflando ó recorriendo cada uno de sus registros por medio de la **```funcion renderItem```** la cual nos permite darle manipularlo con el nombre **```item```** al objeto que encapsula lo configurado por **```data```**

En nuestro caso le daremos como nmobre **```info```** al objeto que tiene el arreglo de objetos, y dentro de sus objetos , el componente **```FlatList```** tiene ya de manera fija el objeto **```item```** que es donde estara encapsulado nuestro **```ESTADO PLACES```** ,

Asi que si queremos llegar al valor ```value``` de nuestro **```Estado Places```** podremos hacerlo de la siguiente forma:

```js
info.item.value
```

* **info :** ya que asi le daremos de nombre al objeto que vamos sacando de **```data```** en la **```funcion renderItem```**
* **item :** es el nombre fijo que usa **```<FlatList />```** para nombrar el arreglo de objetos que le pasamos a **```data```**, que en nuestro caso es el **```estado places```**
* **value :** es ya la propiedad de nuestro **Estado places** , podria ser **key** o cualquier otra que tenga nuestro estado.

---
## **BORRANDO** UN ITEM DE LA LISTA DE ELEMENTOS

A estas alturas ya nuestra App ya tiene un  **```estado places```** poblado de registros y deseamos eliminarle elementos **'items'** de su lista de elementos. esto lo haremos desde el componente Raiz **```App.js```**

1. En **```<PlaceList />```**  ya no pasaremos el parametro **```ìdx```** que veniamos pasando ```onItemPressed = { () => props.onItemDeleted(idx) }``` ya que ahora vamos a acceder al elemento que la funcion renderItem nos entrega del data que recibe por configuracion.

    La funcion renderItem quedara asi:

    ```js
    renderItem={(info) => (
        <ListItem
          placeName     = { info.item.value }
          onItemPressed = { () => props.onItemDeleted(info.item.key) }
          />
      )}
    ```

1. En **```App.js```** Actualizamos nuestra funcion handler ```_onPlaceDeletedHandler``` para que al recibir la key del elemento selecionado y por medio del metodo javascript nos regrese el nuevo array de objetos que pasaron la prueba del a funcion, dicha prueba sera que su key no sean igual al key pasado por parametro... resultando un nuevo array de objetos o un **nuevo Estado** sin el elemento pasado por parametro por medio de su key.

    ```js
    _onPlaceDeletedHandler = key  => {
      this.setState(prevState => {
        return {
          places: prevState.places.filter(place => {
            return place.key !== key
          })
        }
      }, console.log('\n\n%cEliminando el elemento %s\n', 'color: tomato; font-weight: bold;' , key))
    }
    ```

1. Listo!!!, a probar la app ya debe de eliminar los elementos como normalmente lo veniamos realizando!..


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

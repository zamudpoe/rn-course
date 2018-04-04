# Seccion 3 - Using Redux With React Native
## **41. A Brief Redux Refresher**

**[Redux]** se trata de manejar en **Un solo lugar para el estado de nuestra Aplicacion**. o lo que es lo mismo un **Estado Centralizado! "Central Store"**

* **```Componentes```** desean manipular el estado de la aplicacion, pero solo la parte que tiene que ver con ellos.
* **```dispatches```:** Despachan una accion
* **```Action```:** Anuncian al reductor la intencion de mutar el estado por parte del componente.
* **```Reducer```:** El **Reductor** es el unico encargado de **modificar el estado**. y lo hace a traves de las acciones que recive como tambien el estado actualizado por parte de los componentes a traves de **```dispatch```**,
  > Pueden ser multiples reductores combinados.
* **```Central Store```** un solo lugar para todo el Estado de la Aplicacion.

> para conocer mas podemos usar **Redux** con **React**, o con cualquier otra libreria de vista,como lo es **React Native**

Documentacion oficial de **Redux** : **[Redux]**

## En el proximo capitulo aprenderemos como ```conectar Redux``` a nuestra ```Aplicacion React Native```

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

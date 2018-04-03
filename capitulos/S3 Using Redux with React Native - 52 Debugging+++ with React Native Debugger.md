# Seccion 4 - Debugging React Native Apps
## **Clase 52 :**  Debugging+++ with react Native Debugger

Bueno ya hemos aprendido como mandar mensajes a la consola del desarrollador y como usar los breakpoints, ahora vamos a aprender a usar el inspector pero de una manera mas profesional gracias al uso de la libreria de terceros **```react-native-debugger```** que nos dara capacidades avanzadas de depuracion.

---
## Instalando **```react-native-debugger```**

Nos vamos a https://github.com/jhen0409/react-native-debugger/releases y buscamos nuestro instalador , en mi caso tengo Macbook asi que escojo la version mas actual al momento que estoy realizando esta documentacion que es **``rn-debugger-macos-x64.zip``**

Despues lo descomprimimos y ejecutamos la aplicacion **``React Native Debugger.app``** y nos abrira dicha aplicacion

Una vez que tenemos abierta la aplicacion  **``React Native Debugger.app``** nos vamos a la seccion de la izquierda y vamos expandiendo el arbol de HTML hasta llegar a

```HTML
<Connect(App)>
  <App>
    <View ...  >  <--- y aqui escogemos los estilo para modificarlos y veremos como se actualiza nuestra app de forma automatica. hagamos la prueba cambienmos el color de fondo por uno llamativo como rojo.
  </App>
</Connect(App)>
```

Podemos agregarle incluso nuevos estilos al vuelo asi de esta manera podemos probar estilos desde el depurador de React Native, y ya que estemos seguros podemos implementarlos permanentemente en la seccion de estilos de sus archivo correspondiente

Tambien podremos ver el **Estado** de nuestra aplicacion , por ejemplo cuando agreguemos un nuevo lugar este se vera reflejado en el estado de la aplicacioin en el depurador React Native, pero eso **``ahora no es posible por que el store de Redux no esta conectado a DevTools aun!``** , en un momento veremos como hacer esto!...

Ahora podemos ver nuestro estado 'places' como props, si miramos la seccion de props ahi apreciaremos el estado!.

## En el proximo capitulo aprenderemos como conectar nuestra **Store de Redux** con el **depurador de React Native**.


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

# Seccion 4 - Debugging React Native Apps
## **Clase 51 :**  Debugging with Breakpoints


---
## **``Debug JS Remotely``**

Habilitamos la opcion **``Debug JS Remotely``** y en nuestro codigo en ```App.js``` agregamos un console.log

```js
  _placeAddedHandler = placeName => {
    console.log("%cAgregando a: %s", 'color: teal;',placeName)
    this.props.onAddPlace(placeName)
  }
```
Despues nos vamos al navegador ``http://localhost:8081/debugger-ui/`` y abrimos las herramientas de desarrollador en Chrome ``⌘⌥I``   y en nuestra aplicacion agregamos un nuevo lugar y veremos nuestro mensaje reflejado en la consola del desarrollador!.

EUREKAAAAA HEMOS APRENDIDO COMO MANDAR MENSAJES A LA CONSOLA DEL DESARROLLADOR!.

---
BREAKPOINTS

Podmos agregar breakpoint directamente en la consola del desarrollador en **"Sources"** escogemos el script que deseamos depurar , en nuestro caso escogemos ``App.js`` y le agregamos un breakpoint solo con darle click del lado isquierdo donde estan las lineas de codigo y cuando usemos la aplicacion se detendra donde hemos fijado nuestro breakpoint.

Fijemos un breakpoint justo donde tenemos la instruccion ``console.log`` y evaluemos la variable ``placeName`` y podremos ver el valor que trae en ese momento

```js
  _placeAddedHandler = placeName => {
>>    console.log("%cAgregando a: %s", 'color: teal;',placeName)
    this.props.onAddPlace(placeName)
  }
```

Que tal nos serviria hacer uso de librerias de terceros para la depuracion en React native ?... Aprenderemos esto en nuestro proximo capitulo!.


---
## Finding & Fixing Errors

Bien hasta ahora no hemos depurado nuestra aplicacion React Native, es decir localizar y reparar fallas de nuestra Aplicacioin React Native,

las fallas pueden ser:

* Errores de sintaxis ("La mayoria de las veces es el mas comun")
* Errores de falta de librerias
* Errores de conflictos de librerias
* etc....

Para saber exactamente que es lo que necesitamos reparar , vamos a ocupar depurar nuestro codigo al mismo tiempo vamos desarrollandolo!.

Tambien vamos a querer ver los valores que traemos de nuestro ***MODELO*** o base de datos ,o incluso valores de depuracion que normalmente vemos en la consola de desarrollador y que nos sirvan como migas de pana para realizar nuestrass correcciones y afinacionesa a nuestra React Native App, todo esto lo podremos realizar con una herramienta

### **Que veremos en este modulo?**


* Uso de **```console.log ()```** incluso sin el uso del navegador
* Mejores capacidades de depuracion.
* **```Debuggin Redux```**, esencialmente conectaremos Redux con dev Tools

Bueno manos a la obra vamos a adentrarnos en ello y ver como podemos depurar nuestra aplicacion React Native.

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

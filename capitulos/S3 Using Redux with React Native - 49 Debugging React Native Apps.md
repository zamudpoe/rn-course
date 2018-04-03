# Seccion 4 - Debugging React Native Apps
## **Clase 49:**  Module Introduction
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

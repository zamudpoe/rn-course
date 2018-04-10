# Seccion 5 - Vinculando & Usando Librerias de 3ros
## **Clase 59 :** Vinculando Librerias en iOS
---

Documentacion Oficial : [Linking Libraries On iOS]


---
## Manual linking

* **Paso 1 :** Si la libreria tiene codigo nativo, debe tener un archivo llamado (para nuestra libreria React Native Vector Icons es RNVectorIcons.xcodeproj) **```RNVectorIcons.xcodeproj```** dentro de su folder. **Arrastra este archivo a tu proyecto en XCode (Usualmente bajo la carpeta ``Libraries`` en XCode)**

* **Paso 2 :** En Xcode

  1. haz Click en tu proyecto principal (aquel que esta a la izquierda y representa todo tu proyecto) ,
  1. selecciona **``Build Phases``**
  1. Arrastra la libreria estatica de la carpeta **``Products``** dentro de la carpeta **``Libraries``** de la libreria que estas importando a **``Link Binary With Libraries``**
      > **NOTA :** tambien puedes dar click en **Add Items** en la seccion **``Copy Bundle Resources (X Items)``**

* **Paso 3 :** No cada libreria ocupa este paso.

Not every library will need this step, what you need to consider is:

Do I need to know the contents of the library at compile time?

What that means is, are you using this library on the native side or only in JavaScript? If you are only using it in JavaScript, you are good to go!

If you do need to call it from native, then we need to know the library's headers. To achieve that you have to go to your project's file, select Build Settings and search for Header Search Paths. There you should include the path to your library. (This documentation used to recommend using recursive, but this is no longer recommended, as it can cause subtle build failures, especially with CocoaPods.)
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
[Redux DevTools Integration]:(https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md)
[React Native Debugger]:(https://github.com/jhen0409/react-native-debugger)
[More about Debugging]: (https://facebook.github.io/react-native/docs/debugging.html)
[React Native Vector Icons]:(https://github.com/oblador/react-native-vector-icons)

[Entypo]:(http://entypo.com/)
[EvilIcons]:(http://evil-icons.io/)
[FontAwesome]:(https://fontawesome.com/icons)
[Feather]:(http://feathericons.com/)
[Foundation]:(https://zurb.com/playground/foundation-icon-fonts-3)
[Ionicons]:(https://ionicframework.com/docs/ionicons/)
[MaterialIcons]:(https://material.io/icons/)
[MaterialCommunityIcons]:(https://materialdesignicons.com/)
[Octicons]:(https://octicons.github.com/)
[Zocial]:(http://zocial.smcllns.com/)
[SimpleLineIcons]:(http://simplelineicons.com/)
[Linking Libraries On iOS]:(http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)


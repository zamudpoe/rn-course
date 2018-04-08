# Seccion 5 - Vinculando & Usando Librerias de 3ros
## **Clase 57 :** Instalando Librerias
---
### Libreria : **``react-native-vector-icons``** nos ayuda a instalar Iconos Vectoriales en nuestra App.

  > **Perfecto para** botones, logos y nav/tab bars, Facil de expander, estilos e integrar en tu proyecto.

**Documentacion oficial :** [React Native Vector Icons]

---
## INSTALACIÓN

1. En la terminal: ``npm install react-native-vector-icons --save``

1. Para cada plataforma **(iOS/Android/Windows)** que planees usar, sigue una de las opciones para la plataforma correspondiente.

---
## Conectar la libreria a nuestra **React  Native App**

Despues que instalamos la libreria ```react-native-vector-icons```, necesitaremos realizar algunas cosas en los proyectos de **iOS y Android** y el código para conectar esta libreria a nuestra aplicacion Nativa.

  > **NOTA:** Esta librearia a diferencia de la libreria redux no solo corre con javascript, necesita correr algo de codigo nativo.


---
### Conjunto de Iconos
Este es el conjunto de recursos eniconos que tenemos a nuestra disposicion con la libreria react-native-vector-icons.

* **[Entypo]** by Daniel Bruce (411 icons)
* **[EvilIcons]** by Alexander Madyankin & Roman Shamin (v1.8.0, 70 icons)
* **[Feather]** by Cole Bemis & Contributors (v4.7.0, 266 icons)
* **[FontAwesome]** by Dave Gandy (v4.7.0, 675 icons)
* **[Foundation]** by ZURB, Inc. (v3.0, 283 icons)
* **[Ionicons]** by Ben Sperry (v3.0.0, 859 icons)
* **[MaterialIcons]** by Google, Inc. (v3.0.1, 932 icons)
* **[MaterialCommunityIcons]** by MaterialDesignIcons.com (v2.2.43, 2244 icons)
* **[Octicons]** by Github, Inc. (v7.2.0, 176 icons)
* **[Zocial]** by Sam Collins (v1.0, 100 icons)
* **[SimpleLineIcons]** by Sabbir & Contributors (v2.4.1, 189 icons)

De todo el conjunto nosotros instalaremos: [Ionicons]

---
**iOS**

**Option: Manually**
Si tu deseas usar cualquiera de los iconos , necesitaras agregar la fuente del icono a tu proyecto XCode. Solo sigue estos pasos:

* Busca por ``node_modules/react-native-vector-icons`` y arrastras el folder: **``Fonts``** (o solo la fuente que desees o necesites) A tu proyecto en  Xcode. **Asegurate que tu aplicacion esta checkeada bajo  "Add to targets" y que "Create groups" esta checado si tu agregaste el foldee entero**.

* Edita **``Info.plist``** y agrega una propiedad llamada **``Fonts provided by application``** (ó ``UIAppFonts``  if Xcode won't autocomplete/not using Xcode) y escribir en los archivos que agregaste. parecera algo similar a:

> *Note :* Necesitaras recompilar tu proyecto despues de agregar nuevas fuentes, tambien asegurarse que ellos aparezcan bajo **Copy Bundle Resources** en **Build Phases**. [mas informacion de como hacerlo si esta disponible en la documentacion de React Native]


La forma manual es la mejor forma de instalar los iconos ya que la automatica falla.


En el siguiente capitulo veremos como se realiza todo lo explicado en este capitulo!.

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
[mas informacion de como hacerlo si esta disponible en la documentacion de React Native]:(http://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)


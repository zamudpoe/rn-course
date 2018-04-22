# Seccion 6 - Navigation in React Native Apps

## **Clase 71:** Adding Icons To Tabs
---

Agregaremos iconos a la aplicacion, ya hemos agregado iconos de Ionicons recuerdas?...

Echemos un vistado a la documentacion oficial:  [React Native Navigation-StartTabBasedAppParams]

## startTabBasedApp(params)
Cambia tu ``App Raiz`` en una app basada en muchas pestañas (usualmente 2-5), un patron muy comun en iOS (como Facebook, o la aplicacion de contactos de iOS). Cada pestaña tiene su propia pila de navegacion con una ```barra de navegacion nativa```

```js
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One', // tab label as appears under the icon in iOS (optional)
        screen: 'example.FirstTabScreen', // unique ID registered with Navigation.registerScreen
        icon: require('../img/one.png'), // local image asset for the tab icon unselected state (optional on iOS)
        selectedIcon: require('../img/one_selected.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
        iconInsets: { // add this to change icon position (optional, iOS only).
          top: 6, // optional, default is 0.
          left: 0, // optional, default is 0.
          bottom: -6, // optional, default is 0.
          right: 0 // optional, default is 0.
        },
        title: 'Screen One', // title of the screen as appears in the nav bar (optional)
        titleImage: require('../img/titleImage.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
        navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
        navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
      },
      {
        label: 'Two',
        screen: 'example.SecondTabScreen',
        icon: require('../img/two.png'),
        selectedIcon: require('../img/two_selected.png'),
        title: 'Screen Two'
      }
    ],
    tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
      tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
      tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
      tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
      initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
    },
    appStyle: {
      orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
      bottomTabBadgeTextColor: 'red', // Optional, change badge text color. Android only
      bottomTabBadgeBackgroundColor: 'green', // Optional, change badge background color. Android only
      backButtonImage: require('./pathToImage.png') // Change the back button default arrow image with provided image. iOS only
      hideBackButtonTitle: true/false // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
    },
    drawer: { // optional, add this if you want a side menu drawer in your app
      left: { // optional, define if you want a drawer from the left
        screen: 'example.FirstSideMenu', // unique ID registered with Navigation.registerScreen
        passProps: {} // simple serializable object that will pass as props to all top screens (optional),
        fixedWidth: 500, // a fixed width you want your left drawer to have (optional)
      },
      right: { // optional, define if you want a drawer from the right
        screen: 'example.SecondSideMenu', // unique ID registered with Navigation.registerScreen
        passProps: {} // simple serializable object that will pass as props to all top screens (optional)
        fixedWidth: 500, // a fixed width you want your right drawer to have (optional)
      },
      style: { // ( iOS only )
        drawerShadow: true, // optional, add this if you want a side menu drawer shadow
        contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
        leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
        rightDrawerWidth: 50, // optional, add this if you want a define right drawer width (50=percent)
        shouldStretchDrawer: true // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
      },
      type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
      animationType: 'door', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
      // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
      disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
    },
    passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
  });
```

Como podemos apreciar el uso de iconos para iOS es opcional pero no para Android.

  ```
  icon: require('../img/one.png'),
  // local image asset for the tab icon unselected state (optional on iOS
  ```

Para nuestro caso no vamos a importar asi nuestros iconos, vamos a hacer uso de promesas para que cuando tengamos los iconos la aplicacion se reenderice sin problema. Asi que nuestro codigo de **``startMainTabs.js``** quedara asi ya con promesas.

La libreria tiene un metodo helper ``getImageSource`` que nos permite obtener los iconos ``Ionicons`` , dicho helper lo usaremos en un arreglo de promesas , con el metodo ``Promise.all`` el cual nos dara su resultado en un objeto que llamaremos ``sources`` el cual para el primer icono ``sources[0]``
y para el segundo ``sources[1]``

Para conocer que iconos tenemos para elejir de la libreria Ionicons podemos consultar la documentacion : [Ionicons] y para conocer la instalacion y documentacion de la libreria javascript para la integracino de iconos : [React Native Vector Icons]

```js
import { Navigation } from 'react-native-navigation'

/* Importamos el conjunto de iconos de Ionicons en Icon */
import Icon from '../../../node_modules/react-native-vector-icons/Ionicons'

const startTabs = () => {
  Promise.all([
    /* Obtenmos nuestros iconos de Ionicons */
    Icon.getImageSource("md-map", size = 30) ,
    Icon.getImageSource("md-share", size = 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label : "Find Place",
          title : "Find Place",
          icon  : sources[0]
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label : "Share Place",
          title : "Share Place",
          icon  : sources[1]
        }
      ]
    })
  })

}

export default startTabs
```

Ok asi es como agregamos iconos a nuestras pestañas "tabs"


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
[Navigating Between Screens]:(http://facebook.github.io/react-native/docs/navigation.html)
[React Native Navigation]:(https://github.com/wix/react-native-navigation)
[iOS Installation]:(https://wix.github.io/react-native-navigation/#/installation-ios)
[React Native Navigation-Top Level API]:(https://wix.github.io/react-native-navigation/#/top-level-api)
[React Native Navigation-StartTabBasedAppParams]:(https://wix.github.io/react-native-navigation/#/top-level-api?id=starttabbasedappparams)
[React Native Vector Icons]:(https://github.com/oblador/react-native-vector-icons)
[Ionicons]:(https://ionicframework.com/docs/ionicons/)

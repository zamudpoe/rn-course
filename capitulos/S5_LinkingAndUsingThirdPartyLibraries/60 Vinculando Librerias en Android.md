# Seccion 5 - Vinculando & Usando Librerias de 3ros
## **Clase 58 :** Vinculando Librerias en Android
---

## **Android**
## **Option: With Gradle (recommended)**

This method has the advantage of fonts being copied from this module at build time so that the fonts and JS are always in sync, making upgrades painless.

* Edit ``android/app/build.gradle`` ( NOT ``android/build.gradle`` ) and add the following:

  ``apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"``

To customize the files being copied, add the following instead:

```js
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

## Option: Manually
* Copy the contents in the Fonts folder to ``android/app/src/main/assets/fonts`` (note lowercase font folder).

Integrating library for getImageSource and ToolbarAndroid support
These steps are optional and only needed if you want to use the ``Icon.getImageSource`` function or using custom icons in the Icon.ToolbarAndroid component.

* Edit ``android/settings.gradle`` to look like this (without the +):

  ```js
  rootProject.name = 'MyApp'

  include ':app'

  + include ':react-native-vector-icons'
  + project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
  ```

* Edit ``android/app/build.gradle`` (note: **app** folder) to look like this:

  ```js
  apply plugin: 'com.android.application'

  android {
    ...
  }

  dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"  // From node_modules
  + compile project(':react-native-vector-icons')
  }
  ```

* Edit your MainApplication.java (deep in android/app/src/main/java/...) to look like this (note two places to edit):
  ```js
  package com.myapp;

  + import com.oblador.vectoricons.VectorIconsPackage;

  ....

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage()
  +   , new VectorIconsPackage()
      );
    }

  }
  ```

> **Note:** If you're using React Native (Android) <= 0.17, follow this instructions






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


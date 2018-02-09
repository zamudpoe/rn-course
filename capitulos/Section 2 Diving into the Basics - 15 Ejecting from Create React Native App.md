# Crear proyecto React Native Puro (Ejected)

Ya que deseamos una "**aplicacion React Native Pura!**" , **necesitamos expulsarla!**.

Al expulsarla nosotros vamos a hacer **uso de los emuladores** para cada dispositivo.
  * Android Studio (Android)
  * XCode (iOS) ,

Por medio de un **servidor javascript** generado por el comando react-native obtendremos lo siguiente:

  * Actualizara los Pressets de Babel por: babel-preset-react-native-stage-0/decorator-support
  * Se actualizara nuestro package.json
  * Carpetas:  android y ios
  * Entry Point : index.js

Ahora cada que realicemos algun cambio en los archivos que controle el Entry point
React Native actualizara los archivos para **Ios** y **Android** para que los simuladores
reflejen dichos cambios en sus dispositivos emulados

    GENIAL!!!!!!!!
---
## Espulsando nuestra App
**Expulsar la App creada** con Create React Native ,
  ```npm run eject```

  Nos dara opciones y en la primera escogemos

  * ? How would you like to eject from create-react-native-app?
    > *Escogemos* **React Native: I'd like a regular React Native project.**
  * ? What should your app appear as on a user's home screen?
    > Que texto deseamos que aparezca cerca del icono en la pantalla inicial del usuario , le pondremos "**Awesome Places**"
  * ? What should your Android Studio and Xcode projects be called? (rncourse)
    > Como llamaremos a nuestro proyecto en Android Studio y en XCode ? usaremos **rncourse**

Listo se realizara la configuracion de nuestra aplicacion React Native Pura.

Writing your selections to app.json...
  > Wrote to app.json, please update it manually in the future.

Scanning folders for symlinks in /Users/usuario/Documents/PRUEBAS/udemy/ThePracticalGuide/rn-course/node_modules (15ms)
Generating the iOS folder.
Generating the Android folder.
Successfully copied template native code.
  > Babel preset changed to `babel-preset-react-native-stage-0/decorator-support`.

Updating your yarn scripts in package.json...
  > Your package.json is up to date!

Adding entry point...
  > Added new entry points!

Note that using ```yarn start``` will now require you to run Xcode and/or
Android Studio to build the native code for your project.
Removing node_modules...
Installing packages with yarn...
yarn add v1.3.2

    [1/4] 🔍  Resolving packages...

    [2/4] 🚚  Fetching packages...

    [3/4] 🔗  Linking dependencies...

    [4/4] 📃  Building fresh packages...

    success Saved lockfile.

    success Saved 11 new dependencies.

    ├─ babel-plugin-react-transform@2.0.2

    ├─ babel-plugin-syntax-class-constructor-call@6.18.0

    ├─ babel-plugin-syntax-do-expressions@6.13.0

    ├─ babel-plugin-syntax-function-bind@6.13.0

    ├─ babel-plugin-transform-class-constructor-call@6.24.1

    ├─ babel-plugin-transform-do-expressions@6.22.0

    ├─ babel-plugin-transform-export-extensions@6.22.0

    ├─ babel-plugin-transform-function-bind@6.22.0

    ├─ babel-preset-react-native-stage-0@1.0.1

    ├─ babel-preset-react-native@1.9.2

    └─ jest-react-native@18.0.0

✨  Done in 8.87s.
Ejected successfully!
Please consider letting us know why you ejected in this survey:
  https://goo.gl/forms/iD6pl218r7fn9N0d2







# Seccion 3 - Using Redux With React Native
## **42. Installing Redux and Creating a Basic Setup**

### Instalaremos & configuraremos Redux en nuestra Aplicacion Demo


Librerias de 3ros , normalmente librerias Javascript , instalaremos librerias que podriamos agregar a cualquier proyecto JAvascript por que nuestro codigo Javascript va a ser ejecutado en nuestro dispositivo Nativo y es un truco extra.

Usaremos **```NPM```** para instalar nuestras librerias javascript y vamos a instalar las librerias:

* **redux** : la libreria para el manejo del estado en un solo central store
* **react-redux** : la ```libreria redux``` por si sola no sabe nada de ```react``` o ```react-native``` , por eso necesitamos esta libreria que no le importa si nuestra App es una App Web o App Nativa.

Instalamos estas dos librerias

```code
npm install --save redux react-redux
```

Y con esto podremos agregar Redux a nuestra App y lo usaremos de la misma forma como normalmente se usa en aplicaciones Web u otro lado.

Nuestro manifiesto ```package.json```quedara de la siguiente forma:

```json
{
  "name": "rn-course",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "babel-preset-react-native-stage-0": "^1.0.1",
    "jest-react-native": "^18.0.0",
    "react-test-renderer": "16.2.0"
  },
  "scripts": {
    "start": "react-native start",
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "test": "node node_modules/jest/bin/jest.js"
  },
  "jest": {
    "preset": "react-native"
  },
  "dependencies": {
    "react": "16.2.0",
    "react-devtools": "^3.1.0",
    "react-native": "0.52.0",
    "react-redux": "^5.0.7",
    "redux": "^3.7.2",
    "to": "^0.2.9",
    "update": "^0.7.4"
  }
}
```

---
### **Configurando el Ambiente Redux.**

### Estructure de carpetas
En nuestro raiz crearemos la siguiente estructura de carpetas, para nuestros reductores y nuestras acciones.

```c++
.
`-- src
    |-- assets
    |-- componentes
    `-- store
        |-- actions
        `-- reducers
```

### Reductor principal o raiz "places.js"

Dentro de la carpeta ```/src/store/reducers``` creamos el archivo **```places.js```**

```c++
.
|-- App.js
|-- index.js
|-- package.json
`-- src
    |-- assets
    |   |-- beautiful-place.jpg
    |   `-- descarga.jpeg
    |-- componentes
    |   |-- ListItem.js
    |   |-- PlaceDetail.js
    |   |-- PlaceInput.js
    |   `-- PlaceList.js
    `-- store
        |-- actions
        `-- reducers
            `-- places.js
```

**```places.js```** controlara la logica de como se actualizara el **Estado de nuestra App**

El reductor es como una función y nosotros usaremos una funcion flecha aqui en nuestra nombrada funcion reductora.

Nuestro reductor base **```places.js```** quedara asi

```js
const initialState = {
  places       : [],
  selectedPlace: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export default reducer
```

Bueno hasta el momento hemos aprendido

* Instalar **```Redux``` & ```configurar Redux```** en nuestra **Aplicacion React Native**
* Crear y Configurar el reductor raiz **```places.js```**

Aun nos falta saber como crear y configurar las acciones que recibira nuestro reductor raiz!, eso lo veremos en nuestro proximo capitulo!.


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

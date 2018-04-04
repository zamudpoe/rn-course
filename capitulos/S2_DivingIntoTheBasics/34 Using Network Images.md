# Seccion 2 - **Diving into the basics**
## **34 Using Network Images**

## ¿ Como conseguimos imagenes de la WWW o algun EndPoint ?

Hasta ahora hemos usado imagenes hardcodeadas y desde nuestra carpeta de activos o estaticos ```./src/assets/```

  ```js
  .
  `-- src
      |-- assets
      `-- componentes
  ```

Ahora vamos a ver como consumir las imagenes desde un endpoint o desde la WWW, veamos como hacerlo:
---
## Consumiendo una estatico desde la web de forma **Hardcoded**

1. creamos una constante para almacenar la url de alguna imagen de nuestra eleccion de la web.

    ```js
    const urlImg = 'http://i.dailymail.co.uk/i/pix/2016/07/12/03/362CF66100000578-3685636-image-m-43_1468289000310.jpg'
    ```

1. En el componente Raiz **```App.js```** modificamos el handler **```_placeAddedHandler```** y le asignamos un objeto con la propiedad **```uri```** y le asigamos la constante qeu creamos **```urlImg```**

    ```js
      _placeAddedHandler = placeName => {
        this.setState(prevState => {
          return {
            places: prevState.places.concat({
              indice: Math.random(),
              name: placeName,
              // image: placeImage
              image: {
                uri: urlImg
              }
            })
          }
        }, console.log('%o', this.state))
      }
    ```
    > **Nota: ** Cuando obtenemos imagenes de la web o la red debemos especificarle por ```css``` un ancho y un alto!.

### LISTO debemos poder apreciar la imagen en nuestros simuladores.

## Para mayor estudio e informacion visitemos la guia oficial:
* [Recursos Estaticos : Imagenes]
* [Documentacion oficial del Componente Image]

# ¿Que te parece si tuvieramos un boton para eliminar por medio de un dialogo nuestros items?
## Esto lo veremos en el proximo capitulo!.... YEIIIII!!!


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

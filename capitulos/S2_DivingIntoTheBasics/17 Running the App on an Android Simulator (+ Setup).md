# 17. Running the App on an Android Simulator (+ Setup)

Como yo tengo una Macbook Pro y ya le instale XCode para el simulador de iOS , solamente necesito instalar Android Studio para el simulador de dispositivos Android.

Decargar [Adroid Studio]

## Instalacion de Android Studio
1. Descargamos [Adroid Studio]
1. Abrimos por primera vez [Adroid Studio] y lo configuramos por primera vez
  -. > **IMPORTANTE**: Seleccionamos **Android Virtual Device**

1. Continuamos con la instalacion dandole **Next hasta finalizar la instalacion.**
1. Nos aparecera un dialogo donde elejiremos : **Open and Existing Android Studio Project**
1. Dentro de nuestro proyecto **rn-course** buscamos y entramos a la carpeta **./android** y le damos al boton abrir para configurar nuestro ambiente Android.
1. recibiremos algunos errores de compilacion y en el area de mensajes nos dara la opcion  **Install Missing platform(s)and sync project** , las seleccionamos para que instalar archivos faltantes (**Aceptamos los acuedos de licencia**) y compile nuestro proyecto, hasta que no nos mande mas mensajes.

## Configurando Android Studio
1. Configurando: **Tools | SDK Manager**  aqui seleccionamos los paquetes de las plataformas que deseemos instalar,
1. **Tools | AVD** para configurar nuestro emulador android **API 27** ,le damos **Create Virtual Device**  escogemos **Phone** y **Pixel 2** y escogemos **API 27**
2. Le damos **Play** a nuestro **Pixel 2 API 27**
3. Dejamos mnuestro emulador levantado.

## Servidor Javascript

1. Abrimos una consola de terminal en la carpeta raiz de nuestro proyecto y ejecutamos : ```npm run android```
2. Esperamos que compile todo y nos muestre el emulador con el dispositivo Android configurado.
3. Listo si todo salio bien tendremos levantado nuestro emulador Android.

## Configuracion de emulador Android para depuracion

Con el emulador Android levantado , oprimimos las teclas ```CMD + M```

* **Reload (R + R) :** Recargar la App en el dispositivo
* **Debug JS Remotely:** Depurar en consola del navegador nuestro codigo JS
  * Con la aplicacion React Native DEbugger podemos realizar un debuggeo de alto rendimiento, de lo contrario React Native de manera nativa abre el navegador , solo accedemos a la consola del desarrollador del navegador y listo
* **Enable Live Reload:** Si deseamos ver nuestros cambios hechos en JS y CSS en directo de nuestro emulador esta es nuestra opcion
* **Enable Hot Reloading:** similar a la anterior pero con la opcion de que si manejamos estados con Redux lo veremos reflejado en nuestros componentes.



---
ERRORES :
  >FAILURE: Build failed with an exception.
  >* What went wrong:
  >Could not determine java version from '9.0.1'.

  > SOLUCION: ```export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"```


[Adroid Studio]:(https://developer.android.com/studio/index.html)

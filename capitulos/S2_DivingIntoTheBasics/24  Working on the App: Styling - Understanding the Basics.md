# Seccion 2 - Diving into the basics
## 24 Styling - Understanding the Basics

### Flexbox en React Native

En las aplicaciones **React Native** se usa un concepto llamado **Flexbox** o **Bloques Flexibles**, el cual es muy similar al sistema de Flexbox de CSS, pero en el dicho sistema usado en RN, el layout esta definido por dos ejes,

* El Eje X
* El Eje Y

## Conceptos de Flexbox en RN

### El concepto de "cajas flexibles"

__Lo que caracteriza un diseño flexible es su habilidad para alterar el ancho y alto de sus elementos para ajustarse lo mejor posible al espacio disponible en cualquier dispositivo__. Un **contenedor flexible** expande sus elementos para rellenar el espacio libre, o los comprime para evitar que rebasen el área prevista.

El algoritmo del modelo de diseño de "**cajas flexibles**" no parte de niguna dirección predeterminada, al contrario de lo que ocurre con el **modelo** "**bloque**", **que asume una disposición vertical de los elementos**, o lo que pasa con el **modelo** "**en línea**", **que asume una disposición horizontal**. Mientras que el modelo "bloque" funciona bien para páginas, se queda muy corto cuando se trata de aplicaciones en las que hay que tener en cuenta el cambio de orientación del dispositivo o los cambios de tamaño realizados por los gestos del usuario. El modelo de "**cajas flexibles**" es más apropiado para diseños de pequeña escala, mientras que el (emergente) modelo "**rejilla ó grid**" es adecuado para diseños de gran escala. Ambos son parte del gran esfuerzo que el "**CSS Working Group**" está realizando para proveer de mayor inteorperabilidad a las aplicaciones web con todo tipo de usuarios, distintos modos de escritura, y otras necesidades de flexibilidad.

### **Contenedor flexible** (Flex container)
**El elemento "padre" que contiene los elementos flexibles**. Un contenedor flexible se define usando los valores ```flex``` o ```inline-flex``` en la **propiedad ```display```**.
### **Elemento flexible** (Flex item)
**Cada hijo de un contenedor flex se convierte en un elemento flexible**. Si hay texto directamente incluido en el contenedor flexible, se envuelve automáticamente en un elemento flexible anónimo.

### **Ejes**
**Cada diseño de "caja flexible" sigue dos ejes**. El **eje principal** es el eje a lo largo del cual los elementos flexibles se suceden unos a otros. El **eje secundario ó eje de cruce** es el **eje perpendicular al eje principal**.

La **propiedad** ```flex-direction``` establece el eje principal.
La **propiedad** ```justify-content``` define cómo los elementos flexibles se disponen a lo largo del eje principal en la línea en curso.
La **propiedad** ```align-items``` define cómo los elementos flexibles se disponen a lo largo del eje secundario de la línea en curso.
La **propiedad** ```align-self``` define cómo cada elemento flexible se alinea respecto al eje secundario, y sustituye al valor por defecto establecido por align-items.

### **Direcciones**
**Los lados inicio principal/fin principal** (main start/main end) e **inicio secundario/fin secundario** (cross start/cross end) del **contenedor flexible** describen el origen y final del flujo de los elementos flexibles. Estos siguen los eje principal y secundario según el vector establecido por writing-mode (izquierda-a-derecha, derecha-a-izquierda, etc.).

La **propiedad** ```order``` asigna elementos a grupos ordinales y determina qué elementos aparecen primero.∫
La **propiedad** ```flex-flow``` property combina las propiedades ```flex-direction``` y ```flex-wrap``` para colocar los elementos flexibles.

### **Líneas**
Los **elementos flexibles** pueden disponerse en una sola o varias líneas de acuerdo con la propiedad ```flex-wrap```, que **controla la dirección del eje secundario y la dirección en la que las nuevas líneas se apilan**.

### **Dimensiones**
Los términos equivalentes a **"altura" y "anchura"** usados en los elementos flexibles son tamaño principal (**main size**) and tamaño secundario (**cross size**), que respectivamente siguen al eje principal y al eje secundario del contenedor flexible.

La **propiedades** ```min-height``` y ```min-width``` tienen un nuevo valor, auto que establece el tamaño mínimo de un elemento flexible.
La **propiedad** ```flex``` combina las propiedades ```flex-basis```, ```flex-grow```, y ```flex-shrink``` para establecer el grado de flexibilidad de los elementos flexibles.

Entonces :

* **Main Axis**: El eje principal hacia que direccion apunta (Vertical u Horizontal)?, la direccion esta definida por la **propiedad Flexbox** **```flexDirection```** que puede tener un valor **```column```** su **direccion sera de arriba hacia abajo**, y esto nos indicara qeu el eje principal es exactamente el **eje Y**



  ````css
  {
    flex          : 1 , /* flex-grow nos dice que tanto espacio ocupara el elemento, El elemento debera expandirse para ocupar el espacio disponible */
    flexDirection : 'column' , /* Con 'column' le decimos que el eje principal es el Y , con 'row' le decimos que el eje principal es X */
    justifyContent: 'flex-start' , /* Posicionate al inicio de tu Eje Principal */
    alignItems    : 'flex-start'   /* alignItems posiciona los elementos en el Eje de cruce , en este caso de izquieerda a Derecha del eje X. */
  }
  ````

* **Cross Axis**: El eje de cruce queda definido automaticamente cuando definimos el eje principal.


> **NOTA:** Recordemos siempre que **React Native** realmente **no soporta CSS**, lo que hace es que **emula propiedades CSS**, por lo menos algunas de ellas. como tambien la forma de usar las propiedades CSS , las cuales no se usan con el tipico guion medio que separa las palabras sino que se usa camel case y se elimina el guion medio obteniendo asi una sola palabra por ejemplo: ```justify-content``` se convierte en ```justifyContent```

---

Ya que hemos visto como funciona el concepto de cajas flexibles , vamos a dicho concepto en React Native para **posicionar** nuestro elemento **```TextInput```** en el **Top** , para lograr esto tendremos que trabajar en el **contenedor flexible** o **padre** (donde esta contenido nuestro elemento **TextInput**) de la siguiente manera:

  ```css
  const styles = StyleSheet.create({
    container: {
      flex           : 1,
      padding        : 30,
      backgroundColor: '#fff',
      alignItems     : 'center',
      justifyContent : 'flex-start',
    },
    textInput: {
      width      : 300 ,
      color      : 'tomato'
    }
  });
  ```




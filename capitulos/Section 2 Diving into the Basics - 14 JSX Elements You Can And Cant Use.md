# Elementos React vs React Native
En esta seccion solo se nos enseña que componentes son los equivalentes a los que usa React en la web

  **React** :  Usa elementos conocidos por el navegador como divs, inputs , span, etc

    <div></div>
    <input></input>
    ...

  **React Native**: Usa elementos que los smartphones conozcan!, los cuales son distintos a los de los navegadores web y son nativos de los dispositivos,

    <View></View>
    <TextInput></TextInput>

  Para usar los componentes nativos de React Native debemos importarlos
    ```import { StyleSheet, Text, View } from 'react-native';```

  Para usar los creados por nosotros tambien debemos importarlos
    ```import { MiBoton, MiTextInput } from './componentes';```


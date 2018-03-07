import React from 'react'
import { StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem'

const PlaceList = props => {

  return <FlatList
          style={ styles.listContainer }
          data={props.places} /* 'data' es un datasource tras bambalinas y noostros le asignamos el estado 'places' */
          /* keyExtractor={item => item.indice} */
          /*
            Recuerdemos que en App.js en el handler '_placeAddedHandler' actualizamos el estado 'places'

              _placeAddedHandler = placeName => {
                  this.setState(prevState => {
                    return {
                      places: prevState.places.concat({
                        key: Math.random(),
                        value: placeName
                      })
                    }
                  }, console.log('%o', this.state))
                }

            Y asi nuestra app tiene el ESTADO "places"

             places: {
                        key: Math.random(),
                        value: placeName
                      }

            La funcion RenderItem del componente FlatList renombra el objeto 'places' por 'item' y lo encapsula en el objeto 'info', info es extraido del data por cada elemento del data
              Nota: podemos darle nombre al objeto que recibe por parametro la funcion rendeerItem pero no podemos renombrar al objeto item.

          */
          renderItem={(info) => (
            <ListItem
              placeName     = { info.item.name }
              placeImage    = { info.item.image }
              onItemPressed = { () => props.onItemSelected(info.item.key) }
             />
          )}
         />

}

const styles = StyleSheet.create({
  listContainer: {
    width           : '100%',
    backgroundColor : 'white'  // '#eee',
  }
})

export default PlaceList

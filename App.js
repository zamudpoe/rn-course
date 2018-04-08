import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import PlaceInput from './src/componentes/PlaceInput'
import PlaceList from './src/componentes/PlaceList'
import PlaceDetail from './src/componentes/PlaceDetail'

/* Creadores de Acciones */
import { addPlace, deletePlace, selectPlace, deselectPlace } from "./src/store/actions/index"

const urlImg = 'https://media-cdn.tripadvisor.com/media/photo-s/09/58/8c/3f/playa-lancheros.jpg'

class App extends Component {
    _placeAddedHandler = placeName => {
        console.log("%cAgregando A: %c%s", 'color: teal;', 'color: tomato;', placeName)
        this.props.onAddPlace(placeName)
    }

    _placeDeletedHandler = () => {
        this.props.onDeletePlace()
    };

    _modalClosedHandler = () => {
        this.props.onDeselectPlace()
    };

    _onPlaceSelectedHandler = key => {
        this.props.onSelectPlace(key)
    };

    render() {
            return (
              <View style = { styles.mainContainer } >
                <Text style = { styles.textLabel } > 🗽Mis Lugares </Text>
                <PlaceDetail
                  selectedPlace = { this.props.selectedPlace }
                  onItemDeleted = { this._placeDeletedHandler }
                  onModalClosed = { this._modalClosedHandler }
                />
                <PlaceInput
                  onPlaceAdded = { this._placeAddedHandler }
                />
                <PlaceList
                  places = { this.props.places }
                  onItemSelected = { this._onPlaceSelectedHandler }
                />
              </View >
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        /* Toma todo el espacio vertical disponible para ti */
        padding: 25,
        /* Le damos padding para alejar nuestro componente del top  */
        flexDirection: 'column',
        /* Establece el eje principal (Eje Y) y la direccion de sus hijos sera de arriba hacia abajo  */
        justifyContent: 'flex-start',
        /* coloca a tus hijos al inicio del eje principal (Eje Y)  */
        alignItems: 'center',
        /* Posicionate en el centro del eje perpendicular (Eje X) al principal (Eje Y) */
        backgroundColor: 'whitesmoke',
    },
    textLabel: {
        color: 'teal',
        fontSize: 24,
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

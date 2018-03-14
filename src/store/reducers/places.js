import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

/*  State inicial   */
const initialState = {
  places       : [],
  selectedPlace: null,
}

/** si no recibimos el State usaremos el inicial */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ..state,
        places: state.places.concat({
          key  : Math.random(),
          name : action.placeName,
          image: {
            uri: 'https://media-cdn.tripadvisor.com/media/photo-s/09/58/8c/3f/playa-lancheros.jpg'
          }
        })
      }

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      }
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      }
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      }
    default:
      return state
  }
}

/** esportamos nuestro reductor raiz  */
export default reducer

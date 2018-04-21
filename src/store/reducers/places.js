import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

/*  State inicial   */
const initialState = {
    places: []
}

/** si no recibimos el State usaremos el inicial */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
          ...state,
          places: state.places.concat({
              key: Math.random(),
              name: action.placeName,
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
          })
      }

    default:
      return state
  }
}

/** esportamos nuestro reductor raiz  */
export default reducer

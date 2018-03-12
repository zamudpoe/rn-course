/*  State inicial   */
const initialState = {
  places       : [],
  selectedPlace: null,
}

/** si no recibimos el State usaremos el inicial */
const reducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

/** esportamos nuestro reductor raiz  */
export default reducer

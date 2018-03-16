import { createStore, combineReducers } from 'redux'
import placerReducer from './reducers/places'

const rootReducer = combineReducers({
  places: placerReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}
 export default configureStore

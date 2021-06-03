import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// desde el store siempre se llama al reducer
import pokeReducer from './pokeDucks'
import userReducer, {getUserActiveAction} from './userDucks'

const rootReducer = combineReducers({
  pokemons: pokeReducer, // aquí irá la lista de reducers
  user: userReducer,
})

// activamos la extension de chrome: redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
  getUserActiveAction()(store.dispatch)
  return store
}
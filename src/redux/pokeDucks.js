import axios from 'axios';
import { URLS } from '../utils/constants';
// constants
const initialData = {
  array: []
}

const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'

// reducer
export default function pokeReducer(state = initialData, action) {
  switch(action.type) {
    case GET_POKEMONS_SUCCESS:
      return {...state, array: action.payload}
    default:
      return state
  }
}

// actions
export const getPokemonsAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(URLS.pokemos)
    dispatch({
      type: GET_POKEMONS_SUCCESS,
      payload: res.data.results
    })
  } catch (error) {
    console.log(error)
  }
}
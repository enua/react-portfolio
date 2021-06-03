import axios from 'axios';
import { URLS } from '../utils/constants';
// constants
const initialData = {
  count: 0,
  next: null,
  previous: null,
  results: []
}

const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'

// reducer
export default function pokeReducer(state = initialData, action) {
  switch(action.type) {
    case GET_POKEMONS_SUCCESS:
      return {...state, ...action.payload}
    default:
      return state 
  }
}

// actions
export const getPokemonsAction = (url) => async (dispatch, getState) => {

  const urlParam = url ? url : URLS.pokemons
  
  try {
    const res = await axios.get(urlParam)
    dispatch({
      type: GET_POKEMONS_SUCCESS,
      payload: res.data
    })
    localStorage.setItem('pokemons', [])
  } catch (error) {
    console.log(error)
  }
}

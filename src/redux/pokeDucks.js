import axios from 'axios';
import { URLS } from '../utils/constants';
// constants
const initialData = {
  array: [],
  offset: 0,
  limit: 20
}

const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
const NEXT_GET_POKEMONS = 'NEXT_GET_POKEMONS'
const TEST_FETCH_PARAMS = 'TEST_FETCH_PARAMS'

// reducer
export default function pokeReducer(state = initialData, action) {
  switch(action.type) {
    case GET_POKEMONS_SUCCESS:
      return {...state, array: action.payload}
    case NEXT_GET_POKEMONS:
      return {...state, array: action.payload.array, offset: action.payload.offset }
    case TEST_FETCH_PARAMS:
      return {...state, array: action.payload.array, offset: action.payload.offset }
    default:
      return state
  }
}

// actions
export const getPokemonsAction = () => async (dispatch, getState) => {
  
  try {
    const res = await axios.get(`${URLS.pokemos}?offset=0&limit=20`)
    dispatch({
      type: GET_POKEMONS_SUCCESS,
      payload: res.data.results
    })
  } catch (error) {
    console.log(error)
  }
}

export const nextGetPokemonsAction = () => async (dispatch, getState) => {
  const { offset, limit } = getState().pokemons
  const nextPage = offset + limit
  
  try {
    const res = await axios.get(`${URLS.pokemos}?offset=${nextPage}&limit=20`)
    dispatch({
      type: NEXT_GET_POKEMONS,
      payload: {
        array: res.data.results,
        offset: nextPage
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const testFetchParams = (pagination) => async dispatch => {
  try {
    const res = await axios.get(`${URLS.pokemos}?offset=${pagination.offset}&limit=20`)
    dispatch({
      type: TEST_FETCH_PARAMS,
      payload: {
        array: res.data.results,
        offset: pagination.offset
      }
    })
  } catch (error) {
    console.log(error)
  }
}
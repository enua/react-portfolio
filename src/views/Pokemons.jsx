import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsAction, getOnePokemonAction } from '../redux/pokeDucks'
import Pokemon from './Pokemon'

const Pokemons = () => {
  // store
  const dispatch = useDispatch()
  const pokemons = useSelector(store => store.pokemons.results)
  const next = useSelector(store => store.pokemons.next)
  const prev = useSelector(store => store.pokemons.previous)

  const isDisabled = (value) => {
    switch(value){
      case 'load':
        return pokemons.length > 0
      case 'next':
        return next === null
      case 'prev':
        return prev === null
      default:
        return true
    }
  }

  return (
    <div className="container mt-2">
      <h3>Pokemons list</h3>
      <p> This is a protected route so you can only access here if you are logged in and google returns the ok</p>
      <div className="row">
        <div className="col-md-8">
          
          <div className="list-group mb-3">
            {
              pokemons.map((pokemon, index) => (
                <button
                  key={index}
                  className="list-group-item list-group-item-action"
                  onClick={() => dispatch(getOnePokemonAction(pokemon.url))}
                > { pokemon.name } </button>
              ))
            }
          </div>
          <nav aria-label="Page navigation example mt-3">
            <ul className="pagination">
              <li className="page-item">
                <button
                  disabled={ isDisabled('load') }
                  onClick={() => dispatch(getPokemonsAction())}
                  className="page-link btn btn-secondary"
                >Load Data </button>
              </li>
              <li className="page-item mx-2">
                <button
                  disabled={ isDisabled('prev') }
                  className="page-link btn btn-secondary"
                  onClick={() => dispatch(getPokemonsAction(prev))}
                >Previous</button>
              </li>
              <li className="page-item">
                <button
                  disabled={ isDisabled('next') }
                  className="page-link btn btn-secondary"
                  onClick={() => dispatch(getPokemonsAction(next))}
                >Next</button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-md-4">
          <Pokemon />
        </div>
      </div>
    </div>
  )
}

export default Pokemons

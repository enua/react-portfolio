import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsAction, nextGetPokemonsAction, testFetchParams } from '../redux/pokeDucks'

const Pokemons = () => {
  // store
  const dispatch = useDispatch()
  const pokemons = useSelector(store => store.pokemons.array)

  //app
  const selectedPokemon = (position) => { console.log(position)}

  return (
    <div className="container">
      <h3>Pokemons list</h3>
      <button onClick={() => dispatch(getPokemonsAction())}>get pokemons</button>
      <button onClick={() => dispatch(nextGetPokemonsAction())}>Next page</button>
      <button onClick={() => dispatch(testFetchParams({offset: 20}))}>TestParams</button>
      <div className="list-group mt-5">
        {
          pokemons.map((pokemon, index) => (
            <button
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => selectedPokemon(index)}
            > {pokemon.name} </button>
          ))
        }
        </div>
      </div>
  )
}

export default Pokemons

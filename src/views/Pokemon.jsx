import React from 'react'
import { useSelector } from 'react-redux'

const Pokemon = (props) => {

  const pokemon = useSelector(store => store.pokemons.onePokemon)

  return pokemon ? (
    <div className="card border">
      <img alt={pokemon.name} className="card-img-rop" src={pokemon.sprites.front_shiny}/>
      <div className="card-bod">
        <h5 className="card-title text-center">{pokemon.name}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"></li>
          <li class="list-group-item">weight: {pokemon.weight}</li>
          <li class="list-group-item">height: {pokemon.height}</li>
        </ul>
      </div>
    </div>
  ) : ''
}

export default Pokemon

import React from "react";

const PokemonDetails = ({ currPokemon }) => {

  const renderEvolution = (item) => {
    var result = item.species.name;
    while(item.evolves_to.length > 0){
      item = item.evolves_to[0];
      result += ("   ➡➡   " + item.species.name);
    }
    return <li>{result}</li>
  }

  return (
    <div className="pokemon-content">
      <div className="pokemon-card-header">
        <img src={currPokemon.sprites.front_default} alt="" />
        <h1>{currPokemon.name.slice(0, 1).toUpperCase() + currPokemon.name.slice(1)}</h1>
      </div>
      <div className="pokemon-card-body">
        <dl>
          <dt><strong>Types</strong></dt>
          <dd>
            <ul>
              {currPokemon.types.map((item, index) => <li key={index}>{item.type.name}</li>)}
            </ul>
          </dd>
          <dt><strong>Moves</strong></dt>
          <dd>
            <ul>
              {currPokemon.moves.map((item, index) => <li key={index}>{item.move.name}</li>)}
            </ul>
          </dd>
          <dt><strong>Encounter Areas</strong></dt>
          <dd>
            <ul>
              {currPokemon.areas.map((item,index) => <li key={item.location_area.name}>{item.location_area.name}</li>)}
            </ul>
          </dd>
          <dt><strong>Evolution Chain</strong></dt>
          <dd>
            <ul>
              {renderEvolution(currPokemon.evolutionChain)}
            </ul>
          </dd>
          <dt><strong>Evolves From</strong></dt>
          <dd>
            <ul>
              {currPokemon.evolvesFrom.evolves_from_species && <li>{currPokemon.evolvesFrom.evolves_from_species.name}</li>}
            </ul>
          </dd>
          <dt><strong>Web Games</strong></dt>
          <dd>
            <ul>
              {currPokemon.game_indices.map(game => {return <li key={game.version.name}>{game.version.name}</li>})}
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default PokemonDetails;

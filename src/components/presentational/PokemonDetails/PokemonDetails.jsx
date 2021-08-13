import React from "react";
import PokemonInfo from "../../PokemonInfo/PokemonInfo";

const PokemonDetails = ({ currPokemon }) => {
  window.scrollTo(0, 0);

  const renderEvolution = (item) => {
    var result = [item.species.name];
    while(item.evolves_to.length > 0){
      item = item.evolves_to[0];
      result.push(item.species.name);
    }
    return result.map(name => <li key={name} className="evolution-item pokemon-attribute">{name}</li>);
  }

  return (
    <div className="pokemon-content">
      <div className="pokemon-card-header">
        <img src={currPokemon.sprites.front_default} alt="" />
        <h1>{currPokemon.name.slice(0, 1).toUpperCase() + currPokemon.name.slice(1)}</h1>
      </div>
      <div className="pokemon-card-body">
        
          <PokemonInfo title="Types" content={currPokemon.types} infoType="type" />
          <hr/>
          
          <PokemonInfo title="Moves" content={currPokemon.moves} infoType="move" />
          <hr/>
          
          {currPokemon.areas.length > 0 && <div><PokemonInfo title="Encounter Areas" content={currPokemon.areas} infoType="location_area" />
          <hr/></div>}
          
          <h2 className="list-info-title">Evolution Chain</h2>
          <ul>
              {renderEvolution(currPokemon.evolutionChain)}
          </ul>
          <hr/>

          {currPokemon.evolvesFrom.evolves_from_species &&<div>
          <PokemonInfo title="Evolves From" content={[currPokemon.evolvesFrom]} infoType="evolves_from_species" />
          <hr/></div>}
          
          <PokemonInfo title="Web Games" content={currPokemon.game_indices} infoType="version" />
        
      </div>
    </div>
  );
};

export default PokemonDetails;

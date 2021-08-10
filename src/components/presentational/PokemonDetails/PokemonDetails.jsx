import React from "react";

const PokemonDetails = ({ currPokemon, findAreas, areas }) => {
  //TODO : FIX THE AREAS ISSUE
  // const allAreas = () => {
  //   findAreas(currPokemon.location_area_encounters);
  //   return areas.map((item, index) => {
  //     return <li key={index}>{item.location_area.name}</li>;
  //   });
  // };

  return (
    <div className="pokemon-details">
      <div className="pokemon-card-header">
        <img src={currPokemon.sprites.front_default} alt="" />
        <h1>{currPokemon.name}</h1>
      </div>
      <div className="pokemon-card-body">
        <dl>
          <dt>
            <strong>Types</strong>
          </dt>
          <dd>
            <ul>
              {currPokemon.types.map((item, index) => (
                <li key={index}>{item.type.name}</li>
              ))}
            </ul>
          </dd>
          <dt>
            <strong>Moves</strong>
          </dt>
          <dd>
            <ul>
              {currPokemon.moves.map((item, index) => (
                <li key={index}>{item.move.name}</li>
              ))}
            </ul>
          </dd>
          <dt>
            <strong>Encounter Areas</strong>
          </dt>
          <dd>
            <ul>{/* {allAreas()} */}</ul>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default PokemonDetails;

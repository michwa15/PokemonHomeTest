import React, { useState, useEffect } from "react";
import List from "../presentational/List/List";
import NavBar from "../presentational/NavBar/NavBar";
import axios from "axios";
import FavoritesList from "../presentational/FavoritesList/FavoritesList";
import PokemonDetails from "../presentational/PokemonDetails/PokemonDetails";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

const PokemonsContainer = ({onSoundIconClick, isPlaying}) => {
  
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currList, setCurrList] = useState("pokemons");
  const [currPokemon, setCurrPokemon] = useState(null);

  useEffect(() => {
    let elements = [];

    axios.get("http://pokeapi.co/api/v2/pokemon/?limit=151").then((response) => {
      const promisesArr = response.data.results.map((item) =>
        axios.get(item.url)
      );

      Promise.all(promisesArr).then((responses) => {
        elements = responses.map((response) => response.data);
        setItems(elements);
      });
    });

    const arr = JSON.parse(localStorage.getItem("fav")) || [];
    setFavorites(arr);
  }, []);
    

  const onPokemonItemClick = (pokemonDetails) => {
    
    const evolutionUrl = "https://pokeapi.co/api/v2/pokemon-species/" + pokemonDetails.id + "/";

    const pokemonInfoIndex = items.findIndex(item => item.name === pokemonDetails.name);
    var pokemonInfo = items[pokemonInfoIndex];

    let URL1 = axios.get(pokemonDetails.location_area_encounters);
    let URL2 = axios.get(evolutionUrl)

    Promise.all([URL1, URL2]).then((responses) => {
      
      pokemonInfo.areas = responses[0].data;
      pokemonInfo.evolvesFrom = responses[1].data;

      axios.get(responses[1].data.evolution_chain.url).then(response => {
        
        pokemonInfo.evolutionChain = response.data.chain;
        items[pokemonInfoIndex] = pokemonInfo;
        
        setItems([...items]);
        setCurrPokemon({...pokemonInfo});
      })
    })

  };

  const onNavBarItemClick = (name) => {
    setCurrList(name);
    setCurrPokemon(null);
  };

  const onFavoriteClick = (item, checked) => {
    checked ? addItem(item) : removeItem(item);
  };

  const addItem = (element) => {
    setFavorites((prevFav) => {
      const newFav = [...prevFav];
      if (prevFav.length < 6) {
        newFav.push(element);
        localStorage.setItem("fav", JSON.stringify(newFav));
      }
      return newFav;
    });
  };

  const removeItem = (element) => {
    const currName = element.name;
    setFavorites((prevFav) => {
      const newFav = prevFav.filter((item) => {
        return item.name !== currName;
      });
      localStorage.setItem("fav", JSON.stringify(newFav));
      return newFav;
    });
  };
  
  return (
    <div>
      <NavBar onNavBarItemClick={onNavBarItemClick} />
      <div className="grid">
        <button className="sound-button" onClick={() => onSoundIconClick()}>{
          isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon /> 
        }</button>
        {currPokemon !== null ? (
          <PokemonDetails
            currPokemon={currPokemon}
          />
        ) : currList === "pokemons" ? (
          <List
            items={items}
            favoritesList={favorites}
            onFavoriteClick={onFavoriteClick}
            onPokemonItemClick={onPokemonItemClick}
          />
        ) : (
          //currList = "favorites"
          <FavoritesList
            items={favorites}
            onFavoriteClick={onFavoriteClick}
            onPokemonItemClick={onPokemonItemClick}
          />
        )}
      </div>
    </div>
  );
};

export default PokemonsContainer;

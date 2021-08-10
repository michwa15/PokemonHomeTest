import React, { useState, useEffect } from "react";
import List from "../presentational/List/List";
import NavBar from "../presentational/NavBar/NavBar";
import axios from "axios";
import FavoritesList from "../presentational/FavoritesList/FavoritesList";
import PokemonDetails from "../presentational/PokemonDetails/PokemonDetails";

const PokemonsContainer = () => {
  // Fire only on init of application
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get("http://pokeapi.co/api/v2/pokemon/?limit=20").then((response) => {
      setItems(response.data.results);
    });
  }, []);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("fav")) || [];
    setFavorites(arr);
  }, []);

  const [currList, setCurrList] = useState("pokemons");
  const [currPokemon, setCurrPokemon] = useState(null);
  const [areas, setAreas] = useState([]);

  const findAreas = (url) => {
    axios.get(url).then((response) => setAreas(response.data));
  };

  const onPokemonItemClick = (item) => {
    axios.get(item.url).then((response) => setCurrPokemon(response.data));
  };

  const onNavBarItemClick = (name) => {
    //TODO : merge the 2 set commands
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
        {currPokemon !== null ? (
          <PokemonDetails
            currPokemon={currPokemon}
            findAreas={findAreas}
            areas={areas}
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

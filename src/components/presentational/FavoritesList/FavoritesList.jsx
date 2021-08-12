import React from "react";
import ListItem from "../ListItem/ListItem";

const FavoritesList = ({ items, onFavoriteClick, onPokemonItemClick }) => {
  
  const renderListItems = () => {
    return items.map((item, index) => {
      return (
        <ListItem
          key={item.name}
          item={item}
          onFavoriteClick={onFavoriteClick}
          isActive={true}
          onPokemonItemClick={onPokemonItemClick}
        />
      );
    });
  };

  return (
    <ul>{renderListItems()}</ul>
  );
};

export default FavoritesList;

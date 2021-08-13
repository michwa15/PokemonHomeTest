import React from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ items, favoritesList, onFavoriteClick, onPokemonItemClick }) => {
  window.scrollTo(0, 0);
  
  const isInFavorites = (item) => {
    return favoritesList.some(
      (favoriteItem) => favoriteItem.name === item.name);
  };

  const renderListItems = () => {
    return items.map((item, index) => {
      return (
        <ListItem
          key={index}
          item={item}
          onFavoriteClick={onFavoriteClick}
          isActive={isInFavorites(item)}
          onPokemonItemClick={onPokemonItemClick}
        />
      );
    });
  };

  return (
    <ul className="cards-list">{renderListItems()}</ul>
  );
};

export default List;

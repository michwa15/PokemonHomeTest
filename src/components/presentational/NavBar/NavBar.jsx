import React from "react";

function NavBar({ onNavBarItemClick }) {
  return (
    <div>
      <ul className="nav">
        <li>
          <img
            className="header-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokimons"
          />
        </li>
        <li className="nav-item">
          <button
            name="pokemons"
            onClick={(event) => {
              onNavBarItemClick(event.target.name);
              event.preventDefault();
            }}
          >
            Pokimons
          </button>
        </li>
        <li className="nav-item">
          <button
            name="favorites"
            onClick={(event) => {
              onNavBarItemClick(event.target.name);
              event.preventDefault();
            }}
          >
            Favorites
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

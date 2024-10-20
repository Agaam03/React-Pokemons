import React, { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";
import EachUtils from "../../utils/EachUtils";
import "./PokemonList.css";
import PokemonItem from "../PokemonItem/PokemonItem";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemonJSON);
  const handleChange = (event) => {
    const search = pokemons.filter((item) =>
      item.name.toLowerCase().includes(event.target.value)
    );

    setFilteredPokemons(search);
  };
  // Sorting array berdasarkan nama
  const sortPokemon = (items) =>
    [...items].sort((a, b) => a.name.localeCompare(b.name)); // Salin array agar tidak merusak data asli

  // Mengurutkan data sebelum di-render
  const sortedPokemons = sortPokemon(filteredPokemons);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        className="search"
        onChange={handleChange}
      />

      <div className="list-pokemon">
        <EachUtils
          datalist={sortedPokemons}
          render={(item) => <PokemonItem key={item.id} pokemon={item} />}
        />
      </div>
    </div>
  );
}

export default PokemonList;

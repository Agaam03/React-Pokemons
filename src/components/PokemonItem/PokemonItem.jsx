import "./PokemonItem.css";

import { colours } from "../../data/colours";
import EachUtils from "../../utils/EachUtils";

function PokemonItem({ pokemon }) {
  return (
    <div
      className="pokemon-card"
      style={{
        backgroundColor: `${pokemon.color}`,
      }}
    >
      <img src={pokemon.imageUrl} alt={pokemon.name} width={250} />
      <h1>{pokemon.name}</h1>

      {
        <div className="types-container">
          <EachUtils
            datalist={pokemon.types}
            render={(item, index) => (
              <span
                key={index}
                className="type-badge"
                style={{
                  backgroundColor: colours[item.toLowerCase()],
                }}
              >
                {item}
              </span>
            )}
          />
        </div>
      }

      <p className="description">{pokemon.description}</p>
    </div>
  );
}
export default PokemonItem;

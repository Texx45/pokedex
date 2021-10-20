import React from "react";
const useState = React.useState;

function CaughtPokemon({ date }) {
  let [caught, setCaught] = useState([]);
  let [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  function catchPokemon() {
    setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput("");
    console.log(caught);
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <input
        value={pokemonNameInput}
        type="text"
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((pokemon, index) => {
          return <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}

export default CaughtPokemon;

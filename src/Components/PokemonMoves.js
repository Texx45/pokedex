import React, { useEffect, useState } from "react";

function PokemonMoves(props) {
  const [pokemonData, setPokemonData] = useState(null);
  console.log(props);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        console.log("setPokemonData:", data);
      });
  }, [props.pokemonId]);

  return (
    <div>
      {pokemonData === null ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <p>{pokemonData.name}'s moves:</p>
          <ul>
            {pokemonData.moves.map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonMoves;

import React from "react";
const useState = React.useState;

function CaughtPokemon({ date }) {
  let [caught, setCaught] = useState([]);

  function catchPokemon() {
    let newPokemon = ["Meow", "Chicken", "Ditto", "Mewtwo"];
    const randomPokemon = Math.floor(Math.random() * newPokemon.length);
    setCaught(caught.concat(newPokemon[randomPokemon]));
    console.log(caught);
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
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

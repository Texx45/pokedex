function BestPokemon(props) {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.powers.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
}

export default BestPokemon;

function Logo(props) {
  //   const appName = `Terry's Pokedex`;
  console.log(props);

  return (
    <div>
      <h1>Welcome to the {props.appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt=""
      />
    </div>
  );
}

export default Logo;

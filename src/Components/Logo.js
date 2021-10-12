function Logo({ appName, handleClick }) {
  //   const appName = `Terry's Pokedex`;
  // console.log(props);

  return (
    <div>
      <h1>Welcome to the {appName}</h1>
      <img
        onClick={handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="bird"
      />
    </div>
  );
}

export default Logo;

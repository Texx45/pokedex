import "./App.css";
import BestPokemon from "./Components/BestPokemon";
import CaughtPokemon from "./Components/CaughtPokemon";
import ClickLoggerApp from "./Components/ClickLoggerApp";
import Logo from "./Components/Logo";
const abilities = ["Anticipation", "Adaptability", "Run-Away", "Run-Away"];
const date = new Date().toLocaleDateString();

function App() {
  const logWhenClicked = () => {
    console.log("Image Clicked");
  };

  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />;
      <BestPokemon powers={abilities} />
      <CaughtPokemon setDate={date} />
      {/* <ClickLoggerApp /> */}
    </div>
  );
}

export default App;

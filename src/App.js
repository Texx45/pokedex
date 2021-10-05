import "./App.css";
import BestPokemon from "./Components/BestPokemon";
import CaughtPokemon from "./Components/CaughtPokemon";
import Logo from "./Components/Logo";
const abilities = ["Anticipation", "Adaptability", "Run-Away", "Run-Away"];

function App() {
  return (
    <div>
      <Logo appName="Pokedex" />;
      <BestPokemon powers={abilities} />
      <CaughtPokemon />
    </div>
  );
}

export default App;

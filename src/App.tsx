import React from "react";
import { usePokemon, usePokemonSource, PokemonContest } from "./store.tsx";

const PokemonList = () => {
  const { pokemon } = usePokemon();

  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div>
      <PokemonContest.Provider value={usePokemonSource()}>
        <PokemonList />
      </PokemonContest.Provider>
    </div>
  );
}

export default App;

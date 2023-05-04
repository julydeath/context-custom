import { useEffect, useState, createContext, useContext } from "react";

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export const usePokemonSource = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("./pokemon.json")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return { pokemon };
};

export const PokemonContest = createContext({ pokemon: [] as Pokemon[] });

export function usePokemon() {
  return useContext(PokemonContest);
}

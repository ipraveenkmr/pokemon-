'use client';
import { useState, useEffect } from 'react';
import PokemonForm from "@/components/PokemonForm";
import PokemonCard from "@/components/PokemonCard";
import PokemonCardSkeleton from "@/loader/PokemonCardSkeleton";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    fetchAllPokemon();
  }, [])


  const fetchAllPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();
    setPokemons(data.results);
    setIsClient(true);
  }

  return (
    <main className="max-w-[90vw] md:max-w-[65vw] mx-auto my-16">
      <h1 className="text-3xl font-bold mb-6">Pokemon</h1>
      <PokemonForm />
      {isClient ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
          {pokemons.map((p) => (
            <PokemonCard key={p.name} pokemon={p} />
          ))}
        </div>
      ) : (
        <PokemonCardSkeleton />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
        {pokemons.map((p) => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>
    </main>
  );
}
'use client';
import { useState, useEffect } from 'react';
import PokemonForm from "@/components/PokemonForm";
import PokemonCard from "@/components/PokemonCard";
import PokemonCardSkeleton from "@/loader/PokemonCardSkeleton";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  useEffect(() => {
    filterPokemons();
  }, [search, type, pokemons]);

  const fetchAllPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();

    // Add details to each Pokémon for filtering (like type)
    const detailed = await Promise.all(
      data.results.map(async (p) => {
        const details = await fetch(p.url).then(res => res.json());
        return {
          name: p.name,
          url: p.url,
          types: details.types.map((t) => t.type.name),
        };
      })
    );

    setPokemons(detailed);
    setIsClient(true);
  };

  const filterPokemons = () => {
    const filtered = pokemons.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = type ? p.types.includes(type) : true;
      return matchesSearch && matchesType;
    });
    setFilteredPokemons(filtered);
  };

  return (
    <main className="max-w-[90vw] md:max-w-[65vw] mx-auto my-16">
      <h1 className="text-3xl font-bold mb-6">Pokemon</h1>
      <PokemonForm
        type={type}
        setType={setType}
        search={search}
        setSearch={setSearch}
      />
      {isClient ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
          {filteredPokemons.map((p) => (
            <PokemonCard key={p.name} pokemon={p} />
          ))}
        </div>
      ) : (
        <PokemonCardSkeleton />
      )}
    </main>
  );
}

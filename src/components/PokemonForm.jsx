'use client';
import { useState, useEffect } from 'react';

export default function PokemonForm({ type, setType, search, setSearch }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((res) => res.json())
      .then((data) => setTypes(data.results));
  }, []);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <form className="flex flex-col md:flex-row gap-4">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 rounded border border-slate-400"
      >
        <option value="">All Types</option>
        {types.map((t) => (
          <option key={t.name} value={t.name}>
            {capitalize(t.name)}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="p-2 rounded flex-1 border border-slate-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

import Link from 'next/link';

export default function PokemonCard({ pokemon }) {
  const id = pokemon.url.split('/').filter(Boolean).pop();
  return (
    <Link href={`/pokemon/${pokemon.name}`} className="bg-white p-4 rounded shadow hover:shadow-lg">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={pokemon.name}
        className="mx-auto"
      />
      <p className="text-center capitalize mt-2 font-medium">{pokemon.name}</p>
    </Link>
  );
}
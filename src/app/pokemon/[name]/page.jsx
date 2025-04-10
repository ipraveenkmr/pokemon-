import Breadcrumb from "@/components/Breadcrumb";

export default async function PokemonDetails({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const pokemon = await res.json();

  return (
    <div>
      <div>
        <Breadcrumb path={["Home", pokemon.name]} />
      </div>
      <div className="min-h-screen flex items-center justify-center px-4 py-8 md:-mt-16 -mt-8">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg space-y-6">
          <div className="flex justify-center p-6 bg-[#60E2C9] rounded-t-2xl">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-64 h-64"
            />
          </div>

          <div className="bg-[#FDC666] p-6 -mt-10 rounded-b-2xl">
            <div className="mb-2">
              <p>
                <span className="font-semibold text-gray-700">Name: </span>
                <span className="capitalize">
                  {pokemon.name}
                </span>
              </p>
            </div>
            <div className="mb-2">
              <p>
                <span className="font-semibold text-gray-700">Type: </span>
                <span className="capitalize">
                  {pokemon.types.map((t) => t.type.name).join(", ")}
                </span>
              </p>
            </div>

            <div className="mb-2">
              <p>
                <span className="mt-5 font-semibold text-gray-700">Stats: </span>
                {pokemon.stats
                  .map((stat) => {
                    const name = stat.stat.name;
                    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
                    return `${capitalizedName}: ${stat.base_stat}`;
                  })
                  .join(", ")}

              </p>
            </div>

            <div className="mb-2">
              <p>
                <span className="mt-5 font-semibold text-gray-700">Abilities: </span>
                <span className="capitalize">
                  {pokemon.abilities.map((ab) => ab.ability.name).join(", ")}
                </span>
              </p>
            </div>

            <div className="mb-2">
              <p>
                <span className="mt-5 font-semibold text-gray-700">Moves: </span>
                {pokemon.moves
                  .slice(0, 5)
                  .map((move) =>
                    move.move.name
                      .split("-")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")
                  )
                  .join(", ")}
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

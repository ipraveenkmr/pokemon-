import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PokemonCardSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="p-4 border rounded shadow border-slate-200">
          <Skeleton height={80} className="mb-4" />
          <Skeleton height={20} width={`80%`} className="mb-2" /> 
          <Skeleton height={16} width={`60%`} /> 
        </div>
      ))}
    </div>
  );
};

export default PokemonCardSkeleton;

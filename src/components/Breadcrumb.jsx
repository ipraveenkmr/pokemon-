import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

export default function Breadcrumb({ path }) {
  return (
    <nav className="text-sm mb-4 md:mt-16 md:ml-64 mt-10 ml-10 flex items-center flex-wrap gap-1 text-gray-700">
      {path.map((segment, index) => (
        <span key={index} className="flex items-center">
          {index > 0 && <FiChevronRight className="mx-1" />}
          {index < path.length - 1 ? (
            <Link href="/" className="text-blue-500 hover:underline">
              {segment}
            </Link>
          ) : (
            <span className="font-semibold capitalize">{segment}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

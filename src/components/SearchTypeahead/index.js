import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchTypeahead = ({ items }) => {
  const [query, setQuery] = useState('');
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (query !== '') {
      setRelatedPosts(items.filter(v => v.title.toLowerCase().indexOf(query.toLowerCase()) !== -1))
    } else {
      setRelatedPosts([]);
    }
  }, [query, items]);

  return (
    <div className="relative">
      <FontAwesomeIcon className="absolute mt-2 ml-2" icon={faMagnifyingGlass} color="gray" />
      <input
        className="block w-full border border-indigo-400 outline-indigo-400 rounded-md placeholder:text-neutral-400 py-1 px-2 pl-8"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a post"
      />
      {relatedPosts && relatedPosts.length > 0 && (
        <ul className="absolute bg-white w-full border rounded-md">
          {relatedPosts.map(p => (
            <li key={`typeahead-option-${p.id}`}>
              <Link onClick={() => setQuery('')} className="block p-2 border-b hover:bg-indigo-600 hover:text-white" to={`blog/${p.id}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { SearchTypeahead };
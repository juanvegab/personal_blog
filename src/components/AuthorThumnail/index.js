import { SmallImage } from "../SmallImage";

const AuthorThumbnail = ({ author: {name, thumbnail}, smallText }) => {
  return (
    <div className="flex">
      <SmallImage imageURL={thumbnail} altText={name} />
      <div className="ml-2">
        <p className="text-sm font-semibold">{name}</p>
        {smallText && <small className="text-xs font-medium text-gray-400">{smallText}</small>}
      </div>
    </div>
  );
}

export { AuthorThumbnail };
const SmallImage = ({ imageURL, altText }) => {
  return (
    <div className="w-11 h-11 overflow-hidden rounded-xl">
      <img className="w-full h-full object-cover" src={imageURL} alt={altText} />
    </div>
  );
}

export { SmallImage };
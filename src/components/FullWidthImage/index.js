const FullWidthImage = ({ imageURL, altText }) => {
  return (
    <div>
      <img className="block w-full object-center" src={imageURL} alt={altText} />
    </div>
  );
}

export { FullWidthImage };
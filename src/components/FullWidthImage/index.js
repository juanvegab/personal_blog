import './styles.css';

const FullWidthImage = ({ imageURL, altText }) => {
  return (
    <div className="full-width-image">
      <img src={imageURL} alt={altText} />
    </div>
  );
}

export { FullWidthImage };
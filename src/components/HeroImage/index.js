import { Link } from "react-router-dom";
import './styles.css';

const HeroImage = ({ imageURL, altText, redirectTo }) => {

  const heroComponent = (
    <div className="hero-image">
      <img src={imageURL} alt={altText} />
    </div>
  );

  return (
    redirectTo
      ? <Link to={redirectTo}>{heroComponent}</Link>
      : heroComponent
  );
}

export { HeroImage };
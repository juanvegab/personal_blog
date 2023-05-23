import { Link } from "react-router-dom";
import './styles.css';

const BlogsLogo = ({ isWhite = false }) => {
  const logoURL = isWhite ? "../assets/logo_white.svg" : "../assets/logo.svg";
  return (
    <Link to="/" className="component-blogs-logo">
      <img src={logoURL} alt="Blog Logo"/>
    </Link>
  );
}

export { BlogsLogo };
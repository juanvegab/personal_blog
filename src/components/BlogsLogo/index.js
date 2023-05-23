import { Link } from "react-router-dom";
import './styles.css';

const BlogsLogo = () => {
  return (
    <Link to="/" className="component-blogs-logo">
      <img src="../assets/logo.svg" alt="Blog Logo"/>
    </Link>
  );
}

export { BlogsLogo };
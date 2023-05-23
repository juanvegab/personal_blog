import "./styles.css";
import { NavLink } from "react-router-dom";
import { BlogsLogo } from "../BlogsLogo";

const Header = (props) => {

  return (
    <header className="component-header">
      <BlogsLogo />
      <nav>
        { props.routes.map(r => <NavLink key={`nav-link-${r.id}`} to={r.path}>{r.label}</NavLink>) }
      </nav>
    </header>
  );
}

export { Header };
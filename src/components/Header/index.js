import "./styles.css";
import { NavLink } from "react-router-dom";
import { BlogsLogo } from "../BlogsLogo";
import { MaxWidthContainer } from "../MaxWidthContainer";

const Header = (props) => {

  return (
    <header className="component-header">
      <MaxWidthContainer>
        <div className="flex w-full items-center justify-between py-8">
          <BlogsLogo />
          <nav>
            { props.routes.map(r => <NavLink
              className="inline-block text-base font-medium w-24 active:text-purple-800 hover:text-purple-800"
              key={`nav-link-${r.id}`}
              to={r.path}>{r.label}</NavLink>
            ) }
          </nav>
        </div>
      </MaxWidthContainer>
    </header>
  );
}

export { Header };
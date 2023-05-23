import "./styles.css";
import { Link } from "react-router-dom";
import { BlogsLogo } from "../BlogsLogo";
import { IS_USER_ADMIN } from "../../constants/stringConstants";
import { useContext } from "react";
import { BlogContext } from "../../services/state/BlogStateProvider";

const Footer = () => {
  const MAX_POSTS = 4;
  const { blog: { posts } } = useContext(BlogContext);
  const recentPosts = posts.slice(MAX_POSTS*-1);

  return (
    <footer className="component-footer">
      <div className="site-links">
        <ul>
          <li><h3>Know more about GO.BLOG</h3></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">News letters</Link></li>
        </ul>
        <ul>
          <li><h3>Recent posts</h3></li>
          {recentPosts.map((p) => (
            <li key={`footer-post-links-${p.id}`}><Link to={`blog/${p.id}`}>{p.title}</Link></li>
          ))}
        </ul>
        <ul>
          <li><h3>Blog</h3></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/dashboard/new">Make a post</Link></li>
          <li>{IS_USER_ADMIN && <Link to="/dashboard">Dashboard</Link>}</li>
        </ul>
      </div>
      <BlogsLogo isWhite={true} />
      <p>All Rights Reserved {new Date().getFullYear()}</p>
    </footer>
  );
}

export { Footer };
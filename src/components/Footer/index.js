import { Link } from "react-router-dom";
import { BlogsLogo } from "../BlogsLogo";
import { IS_USER_ADMIN } from "../../constants/stringConstants";
import { useContext } from "react";
import { BlogContext } from "../../services/state/BlogStateProvider";
import { MaxWidthContainer } from "../MaxWidthContainer";

const Footer = () => {
  const MAX_POSTS = 4;
  const { blog: { posts } } = useContext(BlogContext);
  const recentPosts = posts.slice(MAX_POSTS*-1);

  return (
    <footer className="bg-neutral-600 text-neutral-300">
      <MaxWidthContainer smallWidth={true}>
        <div className="flex flex-row justify-between pt-14 leading-10">
          <ul>
            <li><h3 className="text-white text-base font-semibold">Know more about GO.BLOG</h3></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">News letters</Link></li>
          </ul>
          <ul>
            <li><h3 className="text-white text-base font-semibold">Recent posts</h3></li>
            {recentPosts.map((p) => (
              <li key={`footer-post-links-${p.id}`}>
                <Link to={`blog/${p.id}`}>{p.title}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li><h3 className="text-white text-base font-semibold">Blog</h3></li>
            <li><Link to="/blog">All posts grid</Link></li>
            <li><Link to="/dashboard/new">Make a post</Link></li>
            <li>{IS_USER_ADMIN && <Link to="/dashboard">Dashboard</Link>}</li>
          </ul>
        </div>
        <div className="flex flex-row justify-between py-5">
          <BlogsLogo isWhite={true} />
          <p>All Rights Reserved {new Date().getFullYear()}</p>
        </div>
      </MaxWidthContainer>
    </footer>
  );
}

export { Footer };
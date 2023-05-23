import { Link } from "react-router-dom";
import { usePostsList } from "./usePostsList";

const PostsList = () => {
  const { isLoading, posts } =  usePostsList();

  return (
    <div className="page-posts-list">
      {isLoading && <p>Posts are being loaded...</p>}
      {posts && posts.map(({ id, featuredImage, name, title, author }) => 
        <div key={`post_item_${id}`}>
          <Link to={`/blog/${id}`}>
            <img src={featuredImage} alt={name} />
          </Link>
          <Link to={`/blog/${id}`}>
            <h2>{title}</h2>
          </Link>
          <p>Written by: {author.name}</p>
          <img src={author.thumbnail} alt={author.name} />
        </div>
      )}
    </div>
  );
}

export { PostsList };
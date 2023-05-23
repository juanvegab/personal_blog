import { Link, useParams } from "react-router-dom";
import { usePost } from "./usePost";
import { useEffect } from "react";

const Post = () => {
  const { id } = useParams();
  const { isLoading, post, loadPost } = usePost();
  
  useEffect(() => {
    if (id) {
      loadPost(id);
    }
  }, [id]);

  return (
    <div className="page-post">
      <Link to="/blog">{`<`}Go back</Link>
      {isLoading && <p>Post {id} is being loaded...</p>}
      {post && (
        <div>
          <img src={post.featuredImage} alt={post.name} />
          <h2>{post.title}</h2>
          <div>{post.tags.map(t => <span key={`tag_${t.trim()}`} style={{marginRight: '5px', border: '1px solid gray', borderRadius: '4px', padding: '2px'}}>{t}</span>)}</div>
          <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        </div>
      )}
      <Link to="/blog">{`<`}Go back</Link>
    </div>
  );
}

export { Post };
import { Link, useParams } from "react-router-dom";
import { usePostForm } from "./usePostForm";
import { useEffect } from "react";
import { BlogBtn } from "../../components/BlogBtn";

const PostForm = () => {
  const { id } = useParams();
  const { isLoading, post, isEditing, loadPost, handleSubmit, setValue } = usePostForm();
  
  useEffect(() => {
    loadPost(id);
  }, [id]);

  return (
    <div className="page-post-form">
      <BlogBtn route="/dashboard" label={`${"<"} Go back`} />
      {isLoading && <p>Post {id} is being loaded...</p>}
      {post && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" name="title" value={post.title} onChange={(e) => setValue(e.target.name, e.target.value)} />
          </div>
          <div>
            <label>Excerpt:</label>
            <input type="text" name="excerpt" value={post.excerpt} onChange={(e) => setValue(e.target.name, e.target.value)} />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" name="date" value={post.date} onChange={(e) => setValue(e.target.name, e.target.value)} />
          </div>
          <div>
            <label>Content:</label>
            <textarea name="content" value={post.content} onChange={(e) => setValue(e.target.name, e.target.value)} />
          </div>
          <div>
            <label>Featured Image:</label>
            <input type="text" name="featuredImage" value={post.featuredImage} onChange={(e) => setValue(e.target.name, e.target.value)} />
          </div>
          <div>
            <label>Tags:</label>
            <input type="text" name="tags" value={post.tags?.join(', ')} onChange={(e) => setValue(e.target.name, e.target.value.split(',').map(t => t.trimStart()))} />
          </div>
          <section title="Author" style={{border: '1px solid gray', padding: '10px', borderRadius: '5px'}}>
            <legend>Author</legend>
            <div>
              <label>Name:</label>
              <input type="text" name="authorName" value={post.author?.name} onChange={(e) => setValue(e.target.name, e.target.value)} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="authorEmail" value={post.author?.email} onChange={(e) => setValue(e.target.name, e.target.value)} />
            </div>
            <div>
              <label>Thumbnail:</label>
              <input type="text" name="authorThumbnail" value={post.author?.thumbnail} onChange={(e) => setValue(e.target.name, e.target.value)} />
            </div>
          </section>
          <BlogBtn type="submit" label={isEditing ? "Update" : "Create"} />
          <BlogBtn route="/dashboard" label="Cancel" inverted={true} />
        </form>
      )}
    </div>
  );
}

export { PostForm };
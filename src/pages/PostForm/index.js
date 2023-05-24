import { useParams } from "react-router-dom";
import { usePostForm } from "./usePostForm";
import { useEffect } from "react";
import { BlogBtn } from "../../components/BlogBtn";
import { FormControl } from "../../components/FormControl"
import { FormContentControl } from "../../components/FormContentControl";
import { Spinner } from "../../components/Spinner";

const PostForm = () => {
  const { id } = useParams();
  const { isLoading, post, isEditing, loadPost, handleSubmit, setValue } = usePostForm();
  
  useEffect(() => {
    loadPost(id);
  }, [id]);

  return (
    <div className="page-post-form">
      <h2 className="text-neutral-600 text-3xl font-medium pt-4 pb-6">Create your new post</h2>
      <Spinner isLoading={isLoading} />
      {post && (
        <form onSubmit={handleSubmit}>
          <div className="w-5/12">
            <FormControl
              label="Title"
              placeholder="Title for your new post"
              type="text"
              name="title"
              required
              value={post.title}
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
            <FormControl
              label="Excerpt"
              placeholder="Brief description of what is your post about"
              type="text"
              name="excerpt"
              required
              value={post.excerpt}
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-5/12 mr-24">
              <FormControl
                label="Date"
                type="date"
                name="date"
                required
                value={post.date}
                onChange={(e) => setValue(e.target.name, e.target.value)}
              />
              <FormControl
                label="Featured Image"
                placeholder="URL image to be used as hero"
                type="text"
                name="featuredImage"
                required
                value={post.featuredImage}
                onChange={(e) => setValue(e.target.name, e.target.value)}
              />
              <FormControl
                label="Tags"
                placeholder="List of key words: white wine, tempranillo, rioja"
                type="text"
                required
                name="tags" value={post.tags?.join(', ')} onChange={(e) => setValue(e.target.name, e.target.value.split(',').map(t => t.trimStart()))}
              />
            </div>
            <div className="w-5/12">
              <FormControl
                label="Author Name"
                placeholder="John Doe"
                type="text"
                name="authorName"
                required
                value={post.author?.name} onChange={(e) => setValue(e.target.name, e.target.value)}
              />
              <FormControl
                label="Author Email"
                placeholder="test@test.com"
                type="email"
                name="authorEmail"
                required
                value={post.author?.email} onChange={(e) => setValue(e.target.name, e.target.value)}
              />
              <FormControl
                label="Author Thumbnail"
                placeholder="URL for a portrait image"
                type="text"
                name="authorThumbnail"
                required
                value={post.author?.thumbnail} onChange={(e) => setValue(e.target.name, e.target.value)}
              />
            </div>
          </div>
          <div className="w-11/12">
            <FormContentControl
              label="Content"
              placeholder="Post content, can include html tags"
              name="content"
              required
              value={post.content}
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-center my-10">
            <BlogBtn type="submit" label={isEditing ? "Update" : "Create"} />
            <BlogBtn route="/dashboard" label="Cancel" inverted={true} />
          </div>
        </form>
      )}
    </div>
  );
}

export { PostForm };
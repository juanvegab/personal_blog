import { Link, useParams } from "react-router-dom";
import { usePost } from "./usePost";
import { useEffect } from "react";
import { HeroImage } from "../../components/HeroImage";
import { TagList } from "../../components/TagList";
import { AuthorThumbnail } from "../../components/AuthorThumnail";

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
          <h3 className="text-5xl leading-tight font-semibold mb-4">{post.title}</h3>
          <div className="flex flex-row justify-between">
            {post.author && (
              <div className="mt-auto mb-4">
                <AuthorThumbnail author={post.author} smallText={post.date} />
              </div>
            )}
            <div>
              <TagList tags={post.tags} blogId={id} />
            </div>
          </div>
          <HeroImage imageURL={post.featuredImage} altText={post.title} />
          <div className="html-content mx-20 mt-10" dangerouslySetInnerHTML={{__html: post.content}}></div>
        </div>
      )}
      <Link to="/blog">{`<`}Go back</Link>
    </div>
  );
}

export { Post };
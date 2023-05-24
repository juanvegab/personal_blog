import { usePostsList } from "./usePostsList";
import { PostsGrid } from "../../components/PostsGrid";
import { HeroImage } from "../../components/HeroImage";

const PostsList = () => {
  const { isLoading, posts } =  usePostsList();

  return (
    <div className="page-posts-list">
      <HeroImage imageURL="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?auto=format&fit=crop&w=1600&h=600" altText="Hands with grapes" />
      <PostsGrid isLoading={isLoading} posts={posts} />
    </div>
  );
}

export { PostsList };
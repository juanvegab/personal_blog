import { HeroImage } from "../../components/HeroImage";
import { PostCard } from "../../components/PostCard";
import { PostsGrid } from "../../components/PostsGrid";
import { useHome } from "./useHome";

const Home = () => {
  const { isLoading, posts, featuredPost } = useHome();

  return (
    <div className="page-home">
      <HeroImage imageURL="https://images.unsplash.com/photo-1499750310107-5fef28a66643?fit=crop&w=1200&h=600" altText="phone" />
      <div className="mt-20">
        {featuredPost && (
          <div className="mb-20">
            <PostCard post={featuredPost} horizontal={true} />
          </div>
        )}
        <PostsGrid isLoading={isLoading} posts={posts} />
      </div>
    </div>
  );
}

export { Home };
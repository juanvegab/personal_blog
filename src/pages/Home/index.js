import { HeroImage } from "../../components/HeroImage";
import { PostCard } from "../../components/PostCard";
import { useHome } from "./useHome";

const Home = () => {
  const { isLoading, posts } =  useHome();

  return (
    <div className="page-home">
      <HeroImage imageURL="https://images.unsplash.com/photo-1499750310107-5fef28a66643?fit=crop&w=1200&h=600" altText="phone" />
      { isLoading && <p>Content is being loaded...</p> }
      { posts && (
        <div>
          <PostCard post={posts[0]} horizontal={true} />
          <div>
            {posts.map(p => <PostCard key={`home-post-list-${p.id}`} post={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export { Home };
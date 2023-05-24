import { PostCard } from "../PostCard";
import { Spinner } from "../Spinner";

const PostsGrid = ({ isLoading, posts }) => {
  return (
    <div>
      <Spinner isLoading={isLoading} />
      { posts && (
        <div className="mt-20">
          <div className="grid grid-cols-12 gap-5">
            {posts.map(p => (
              <div
                key={`home-post-list-${p.id}`}
                className="col-span-12 lg:col-span-4 mb-14"
              >
                <PostCard post={p} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { PostsGrid };
import { PostCard } from "../PostCard";

const PostsGrid = ({ isLoading, posts }) => {
  return (
    <div>
      { isLoading && <p>Content is being loaded...</p> }
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
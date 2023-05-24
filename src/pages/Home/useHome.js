import { useContext, useEffect } from "react";
import { usePostsRequests } from "../../services/api/posts";
import { BlogContext } from "../../services/state/BlogStateProvider";

const useHome = () => {
  const { getLatestNumberPost } = usePostsRequests();
  const { blog } = useContext(BlogContext);
  
  useEffect(() => {
    getLatestNumberPost();
  }, []);

  return {
    posts: blog.latestPosts,
    featuredPost: blog.featuredPost,
    isLoading: blog.isLoadingLatestPosts,
  };
}

export { useHome };
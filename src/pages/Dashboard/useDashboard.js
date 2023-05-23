import { useContext, useEffect } from "react";
import { usePostsRequests } from "../../services/api/posts";
import { BlogContext } from "../../services/state/BlogStateProvider";

const useDashboard = () => {
  const { getAllPosts } = usePostsRequests();
  const { blog } = useContext(BlogContext);
  
  useEffect(() => {
    getAllPosts();
  }, []);
  

  return {
    posts: blog.posts,
    isLoading: blog.postsLoading,
  };
}

export { useDashboard };
import { useContext, useEffect } from "react";
import { usePostsRequests } from "../../services/api/posts";
import { BlogContext } from "../../services/state/BlogStateProvider";

const useDashboard = () => {
  const { getAllPosts, deletePost } = usePostsRequests();
  const { blog } = useContext(BlogContext);
  
  useEffect(() => {
    getAllPosts();
  }, []);
  

  return {
    posts: blog.posts,
    isLoading: blog.isLoadingPosts,
    deletePost: deletePost,
  };
}

export { useDashboard };
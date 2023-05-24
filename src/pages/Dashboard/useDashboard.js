import { useContext, useEffect } from "react";
import { usePostsRequests } from "../../services/api/posts";
import { BlogContext } from "../../services/state/BlogStateProvider";

const useDashboard = () => {
  const { getAllPosts, deletePost, setAsFeatured } = usePostsRequests();
  const { blog } = useContext(BlogContext);
  
  useEffect(() => {
    getAllPosts();
  }, []);
  

  return {
    setAsFeatured,
    posts: blog.posts,
    deletePost: deletePost,
    isLoading: blog.isLoadingPosts,
  };
}

export { useDashboard };
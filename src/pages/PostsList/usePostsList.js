import { useContext, useEffect } from "react";
import { usePostsRequests } from "../../services/api/posts";
import { BlogContext } from "../../services/state/BlogStateProvider";

const usePostsList = () => {
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

export { usePostsList };
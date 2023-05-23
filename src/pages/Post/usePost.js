import { useContext } from "react";
import { usePostsRequests } from "../../services/api/posts";
import { BlogContext } from "../../services/state/BlogStateProvider";

const usePost = () => {
  const { getPostById } = usePostsRequests();
  const { blog: {isLoadingCurrentPost, currentPost} } = useContext(BlogContext);
  const loadPost = getPostById;
  
  return {
    post: currentPost,
    isLoading: isLoadingCurrentPost,
    loadPost,
  };
}

export { usePost };
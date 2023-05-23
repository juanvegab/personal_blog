import { useContext } from "react";
import { DEFAULT_POST_OBJECT, INITIAL_STATE } from "../../constants/stringConstants";
import { BlogContext } from "../state/BlogStateProvider";

// This is a simulation of an API Request
const resolveResponseInSomeTime = (resolve, value) => {
  const sometimeLater = Math.random() * (1000 - 2000) + 1000;
  setTimeout(() => {
    resolve(value)
  }, sometimeLater);
}

const usePostsRequests = () => {

  const { handleBlogUpdate, blog } = useContext(BlogContext);

  const getNewPostId = () => {
    return blog.posts[blog.posts.length] + 1;
  }

  const getAllPosts = () => {
    const promise = new Promise((resolve) => resolveResponseInSomeTime(resolve, INITIAL_STATE));
    handleBlogUpdate({
      ...blog,
      isLoadingPosts: true,
      posts: [],
    });

    promise.then((response) => {
      handleBlogUpdate({
        ...blog,
        isLoadingPosts: false,
        posts: response.posts,
      });
    });
  };

  const getPostById = (id) => {
    const selectedPost = blog.posts.find((post) => `${post.id}` === `${id}`);
    const promise = new Promise((resolve) => resolveResponseInSomeTime(resolve, { post: selectedPost }));
    cleanFormPost(true);
    promise.then(({ post }) => {
      handleBlogUpdate({
        ...blog,
        isLoadingCurrentPost: false,
        currentPost: post,
      });
    });
  }

  const loadFormPost = (id) => {
    const selectedPost = blog.posts.find((post) => `${post.id}` === `${id}`);
    const promise = new Promise((resolve) => resolveResponseInSomeTime(resolve, { post: selectedPost }));
    cleanFormPost(true);
    promise.then(({ post }) => {
      handleBlogUpdate({
        ...blog,
        isLoadingFormPost: false,
        formPost: post,
      });
    });
  }

  const editPost = (post) => {
    let selectedPost = blog.posts.find((p) => `${p.id}` === `${post.id}`);
    selectedPost = {...selectedPost, ...post};
    const promise = new Promise((resolve) => resolveResponseInSomeTime(resolve, { post: selectedPost }));
    handleBlogUpdate({
      ...blog,
      isLoadingFormPost: true,
      formPost: post,
    });

    promise.then(({ post }) => {
      let newPosts = [...blog.posts];
      const editedPostIndex = newPosts.findIndex(p => p.id === post.id);
      newPosts[editedPostIndex] = post;
      console.log("newPosts", newPosts);
      handleBlogUpdate({
        ...blog,
        posts: newPosts,
        isLoadingFormPost: false,
        formPost: post,
      });
    });
  }

  const cleanFormPost = (isLoading = false) => {
    handleBlogUpdate({
      ...blog,
      isLoadingCurrentPost: isLoading,
      currentPost: DEFAULT_POST_OBJECT,
    });
  }

  return {
    editPost,
    getAllPosts,
    getPostById,
    loadFormPost,
    cleanFormPost,
  }
}

export { usePostsRequests };
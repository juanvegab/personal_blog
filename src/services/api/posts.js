import { useContext } from "react";
import { DEFAULT_POST_OBJECT } from "../../constants/stringConstants";
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

  const getNewPostId = () => blog.posts[blog.posts.length - 1].id + 1;

  const getAllPosts = () => {
    const promise = new Promise((resolve) => resolveResponseInSomeTime(resolve, blog));
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
    const promise = new Promise((resolve) => resolveResponseInSomeTime(resolve, { post }));
    handleBlogUpdate({
      ...blog,
      isLoadingFormPost: true,
      formPost: post,
    });

    promise.then(({ post }) => {
      handleBlogUpdate({
        ...blog,
        posts: [...blog.posts.map(p => p.id === post.id ? post : p)],
        isLoadingFormPost: false,
        formPost: post,
      });
    });
  }

  const createPost = (post) => {
    console.log(getNewPostId())
    const newPost = {...post, id: getNewPostId()};
    const promise = new Promise((resolve) => resolveResponseInSomeTime(resolve, { post: newPost }));
    handleBlogUpdate({
      ...blog,
      isLoadingFormPost: true,
      formPost: newPost,
    });

    promise.then(({ post }) => {
      handleBlogUpdate({
        ...blog,
        posts: [...blog.posts, newPost],
        isLoadingFormPost: false,
        formPost: post,
      });
    });
  }

  const deletePost = (id) => {
    const promise = new Promise((resolve) => resolveResponseInSomeTime(resolve, {}));
    handleBlogUpdate({
      ...blog,
      isLoadingPosts: true,
    });

    promise.then(() => {
      handleBlogUpdate({
        ...blog,
        posts: [...blog.posts.filter(p => p.id !== id)],
        isLoadingPosts: false,
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
    createPost,
    deletePost,
    getAllPosts,
    getPostById,
    loadFormPost,
    cleanFormPost,
  }
}

export { usePostsRequests };
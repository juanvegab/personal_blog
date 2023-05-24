import { useContext } from "react";
import { DEFAULT_POST_OBJECT } from "../../constants/stringConstants";
import { BlogContext } from "../state/BlogStateProvider";

const sometimeLater = Math.random() * (1000 - 2000) + 1000;

// This is a simulation of an API Request to a server
// It will help to visualize the spinners on the site
const delayRequest = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), sometimeLater);
  });
}

const usePostsRequests = () => {
  const { handleBlogUpdate, blog } = useContext(BlogContext);

  const getNewPostId = () => blog.posts[blog.posts.length - 1].id + 1;

  const getAllPosts = () => {
    handleBlogUpdate({
      ...blog,
      isLoadingPosts: true,
      featuredPost: null,
      posts: [],
    });
    
    delayRequest({ posts: blog.posts })
      .then((response) => handleBlogUpdate({
        ...blog,
        isLoadingPosts: false,
        posts: response.posts,
        featuredPost: blog.posts.find(p => p.isFeatured)
      }))
  };

  const getPostById = (id) => {
    const selectedPost = blog.posts.find((post) => `${post.id}` === `${id}`);
    cleanFormPost(true);
    delayRequest({ post: selectedPost }).then(({ post }) => {
      handleBlogUpdate({
        ...blog,
        isLoadingCurrentPost: false,
        currentPost: post,
      });
    });
  }

  const loadFormPost = (id) => {
    const selectedPost = blog.posts.find((post) => `${post.id}` === `${id}`);
    cleanFormPost(true);
    delayRequest({ post: selectedPost }).then(({ post }) => {
      handleBlogUpdate({
        ...blog,
        isLoadingFormPost: false,
        formPost: post,
      });
    });
  }

  const editPost = (post) => {
    handleBlogUpdate({
      ...blog,
      isLoadingFormPost: true,
      formPost: post,
    });

    delayRequest({ post }).then(({ post }) => {
      handleBlogUpdate({
        ...blog,
        posts: [...blog.posts.map(p => p.id === post.id ? post : p)],
        isLoadingFormPost: false,
        formPost: post,
      });
    });
  }

  const createPost = (post) => {
    handleBlogUpdate({
      ...blog,
      isLoadingFormPost: true,
    });

    const newPost = {...post, id: getNewPostId()};
    delayRequest({ post: newPost }).then(({ post }) => {
      handleBlogUpdate({
        ...blog,
        posts: [...blog.posts, newPost],
        isLoadingFormPost: false,
        formPost: post,
      });
    });
  }

  const deletePost = (id) => {
    handleBlogUpdate({
      ...blog,
      isLoadingPosts: true,
    });

    delayRequest({}).then(() => {
      handleBlogUpdate({
        ...blog,
        posts: [...blog.posts.filter(p => p.id !== id)],
        isLoadingPosts: false,
      });
    });
  }

  const getLatestNumberPost = () => {
    handleBlogUpdate({
      ...blog,
      isLoadingLatestPosts: true,
      latestPosts: [],
      featuredPost: null,
    });
    
    const NUMBER_OF_LATEST_POSTS = 6;
    const latestPosts = blog.posts.filter(p => !p.isFeatured).slice(NUMBER_OF_LATEST_POSTS*-1);
    delayRequest({ posts: latestPosts }).then((response) => {
      handleBlogUpdate({
        ...blog,
        isLoadingLatestPosts: false,
        latestPosts: response.posts,
        featuredPost: blog.posts.find(p => p.isFeatured)
      });
    });
  };

  const cleanFormPost = (isLoading = false) => {
    handleBlogUpdate({
      ...blog,
      isLoadingCurrentPost: isLoading,
      currentPost: DEFAULT_POST_OBJECT,
    });
  }

  const setAsFeatured = (id) => {
    handleBlogUpdate({
      ...blog,
      isLoadingPosts: true,
    });

    delayRequest({}).then(() => {
      handleBlogUpdate({
        ...blog,
        posts: [...blog.posts.map(p => p.id === id ? {...p, isFeatured: true} : {...p, isFeatured: false})],
        isLoadingPosts: false,
      });
    });
  }

  return {
    editPost,
    createPost,
    deletePost,
    getAllPosts,
    getPostById,
    loadFormPost,
    setAsFeatured,
    cleanFormPost,
    getLatestNumberPost,
  }
}

export { usePostsRequests };
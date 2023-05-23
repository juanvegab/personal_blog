import { useContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { usePostsRequests } from "../../services/api/posts";
import { BlogContext } from "../../services/state/BlogStateProvider";
import { DEFAULT_POST_OBJECT } from "../../constants/stringConstants";

const usePostForm = () => {
  const {
    loadFormPost,
    cleanFormPost,
    createPost,
    editPost,
  } = usePostsRequests();
  const [ post, setPost ] = useState();
  const { blog: {isLoadingFormPost, formPost} } = useContext(BlogContext);
  const loadPost = (id) => {
    setPost(DEFAULT_POST_OBJECT);
    cleanFormPost();
    if (id && id !== 'new') {
      loadFormPost(id);
    }
  };

  useEffect(() => {
    if(!formPost || !formPost.id) {
      setPost({});
    } else {
      setPost(formPost)
    }
  }, [formPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.id) {
      console.log("EDIT: ", post);
      editPost(post);
      alert("Post successfully edited.");
      redirect("/dashboard");
    } else {
      console.log("CREATE: ", post);
      createPost(post);
      alert("Post successfully created.")
      redirect("/dashboard");
    }
  }

  const setValue = (key, value) => {
    if (key.indexOf('author') !== -1) {
      const authorKey = key.toLowerCase().replace('author', '');
      setPost({...post, author: {...post.author, [authorKey]: value}});
    } else {
      setPost({...post, [key]: value})
    }
  }
  
  
  return {
    post,
    isEditing: post && post.id,
    isLoading: isLoadingFormPost,
    loadPost,
    handleSubmit,
    setValue,
  };
}

export { usePostForm };
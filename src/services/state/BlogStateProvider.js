import { createContext, useState } from "react"
import { INITIAL_STATE, STORED_STATE_NAME } from "../../constants/stringConstants";

const getStoredState = () => {
  const storedState = localStorage.getItem(STORED_STATE_NAME);
  if (!storedState) return INITIAL_STATE;
  return JSON.parse(storedState);
}

const setStateToStore = (newState) => {
  localStorage.setItem(STORED_STATE_NAME, JSON.stringify(newState));
}

const BlogContext = createContext();
const BlogProvider = ({children}) => {
  const [blog, setBlog] = useState(getStoredState());
  const handleBlogUpdate = (updatedState) => {
    setBlog(updatedState);
    setStateToStore(updatedState);
  };

  const value = { blog, handleBlogUpdate };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider }
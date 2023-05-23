import { IS_USER_ADMIN } from "./stringConstants";
import { Home } from "../pages/Home";
import { PostsList } from "../pages/PostsList";
import { Post } from "../pages/Post";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";
import { Dashboard } from "../pages/Dashboard";
import { PostForm } from "../pages/PostForm";

const ROUTES_LIST = [
  { id: 1, label: "Home", isInNav: true, path: "/", element: <Home /> },
  {
    id: 2,
    label: "Blog",
    isInNav: true,
    path: "/blog",
    children: [
      { index: true, element: <PostsList /> },
      { path: ":id", element: <Post /> },
    ]
  },
  { id: 3, label: "About", isInNav: true, path: "/about", element: <About /> },
  { id: 4, label: "Contact", isInNav: true, path: "/contact", element: <Contact /> },
  { id: 5, label: "NotFound", path: "*", element: <NotFound /> },
  {
    id: 6,
    label: "Dashboard",
    isInNav: IS_USER_ADMIN,
    path: "dashboard",
    children: [
      { index: true, element: <Dashboard /> },
      { path: "edit/:id", element: <PostForm /> },
      { path: "new", element: <PostForm /> },
    ]
  },
];

const NAV_ROUTES = ROUTES_LIST.filter(r => r.isInNav);

export { ROUTES_LIST, NAV_ROUTES };
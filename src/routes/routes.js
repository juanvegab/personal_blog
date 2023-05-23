import { useRoutes } from "react-router-dom"
import { ROUTES_LIST } from "../constants/routesList";

const Routes = () => {
  const element = useRoutes(ROUTES_LIST);
  return element;
};

export { Routes };
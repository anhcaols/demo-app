import Home from "../pages/home/Home";
import { LoginPage } from "../pages/login";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: LoginPage,
  },
];

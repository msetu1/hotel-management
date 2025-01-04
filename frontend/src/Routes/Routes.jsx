import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import MealsCategoryCard from "../components/mealsCategory/MealsCategoryCard/MealsCategoryCard";
import PropertyDropdown from "../components/properties/PropertyDropdown";
import Gallery from "../Pages/Gallery/Gallery";
import HostAccount from "../Profile/HostAccount";
import Profile from "../Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meal-category-details",
        element: <MealsCategoryCard />,
      },
      {
        path: "/properties",
        element: <PropertyDropdown />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default router;

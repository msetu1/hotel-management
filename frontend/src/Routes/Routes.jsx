import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import MealsCategoryCard from "../components/mealsCategory/MealsCategoryCard/MealsCategoryCard";
import PropertyDropdown from "../components/properties/PropertyDropdown";
import Gallery from "../Pages/Gallery/Gallery";
import Profile from "../Profile/Profile";
import Meals from "../Pages/Meals/Meals";
import Rooms from "../Pages/Rooms/Rooms";
import Events from "../Pages/Events/Events";
import DashboardLayout from "../Layouts/DashboardLayout";
import Statistics from "../components/Dashboard/Statistics/Statistics";

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
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/events",
        element: <Events />,
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Statistics />,
      },
      // Role:guest
      // Role:events
      // Role:host
      // Role:admin
    ],
  },
]);

export default router;

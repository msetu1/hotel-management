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
import RoomDetails from "../components/Page/Rooms/RoomDetails/RoomDetails";
import AddRooms from "../Pages/Dashboard/Host/AddRoom/AddRooms";
import AddProperty from "../Pages/Dashboard/Host/AddProperty/AddProperty";
import MyListings from "../Pages/Dashboard/Host/MyListings/MyListings";
import ManageBookings from "../Pages/Dashboard/Host/ManageBookings/ManageBookings";
import AddEvents from "../Pages/Dashboard/Host/AddEvents/AddEvents";

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
        path: '/room/:id',
        element: <RoomDetails />,
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
      // Role:host
      {
        path: "add-room",
        element: <AddRooms />
      },
      {
        path: "my-listings",
        element: <MyListings />
      },
      {
        path: "manage-bookings",
        element: <ManageBookings />
      },
      {
        path: "add-property",
        element: <AddProperty />
      },
      {
        path: "add-events",
        element: <AddEvents />
      },
      // Role:admin
    ],
  },
]);

export default router;

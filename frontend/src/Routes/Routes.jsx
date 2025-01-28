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
import MyBookings from "../Pages/Dashboard/Guest/MyBookings";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import HostRoute from "./HostRoute";
import EventDetails from "../components/Page/Events/EventDetails";

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
        element: <PrivateRoute>
          <MealsCategoryCard />
        </PrivateRoute>,
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
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/event/:id",
        element: <PrivateRoute>
          <EventDetails />
        </PrivateRoute>,
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      // Role:guest
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },

      // Role:host
      {
        path: "add-room",
        element: (
          <PrivateRoute>
            <HostRoute>
              <AddRooms />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-listings",
        element: (
          <PrivateRoute>
            <HostRoute>
              <MyListings />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <PrivateRoute>
            <HostRoute>
              <ManageBookings />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-property",
        element: (
          <PrivateRoute>
            <HostRoute>
              <AddProperty />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-events",
        element: (
          <PrivateRoute>
            <HostRoute>
              <AddEvents />
            </HostRoute>
          </PrivateRoute>
        ),
      },
      // Role:admin
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useMutation, useQuery } from "@tanstack/react-query";
import "react-tabs/style/react-tabs.css";
import RoomDataRow from "../../../../components/TableRows/RoomDataRow";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../../components/Common/LoadingSpinner";
import EventDataRow from "../../../../components/TableRows/EventRow/EventDataRow";
import { useState } from "react";
import BuildingDataRow from "../../../../components/TableRows/PropertiesDataRow/BuildingDataRow";
import LandDataRow from "../../../../components/TableRows/PropertiesDataRow/LandDataRow";
const MyListings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [selected, setSelected] = useState("Building");

  // rooms
  // Fetch  all room data
  const {
    data: rooms = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-listings-room", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/my-listings-room/${user?.email}`
      );
      return data;
    },
  });

  // delete
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/room/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch();
      toast.success("Room deleted successfully");
    },
  });

  // handle delete data
  const handleDelete = async (id) => {
    try {
      await mutateAsync(id);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // event
  // Fetch  all event data
  const { data: events = [] } = useQuery({
    queryKey: ["my-listings-event", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/my-listings-event/${user?.email}`
      );
      return data;
    },
  });

  // building 
  // Fetch  all building data
  const { data: buildings = [] } = useQuery({
    queryKey: ["my-listings-building", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/my-listings-building/${user?.email}`
      );
      return data;
    },
  });
  // Fetch  all land data
  const { data: lands = [] } = useQuery({
    queryKey: ["my-listings-land", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/my-listings-land/${user?.email}`
      );
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <Helmet>
        <title>My Listings | Dashboard</title>
      </Helmet>
      <div>
        <h2 className="text-3xl font-semibold">My Listings</h2>
      </div>
      <div className="mt-10">
        <Tabs className="w-full  ">
          {/* Tabs Navigation */}
          <TabList className="flex border-b border-gray-300 max-w-[400px] mb-3">
            <Tab
              className="flex-1 text-center py-2 font-semibold text-gray-600 hover:text-rose-500 cursor-pointer"
              selectedClassName="text-rose-500 border-b-2 border-rose-500"
            >
              Rooms
            </Tab>
            <Tab
              className="flex-1 text-center py-2 font-semibold text-gray-600 hover:text-rose-500 cursor-pointer"
              selectedClassName="text-rose-500 border-b-2 border-rose-500"
            >
              Property
            </Tab>
            <Tab
              className="flex-1 text-center py-2 font-semibold text-gray-600 hover:text-rose-500 cursor-pointer"
              selectedClassName="text-rose-500 border-b-2 border-rose-500"
            >
              Events
            </Tab>
          </TabList>

          {/* Tab Content */}
          {/* rooms  */}
          <TabPanel className="bg-white ">
            <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-rose-500 text-white text-left">
                    <th className="p-4 font-semibold">#</th>
                    <th className="p-4 font-semibold">Image</th>
                    <th className="p-4 font-semibold">Title</th>
                    <th className="p-4 font-semibold">Location</th>
                    <th className="p-4 font-semibold">Price</th>
                    <th className="p-4 font-semibold">Form</th>
                    <th className="p-4 font-semibold">To</th>
                    <th className="p-4 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-myGray">
                  {/* Room row data */}
                  {rooms?.map((room, index) => (
                    <RoomDataRow
                      key={room._id}
                      room={room}
                      handleDelete={handleDelete}
                      refetch={refetch}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>

          {/* events  */}
          <TabPanel className="bg-white ">
            {/* <div className="flex items-center justify-end gap-3 mb-4">
              <button className="px-4 py-2 bg-rose-500 text-white hover:bg-black text-xl font-bold rounded-md">
                Building
              </button>
              <button className="px-8 py-2 bg-rose-500 text-white hover:bg-black text-xl font-bold rounded-md">
                Land
              </button>
            </div> */}

          <div>
      {/* Buttons */}
      <div className="flex items-center justify-end gap-3 mb-4">
        <button
          className={`px-4 py-2 ${
            selected === "Building" ? "bg-rose-500" : "bg-rose-400"
          } text-white hover:bg-rose-400 text-xl font-bold rounded-md`}
          onClick={() => setSelected("Building")}
        >
          Building
        </button>
        <button
          className={`px-8 py-2 ${
            selected === "Land" ? "bg-rose-500" : "bg-rose-400"
          } text-white hover:bg-rose-400 text-xl font-bold rounded-md`}
          onClick={() => setSelected("Land")}
        >
          Land
        </button>
      </div>

      {/* Content Area */}
      <div className="">
        {selected === "Building" ? (
         <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
         <table className="min-w-full border border-gray-200">
           <thead>
             <tr className="bg-rose-500 text-white text-left">
               <th className="p-4 font-semibold">#</th>
               <th className="p-4 font-semibold">Image</th>
               <th className="p-4 font-semibold">Title</th>
               <th className="p-4 font-semibold">Location</th>
               <th className="p-4 font-semibold">Category</th>
               <th className="p-4 font-semibold">Property Area</th>
               <th className="p-4 font-semibold">Price</th>
               <th className="p-4 font-semibold">Build Year</th>
               <th className="p-4 font-semibold">Form</th>
               <th className="p-4 font-semibold text-center">Actions</th>
             </tr>
           </thead>
           <tbody className="text-myGray">
             {/* building row data */}
             {buildings?.map((building, index) => (
               <BuildingDataRow
                 key={building._id}
                 building={building}
                 refetch={refetch}
                 index={index}
               />
             ))}
           </tbody>
         </table>
       </div>
        ) : (
          <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-rose-500 text-white text-left">
                <th className="p-4 font-semibold">#</th>
                <th className="p-4 font-semibold">Image</th>
                <th className="p-4 font-semibold">Title</th>
                <th className="p-4 font-semibold">Location</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Land Area</th>
                <th className="p-4 font-semibold">Price</th>
                <th className="p-4 font-semibold">Form</th>
                <th className="p-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-myGray">
              {/* building row data */}
              {lands?.map((land, index) => (
                <LandDataRow
                  key={land._id}
                  land={land}
                  refetch={refetch}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
    </div>
          </TabPanel>
          {/* property  */}
          <TabPanel className="bg-white ">
            <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-rose-500 text-white text-left">
                    <th className="p-4 font-semibold">#</th>
                    <th className="p-4 font-semibold">Image</th>
                    <th className="p-4 font-semibold">Title</th>
                    <th className="p-4 font-semibold">Location</th>
                    <th className="p-4 font-semibold">Ticket Price</th>
                    <th className="p-4 font-semibold">Form</th>
                    <th className="p-4 font-semibold">To</th>
                    <th className="p-4 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-myGray">
                  {/* Event row data */}
                  {events?.map((event, index) => (
                    <EventDataRow
                      key={event._id}
                      event={event}
                      refetch={refetch}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MyListings;

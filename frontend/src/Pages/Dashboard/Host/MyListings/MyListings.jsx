import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useMutation, useQuery } from "@tanstack/react-query";
import "react-tabs/style/react-tabs.css";
import RoomDataRow from "../../../../components/TableRows/RoomDataRow";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../../components/Common/LoadingSpinner";
const MyListings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

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
        `/my-listings/room/${user?.email}`
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
          <TabPanel className="bg-white ">
            <h2 className="text-lg font-semibold mb-2">Property</h2>
          </TabPanel>
          <TabPanel className="bg-white ">
            <h2 className="text-lg font-semibold mb-2">Events</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MyListings;

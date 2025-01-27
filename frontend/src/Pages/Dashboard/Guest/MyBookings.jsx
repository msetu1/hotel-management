import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Common/LoadingSpinner";
import MyBookingRoomDataRow from "../../../components/TableRows/MyBookingRoomDataRow";

const MyBookings = () => {
    const { user} = useAuth();
    const axiosSecure = useAxiosSecure();
  
    // fetch all bookings data
    const { data: bookings = [], refetch,isLoading } = useQuery({
      queryKey: ["my-bookings-room", user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/my-bookings-room/${user?.email}`);
        return data;
      },
    });
    if (isLoading) return <LoadingSpinner />;
    return (
        <div>
      <Helmet>
        <title>My Bookings | Dashboard</title>
      </Helmet>
      <div>
        <h2 className="text-3xl font-semibold">My Bookings</h2>
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
                    <th className="p-4 font-semibold">Image & Title</th>
                    <th className="p-4 font-semibold">My Info</th>
                    <th className="p-4 font-semibold">Price</th>
                    <th className="p-4 font-semibold">Form</th>
                    <th className="p-4 font-semibold">To</th>
                    <th className="p-4 font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-myGray">
                  {/* Room row data */}
                  {bookings?.map((booking,index) => (
                    <MyBookingRoomDataRow
                      key={booking._id}
                      booking={booking}
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

export default MyBookings;
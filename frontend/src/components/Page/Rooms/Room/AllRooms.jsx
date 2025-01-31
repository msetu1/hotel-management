import { useQuery } from "@tanstack/react-query";
import RoomCard from "../RoomsCard/RoomCard";
import Container from "../../../Shared/Container";
import Heading from "../../../Common/Heading";
import LoadingSpinner from "../../../Common/LoadingSpinner";
import useAxiosCommon from "../../../../Hooks/useAxiosCommon";
import { useSearchParams } from "react-router-dom";

const AllRooms = () => {
  const axiosCommon = useAxiosCommon();
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms", category],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms?category=${category}`);
      return data;
    },
  });
  console.log(rooms);
  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4  gap-8 gap-y-16">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
          />
        </div>
      )}
    </Container>
  );
};

export default AllRooms;

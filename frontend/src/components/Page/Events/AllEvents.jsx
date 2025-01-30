import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import LoadingSpinner from "../../Common/LoadingSpinner";
import Container from "../../Shared/Container";
import Heading from "../../Common/Heading";
import EventsCard from "./EventsCard";

const AllEvents = () => {
  const axiosCommon = useAxiosCommon();
  const { data: events = [], isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/events`);
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner />;
  return (
    <Container>
      {events && events.length > 0 ? (
        <div className="pt-12 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4  gap-8">
          {events.map((event) => (
            <EventsCard key={event._id} event={event} />
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

export default AllEvents;

import { useParams } from "react-router-dom";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Common/LoadingSpinner";
import EventDetailsBanner from "./EventDetailsBanner";
import { Helmet } from "react-helmet-async";
import Heading from "../../Common/Heading";
import EventReservation from "./EventReservation";
import { MdOutlineEventSeat } from "react-icons/md";
import { MdOutlineAirplaneTicket } from "react-icons/md";
const EventDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();
  const {
    data: event = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/event/${id}`);
      return data;
    },
  });
  console.log(event);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <Helmet>
        <title>Room / Details</title>
      </Helmet>
      <EventDetailsBanner eventImg={event?.image} />
      {event && (
        <div className='max-w-screen-lg mx-auto mt-10'>
          {/* Header */}
          <div className='flex flex-col gap-6'>
            <div className="mt-10">
              <Heading title={event?.title} subtitle={event?.address} />
              <div className='w-full md:h-[60vh] overflow-hidden rounded-xl '>
                <img
                  className='object-cover w-full'
                  src={event?.image}
                  alt='header image'
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            {/* Room Info */}
            <div className='col-span-4 flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <div
                  className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
                >
                  <div>Hosted by {event?.host?.name}</div>

                  <img
                    className='rounded-full'
                    height='30'
                    width='30'
                    alt='Avatar'
                    src={event?.host?.image}
                  />
                </div>
                <div
                  className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
                >
                  <div className="flex items-center gap-2 font-bold">{event?.ticketPrice} <MdOutlineAirplaneTicket/></div>
                  <div className="font-bold">{event?.capacity} capacity</div>
                  <div className="flex items-center gap-2 font-bold">{event?.availableSeats} < MdOutlineEventSeat /></div>
                </div>
              </div>

              <div>
                <h2><span className="font-bold text-xl">Venue:</span> {event?.venue}</h2>
                <h2><span className="font-bold text-xl">Organizer:</span> {event?.organizer}</h2>
              </div>

              <hr />
              <div
                className='
          text-lg font-light text-neutral-500'
              >
                {event?.description}
              </div>
              <hr />
            </div>

            <div className='md:col-span-3 order-first md:order-last mb-10'>
              {/* RoomReservation */}
              <EventReservation event={event} refetch={refetch} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;

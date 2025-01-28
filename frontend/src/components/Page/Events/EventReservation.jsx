import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
// import BookingModal from "../../Modal/BookingModal";
// import { DateRange } from "react-date-range";
import Button from "../../Shared/Button/Button";
import { DateRange } from "react-date-range";

const EventReservation = ({event,refetch,}) => {
    const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(event?.from),
      endDate: new Date(event?.to),
      key: "selection",
    },
  ]);


  const closeModal = () => {
    setIsOpen(false);
  };
    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {event?.ticketPrice}</div>
        <div className="font-light text-neutral-600"> / {event?.time}</div>
      </div>
      <hr />
      <div className="flex justify-center">
        {/* Calendar */}
        <DateRange
          showDateDisplay={false}
          rangeColors={["#F6536D"]}
          onChange={(item) => {
            console.log(item);
            setState([
              {
                startDate: new Date(event?.from),
                endDate: new Date(event?.to),
                key: "selection",
              },
            ]);
          }}
          moveRangeOnFirstSelection={false}
          ranges={state}
          dateDisplayFormat="yyyy-MM-dd" // Correct date format display
        />

      </div>
      <hr />
      <div className="p-4">
        <Button
          disabled={event?.booked===true}
          onClick={() => setIsOpen(true)}
          label={event?.booked ? "booked" : "Reserve"}
        />
      </div>

      {/* Modal  */}
      {/* <BookingModal
        isOpen={isOpen}
        closeModal={closeModal}
        refetch={refetch}
        bookingInfo={{
          ...event,
          price: totalPrice,
          guest: {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
          },
        }}
      /> */}
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$</div>
      </div>
    </div>
    );
};

export default EventReservation;
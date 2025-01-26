import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Import for calendar styles
import "react-date-range/dist/theme/default.css"; // Import for default theme
import { differenceInCalendarDays } from "date-fns";
import useAuth from "../../../../Hooks/useAuth";
import Button from "../../../Shared/Button/Button";
import BookingModal from "../../../Modal/BookingModal";

const RoomReservation = ({ room, refetch }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(room?.from),
      endDate: new Date(room?.to),
      key: "selection",
    },
  ]);

  const closeModal = () => {
    setIsOpen(false);
  };

  // total days*price
  const totalPrice =
    parseInt(
      differenceInCalendarDays(new Date(room?.to), new Date(room?.from))
    ) * room?.price;

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">/ night</div>
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
                startDate: new Date(room?.from),
                endDate: new Date(room?.to),
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
          disabled={room?.booked===true}
          onClick={() => setIsOpen(true)}
          label={room?.booked ? "booked" : "Reserve"}
        />
      </div>

      {/* Modal  */}
      <BookingModal
        isOpen={isOpen}
        closeModal={closeModal}
        refetch={refetch}
        bookingInfo={{
          ...room,
          price: totalPrice,
          guest: {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
          },
        }}
      />
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

export default RoomReservation;

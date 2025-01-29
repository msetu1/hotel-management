import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteEventModal from "../../Modal/EventModal/DeleteEventModal";
import UpdateEventModal from "./UpdateEventModal";
import { format } from "date-fns";

const EventDataRow = ({ event, index, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  let [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
      }`}
    >
      <td className="p-4 font-medium">{index + 1}</td>
      <td className="p-4">
        <img
          src={event?.image}
          className="w-12 h-12 object-cover rounded-md shadow-md"
        />
      </td>
      <td className="p-4 font-medium">{event?.title}</td>
      <td className="p-4">{event?.location}</td>
      <td className="p-4">${event?.price}</td>
      <td className="p-4">{format(new Date(event?.from), "P")}</td>
      <td className="p-4">{format(new Date(event?.to), "P")}</td>

      <td className="p-4 flex justify-center gap-2">
        <button
          onClick={() => setIsEditModalOpen(true)}
          className=" text-rose-500 bg- rounded-full text-2xl"
        >
          <FaEdit />
        </button>
        {/* Update Modal */}
        <UpdateEventModal
          refetch={refetch}
          event={event}
          setIsEditModalOpen={setIsEditModalOpen}
          isOpen={isEditModalOpen}
        />

        <button
          onClick={() => setIsOpen(true)}
          className="text-red-600 bg- rounded-full text-2xl"
        >
          <span className="relative">
            <FaTrash />
          </span>
        </button>

        {/* Delete modal */}
        <DeleteEventModal
          closeModal={closeModal}
          isOpen={isOpen}
          //   handleDelete={handleDelete}
          id={event?._id}
        />
      </td>
    </tr>
  );
};

export default EventDataRow;

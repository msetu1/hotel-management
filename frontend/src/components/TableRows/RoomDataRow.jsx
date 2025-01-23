import { format } from "date-fns";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteModal from "../Modal/DeleteModal";

const RoomDataRow = ({ room, handleDelete, index }) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
      }`}
    >
      <td className="p-4 font-medium">1</td>
      <td className="p-4">
        <img
          src={room?.image}
          className="w-12 h-12 object-cover rounded-md shadow-md"
        />
      </td>
      <td className="p-4 font-medium">{room?.title}</td>
      <td className="p-4">{room?.location}</td>
      <td className="p-4">${room?.price}</td>
      <td className="p-4">{format(new Date(room?.from), "P")}</td>
      <td className="p-4">{format(new Date(room?.to), "P")}</td>

      <td className="p-4 flex justify-center gap-2">
        <button className=" text-rose-500 bg- rounded-full text-2xl">
          <FaEdit />
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="text-red-600 bg- rounded-full text-2xl"
        >
          <span className="relative">
            <FaTrash />
          </span>
        </button>

        {/* Delete modal */}
        <DeleteModal
          closeModal={closeModal}
          isOpen={isOpen}
          handleDelete={handleDelete}
          id={room?._id}
        />
      </td>
    </tr>
  );
};

export default RoomDataRow;

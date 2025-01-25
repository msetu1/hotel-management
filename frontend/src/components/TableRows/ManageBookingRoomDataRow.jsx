import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import DeleteModal from "../Modal/DeleteModal";

const ManageBookingRoomDataRow = ({ index, booking, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);

  // close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // delete
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/booking/${id}`);
      return data;
    },
    onSuccess: async (data) => {
      console.log(data);
      refetch();
      toast.success("Booking cancelled!");

      // change room booked status back to false
      await axiosSecure.patch(`/room/status/${booking?.roomId}`, {
        status: false,
      });
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

  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
      }`}
    >
      <td className="p-4 font-medium">{index + 1}</td>
      <td className="p-4">
        <img
          src={booking?.image}
          className="w-12 h-12 object-cover rounded-md shadow-md"
        />
      </td>
      <td className="p-4 font-medium">{booking?.title}</td>
      <td className="p-4">{booking?.location}</td>
      <td className="p-4">${booking?.price}</td>
      <td className="p-4">{format(new Date(booking?.from), "P")}</td>
      <td className="p-4">{format(new Date(booking?.to), "P")}</td>

      <td className="p-4 flex justify-center gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Cancel</span>
        </button>
        {/* Delete Modal */}
        <DeleteModal
          closeModal={closeModal}
          isOpen={isOpen}
          id={booking?._id}
          handleDelete={handleDelete}
        />
      </td>
    </tr>
  );
};

export default ManageBookingRoomDataRow;

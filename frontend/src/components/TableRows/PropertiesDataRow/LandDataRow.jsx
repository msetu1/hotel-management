import { format } from "date-fns";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import DeleteLandModal from "../../Modal/PropertiesModal/DeleteLandModal";
import UpdateLandModal from "../../Modal/PropertiesModal/UpdateLandModal";

const LandDataRow = ({ land, index, refetch }) => {
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  let [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  const handleToggleText = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };
  console.log(land);

  const closeModal = () => {
    setIsOpen(false);
  };

  // delete
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/building/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetch();
      toast.success("Building data deleted successfully");
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
          src={land?.image}
          className="w-12 h-12 object-cover rounded-md shadow-md"
        />
      </td>
      <td className="p-4 font-medium">
        <p className="text-gray-900 whitespace-no-wrap">
          {isFullTextVisible ? land?.title : `${land?.title.slice(0, 12)}...`}{" "}
          <span
            onClick={handleToggleText}
            className="underline text-blue-500 cursor-pointer"
          >
            {isFullTextVisible ? "less" : "more"}
          </span>
        </p>
      </td>

      <td className="p-4">{land?.location}</td>
      <td className="p-4">
        <span className="px-3 py-1 bg-red-100 text-red-900 hover:bg-red-200 rounded-full text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 font-medium">
          {land.category}
        </span>
      </td>
      <td className="p-4">{}</td>
      <td className="p-4">${land?.price}</td>
      <td className="p-4">{format(new Date(land?.from), "P")}</td>

      <td className="p-4 flex justify-center gap-2">
        <button
          onClick={() => setIsEditModalOpen(true)}
          className=" text-rose-500 bg- rounded-full text-2xl"
        >
          <FaEdit />
        </button>
        {/* Update Modal */}
        <UpdateLandModal
          refetch={refetch}
          land={land}
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
        <DeleteLandModal
          closeModal={closeModal}
          isOpen={isOpen}
          handleDelete={handleDelete}
          id={land?._id}
        />
      </td>
    </tr>
  );
};

export default LandDataRow;

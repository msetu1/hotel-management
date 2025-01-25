import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import UpdateUserModal from "../Modal/UpdateUserModal";

const UserDataRow = ({ user, refetch, index }) => {
  const { user: loggedInUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);

  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosSecure.patch(
        `/users/update/${user?.email}`,
        role
      );
      return data;
    },
    onSuccess: (data) => {
      refetch();
      console.log(data);
      toast.success("User role Updated successfully!");
      setIsOpen(false);
    },
  });

  const modalHandler = async (selected) => {
    if (loggedInUser.email === user?.email) {
      toast.error("Action not allowed");
      return setIsOpen(false);
    }

    const userRole = {
      role: selected,
      status: "Verified",
    };
    try {
      await mutateAsync(userRole);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <tr
      className={`${
        index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
      }`}
    >
      <td className="p-4 font-medium">{index + 1}</td>
      <td className="p-4">{user?.email}</td>
      <td className="p-4 font-medium">{user?.role}</td>
      <td className="p-4">
        {user?.status ? (
          <p
            className={`${
              user.status === "Verified" ? "text-green-500" : "text-yellow-500"
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
        )}
      </td>

      <td className="p-4 flex justify-center gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Update Role</span>
        </button>
        {/* Update User Modal */}
        <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalHandler={modalHandler}
          user={user}
        />
      </td>
    </tr>
  );
};

export default UserDataRow;

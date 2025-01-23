import { FaEdit, FaTrash } from "react-icons/fa";

const Example = () => {
  return (
    <div>
      <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-rose-500 text-white text-left">
              <th className="p-4 font-semibold">#</th>
              <th className="p-4 font-semibold">Image</th>
              <th className="p-4 font-semibold">Title</th>
              <th className="p-4 font-semibold">Category</th>
              <th className="p-4 font-semibold">Rating && View</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-myGray">
            <tr
            //   className={`${
            //     index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
            //   }`}
            >
              <td className="p-4 font-medium">1</td>
              <td className="p-4">
                <img
                  className="w-12 h-12 object-cover rounded-md shadow-md"
                />
              </td>
              <td className="p-4 font-medium">tttitlr</td>
              <td className="p-4">modern</td>
              <td className="p-4">
                <p className="flex items-center gap-1">
                 
                </p>
                <span>
                  <span className="text-sm">Total View</span>
                </span>
              </td>

              <td className="p-4 flex justify-center gap-2">
                <button
               
                  className=" text-rose-500 bg- rounded-full text-2xl"
                >
                  <FaEdit />
                </button>
                <button
                  
                  className="text-red-600 bg- rounded-full text-2xl"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Example;

import { FaAddressCard, FaCamera, FaEnvelope, FaUser } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
const HostLeftSideber = () => {
  return (
    <div>
      <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col font-inter">
        <div className="flex flex-col items-center">
          <figure className="relative">
            <img
            //   src={user?.image}
              alt="User"
              className="w-32 h-32 rounded-full mb-4 border-8 border-primary"
            />
            {/* Edit Icon Overlay with FaEdit */}
            <div title="Edit image">
              <label
                htmlFor="upload-image"
                className="absolute bottom-3 right-3 bg-primary text-white p-2 rounded-full cursor-pointer"
              >
                <FaCamera />
                <input
                  type="file"
                  id="upload-image"
                  accept="image/*"
                  className="hidden"
                //   onChange={handleImageChange}
                />
              </label>
            </div>
          </figure>
          <h1 className="text-xl font-semibold text-primaryBold">
            {/* {user?.name} */}
          </h1>
          <p className="text-gray-600 mt-1 flex items-center">
            <FaEnvelope className="mr-1 text-primary" /> 
            {/* {user?.email} */}
          </p>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Profile Completion</p>
            <p className="text-primary">
                {/* {profileCompletion} */}
                
                %</p>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
            <div
              className="bg-indigo-500 h-2 rounded-full"
            //   style={{ width: `${profileCompletion}%` }}
            ></div>
          </div>
        </div>
        <div className="">
            <h2>dfg</h2>
            <h2>dfg</h2>
            <h2>dfg</h2>
        </div>
        <button className="mt-8 w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-primary text-white">
          <FaEdit /> <span>Update Profile</span>
        </button>
      </div>
    </div>
  );
};

export default HostLeftSideber;

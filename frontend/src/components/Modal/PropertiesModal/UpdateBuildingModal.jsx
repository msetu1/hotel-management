import { Fragment, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { imageUpload } from "../../../utils";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import UpdateBuildingForm from "../../Form/PropertyForm/UpdateBuildingForm";

const UpdateBuildingModal = ({
  setIsEditModalOpen,
  isOpen,
  building,
  refetch,
}) => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [buildingData, setBuildingData] = useState(building);
console.log("propertyFeatures Data:", building?.propertyFeatures)
console.log("propertyFeatures Data:", buildingData?.propertyFeatures)
  const [dates, setDates] = useState({
    startDate: new Date(building?.from),
    endDate: new Date(building?.to),
    key: "selection",
  });

  
  // date range handler
  const handleDates = (item) => {
    setDates(item.selection);
    setBuildingData({
      ...buildingData,
      to: item.selection.endDate,
      from: item.selection.startDate,
    });
  };

  // handle image update
  const handleImage = async (image) => {
    setLoading(true);
    try {
      // upload image
      const image_url = await imageUpload(image);
      setBuildingData({ ...buildingData, image: image_url });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.message);
    }
  };

  // update data
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const updateBuildingData = Object.assign({}, buildingData);
    delete updateBuildingData._id;

    try {
      const { data } = await axiosSecure.put(
        `/building-update/${building?._id}`,
        updateBuildingData
      );
      console.log(data);
      refetch();
      setIsEditModalOpen(false);
      setLoading(false);
      toast.success("building Data updated successfully");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.message);
    }
  };
console.log("propertyFeatures Data:", buildingData?.propertyFeatures)
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsEditModalOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-[1000px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Update Room Info
                </DialogTitle>
                <div className="mt-2 w-full">
                  {/* Update room form */}
                  <UpdateBuildingForm
                    handleSubmit={handleSubmit}
                    handleDates={handleDates}
                    dates={dates}
                    handleImage={handleImage}
                    loading={loading}
                    setBuildingData={setBuildingData}
                    buildingData={buildingData}
                  />
                </div>
                <hr className="mt-8 " />
                <div className="mt-2 ">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateBuildingModal;

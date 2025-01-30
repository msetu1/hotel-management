import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AddBuildingForm from "./AddBuildingForm";
import AddLandForm from "./AddLandForm";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useState } from "react";

const AddProperty = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user, loading, setLoading } = useAuth();
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState("Upload Image");
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  // date range handler
  const handleDates = (item) => {
    setDates(item.selection);
  };

  const handleBuildingSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const location = form.location.value;
    const buildingData = {
      location,
    };

    console.log("New Property Data:", buildingData);
    // Logic for submitting building data
  };
  const handleLandSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const location = form.location.value;
    const title = form.title.value;
    const category = form.category.value;
    const price = form.category.value;
    const description = form.description.value;

    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };

    const landData = {
      location,
      title,
      category,
      price,
      description,
      image,
      host,
    };
    console.log(landData);

    // Logic for submitting land data
  };

  // handle image changes
  const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name);
  };
  return (
    <div className="">
      <h2 className="text-2xl font-bold  mb-6">Add Property for Sale</h2>
      <Tabs className="w-full  ">
        {/* Tabs Navigation */}
        <TabList className="flex border-b border-gray-300 max-w-[400px] mb-3">
          <Tab
            className="flex-1 text-center py-2 font-semibold text-gray-600 hover:text-rose-500 cursor-pointer"
            selectedClassName="text-rose-500 border-b-2 border-rose-500"
          >
            Building
          </Tab>
          <Tab
            className="flex-1 text-center py-2 font-semibold text-gray-600 hover:text-rose-500 cursor-pointer"
            selectedClassName="text-rose-500 border-b-2 border-rose-500"
          >
            Land
          </Tab>
        </TabList>

        {/* Tab Content */}
        {/* Building */}
        <TabPanel className="bg-white ">
          <AddBuildingForm
            handleBuildingSubmit={handleBuildingSubmit}
            dates={dates}
            handleDates={handleDates}
            setImagePreview={setImagePreview}
            imagePreview={imagePreview}
            handleImage={handleImage}
            imageText={imageText}
            loading={loading}
          />
        </TabPanel>
        {/* Land  */}
        <TabPanel className="bg-white ">
          <AddLandForm
            handleLandSubmit={handleLandSubmit}
            dates={dates}
            handleDates={handleDates}
            setImagePreview={setImagePreview}
            imagePreview={imagePreview}
            handleImage={handleImage}
            imageText={imageText}
            loading={loading}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AddProperty;

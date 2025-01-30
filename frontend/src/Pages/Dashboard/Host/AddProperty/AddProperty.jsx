import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AddBuildingForm from "./AddBuildingForm";
import AddLandForm from "./AddLandForm";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { imageUpload } from "../../../../utils";

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
    const to = dates.endDate;
    const from = dates.startDate;
    const location = form.location.value;
    const property_tax = form.property_tax.checkbox;
    const total_floor = form.total_floor.value;
    const living_room_length = form.living_room_length.value;
    const living_room_width = form.living_room_width.value;
    const kitchen_length = form.kitchen_length.value;
    const kitchen_width = form.kitchen_width.value;
    const bedrooms_length = form.bedrooms_length.value;
    const bedrooms_width = form.bedrooms_width.value;
    const bathrooms_length = form.bathrooms_length.value;
    const bathrooms_width = form.bathrooms_width.value;
    const title = form.title.value;
    const investment = form.investment.checkbox;
    const road_access = form.road_access.checkbox;
    const price = form.price.value;
    const ownership_type = form.ownership_type.value;
    const sale_status = form.sale_status.value;
    const legal_status = form.legal_status.value;
    const description = form.description.value;
    const year_build = form.year_build.value;
    const parking_availability = form.parking_availability.checkbox;
    const category = form.category.value;
    const garden_feature = form.garden_feature.checkbox;
    const pool_feature = form.pool_feature.checkbox;
    const garage_feature = form.garage_feature.checkbox;
    const security_systems = form.security_systems.checkbox;
    const swimming_pool = form.swimming_pool.checkbox;
    const gym_amenities = form.gym_amenities.checkbox;
    const power_backup = form.power_backup.checkbox;
    const sauna_amenities = form.sauna_amenities.checkbox;
    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };

    const image_url = await imageUpload(image);
    const buildingData = {
      to,
      from,
      location,
      property_tax,
      total_floor,
      living_room_length,
      living_room_width,
      kitchen_length,
      kitchen_width,
      bedrooms_length,
      bedrooms_width,
      bathrooms_length,
      bathrooms_width,
      title,
      investment,
      road_access,
      image: image_url,
      price,
      ownership_type,
      sale_status,
      legal_status,
      description,
      year_build,
      parking_availability,
      category,
      garden_feature,
      pool_feature,
      garage_feature,
      security_systems,
      swimming_pool,
      gym_amenities,
      power_backup,
      sauna_amenities,

      host,
    };

    console.table(buildingData);
    console.log(buildingData);
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

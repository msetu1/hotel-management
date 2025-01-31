import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AddBuildingForm from "./AddBuildingForm";
import AddLandForm from "./AddLandForm";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { imageUpload } from "../../../../utils";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AddProperty = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user, loading, setLoading } = useAuth();
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState("Upload Image");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [investment, setInvestment] = useState(""); // Stores "yes" or "no"
  const [roadAccess, setRoadAccess] = useState(""); // Stores "yes" or "no"

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  // date range handler
  const handleDates = (item) => {
    setDates(item.selection);
  };

  //  building checked
  const handleFeatureChange = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const { mutateAsync: addBuilding } = useMutation({
    mutationFn: async (buildingData) => {
      const { data } = await axiosSecure.post(`/building`, buildingData);
      return data;
    },
    onSuccess: () => {
      toast.success("Building data Added successfully !");
      navigate("/dashboard/my-listings");
      setLoading(false);
    },
  });

  const handleBuildingSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const to = dates.endDate;
    const from = dates.startDate;
    const location = form.location.value;
    const property_tax = form.property_tax.checked;
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
    const price = form.price.value;
    const ownership_type = form.ownership_type.value;
    const sale_status = form.sale_status.value;
    const legal_status = form.legal_status.value;
    const description = form.description.value;
    const year_build = form.year_build.value;
    const parking_availability = form.parking_availability.checked;
    const category = form.category.value;
    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };

    try {
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
        roadAccess,
        image: image_url,
        price,
        ownership_type,
        sale_status,
        legal_status,
        description,
        year_build,
        parking_availability,
        category,
        host,
        features: selectedFeatures,
        amenities: selectedAmenities,
      };
      
      await  addBuilding(buildingData);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const { mutateAsync: addLand } = useMutation({
    mutationFn: async (landData) => {
      const { data } = await axiosSecure.post(`/land`, landData);
      return data;
    },
    onSuccess: () => {
      toast.success("land data Added successfully !");
      navigate("/dashboard/my-listings");
      setLoading(false);
    },
  });

  const handleLandSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const to = dates.endDate;
    const from = dates.startDate;
    const location = form.location.value;
    const category = form.category.value;
    const property_tax = form.property_tax.checked;
    const katha = form.katha.value;
    const title = form.title.value;
    const price = form.price.value;
    const ownership_type = form.ownership_type.value;
    const sale_status = form.sale_status.value;
    const legal_status = form.legal_status.value;
    const description = form.description.value;

    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };

    // Logic for submitting land data
    try {
      const image_url = await imageUpload(image);
      const landData = {
        to,
        from,
        location,
        category,
        property_tax,
        katha,
        title,
        investment,
        roadAccess,
        image: image_url,
        price,
        ownership_type,
        sale_status,
        legal_status,
        description,
        host,
      };
  
      await  addLand(landData);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
    
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
            handleFeatureChange={handleFeatureChange}
            handleAmenityChange={handleAmenityChange}
            investment={investment}
            setInvestment={setInvestment}
            roadAccess={roadAccess}
            setRoadAccess={setRoadAccess}
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
            investment={investment}
            setInvestment={setInvestment}
            roadAccess={roadAccess}
            setRoadAccess={setRoadAccess}
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

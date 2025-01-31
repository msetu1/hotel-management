import { DateRange } from "react-date-range";
import {
  amenities,
  buildingcategory,
  legalStatus,
  ownershipType,
  propertyFeatures,
  saleStatus,
} from "../../Category/BuildingCategoryData";
import { useEffect } from "react";

const UpdateBuildingForm = ({
  handleSubmit,
  handleDates,
  dates,
  handleImage,
  setBuildingData,
  buildingData,
}) => {
    console.log(buildingData)
  const handleCheckboxChange = (category, value) => {
    setBuildingData((prev) => {
      const updatedValues = prev[category]?.includes(value)
        ? prev[category].filter((item) => item !== value) // Uncheck
        : [...(prev[category] || []), value]; // Check

      return { ...prev, [category]: updatedValues };
    });
  };
  useEffect(() => {
    setBuildingData({
      ...buildingData,
      investment: buildingData?.investment || "yes", // ✅ Default value "yes"
    });
  }, []);
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex lg:flex-row   justify-center items-center text-gray-800 rounded-xl bg-gray-50 pt-5">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3">
          {/* location  */}
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block text-gray-600">
              Location
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="location"
              id="location"
              type="text"
              value={buildingData?.location}
              onChange={(e) => {
                setBuildingData({ ...buildingData, location: e.target.value });
              }}
              placeholder="Location"
              required
            />
          </div>
          {/* title  */}
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600">
              Title
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="title"
              id="title"
              type="text"
              value={buildingData?.title}
              onChange={(e) => {
                setBuildingData({ ...buildingData, title: e.target.value });
              }}
              placeholder="Title"
              required
            />
          </div>

          {/* investment and rood access  */}
          {/* <div className="flex justify-between gap-2">
            <div className="w-full">
              <label className="block font-medium">Investment Option</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="investment"
                    value="yes"
                    className="mr-2"
                    //   checked={investment === "yes"}
                    //   onChange={() => setInvestment("yes")}
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="investment"
                    value="no"
                    className="mr-2"
                    //   checked={investment === "no"}
                    //   onChange={() => setInvestment("no")}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="w-full">
              <label className="block font-medium">Road Access</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="roadAccess"
                    value="yes"
                    className="mr-2"
                    //   checked={roadAccess === "yes"}
                    //   onChange={() => setRoadAccess("yes")}
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="road_access"
                    value="no"
                    className="mr-2"
                    //   checked={roadAccess === "no"}
                    //   onChange={() => setRoadAccess("no")}
                  />
                  No
                </label>
              </div>
            </div>
          </div> */}
          <div className="flex justify-between gap-2">
          <div className="w-full">
  <label className="block font-medium">Investment Option</label>
  <div className="flex items-center space-x-4">
    <label className="flex items-center">
      <input
        type="radio"
        name="investment"
        value="yes"
        checked={buildingData?.investment === "yes"} // ✅ Check correctly
        onChange={(e) => {
          setBuildingData({
            ...buildingData,
            investment: e.target.value, // ✅ Save "yes" or "no" instead of true/false
          });
        }}
        className="mr-2"
      />
      Yes
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="investment"
        value="no"
        checked={buildingData?.investment === "no"} // ✅ Check correctly
        onChange={(e) => {
          setBuildingData({
            ...buildingData,
            investment: e.target.value, // ✅ Save "yes" or "no"
          });
        }}
        className="mr-2"
      />
      No
    </label>
  </div>
</div>


  {/* Road Access */}
  <div className="w-full">
    <label className="block font-medium">Road Access</label>
    <div className="flex items-center space-x-4">
      <label className="flex items-center">
        <input
          type="radio" // ✅ Use radio instead of checkbox
          name="roadAccess"
          value="yes"
          checked={buildingData?.roadAccess|| true} 
          onChange={(e) => {
            setBuildingData({
              ...buildingData,
              roadAccess: e.target.checked, 
            });
          }}
          className="mr-2"
        />
        Yes
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="roadAccess"
          value="no"
          checked={buildingData?.roadAccess|| false} 
              onChange={(e) => {
                setBuildingData({
                  ...buildingData,
                  roadAccess: e.target.checked, 
                });
              }}
          className="mr-2"
        />
        No
      </label>
    </div>
  </div>
</div>

          {/* category  */}
          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600">
              Category
            </label>
            <select
              required
              value={buildingData?.category}
              onChange={(e) => {
                setBuildingData({ ...buildingData, category: e.target.value });
              }}
              className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
              name="category"
            >
              {buildingcategory.map((category) => (
                <option value={category.label} key={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* living room  */}
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label
                htmlFor="living_room_length"
                className="block text-gray-600"
              >
                livingRoom Length (ft)
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="living_room_length"
                id="living_room_length"
                type="number"
                value={buildingData?.living_room_length}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    living_room_length: e.target.value,
                  });
                }}
                placeholder="Length"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="living_room_width"
                className="block text-gray-600"
              >
                livingRoom Width (ft)
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="living_room_width"
                id="living_room_width"
                type="number"
                value={buildingData?.living_room_width}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    living_room_width: e.target.value,
                  });
                }}
                placeholder="Width"
                required
              />
            </div>
          </div>
          {/* Property Tax and total flor  */}
          <div className="flex justify-between items-center gap-2">
            {/* Property Tax  */}
            <div className="w-full">
              <label className="block font-medium">Property Tax</label>
              <input type="checkbox" name="property_tax"
              checked={buildingData?.property_tax || false} 
              onChange={(e) => {
                setBuildingData({
                  ...buildingData,
                  property_tax: e.target.checked, 
                });
              }}
              className="mr-2" />
              Yes
            </div>

            {/* Total Floor  */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="total_floor" className="block text-gray-600">
                Total Floor
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="total_floor"
                id="total_floor"
                type="number"
                value={buildingData?.total_floor}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    total_floor: e.target.value,
                  });
                }}
                placeholder="Total Floor"
                required
              />
            </div>
          </div>

          {/* kitchen  */}
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="kitchen_length" className="block text-gray-600">
                kitchen Length (ft)
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="kitchen_length"
                id="kitchen_length"
                type="number"
                value={buildingData?.kitchen_length}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    kitchen_length: e.target.value,
                  });
                }}
                placeholder="Length"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="kitchen_width" className="block text-gray-600">
                kitchen Width (ft)
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="kitchen_width"
                id="kitchen_width"
                type="number"
                value={buildingData?.kitchen_width}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    kitchen_width: e.target.value,
                  });
                }}
                placeholder="Width"
                required
              />
            </div>
          </div>
          {/* Sale Status and Legal Status */}
          <div className="flex justify-between gap-2">
            {/* Sale Status */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="sale_status" className="block text-gray-600">
                Sale Status
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md border"
                name="sale_status"
                value={buildingData?.sale_status}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    sale_status: e.target.value,
                  });
                }}
              >
                {saleStatus.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Legal Status */}
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="legal_status" className="block text-gray-600">
                Legal Status
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md border"
                name="legal_status"
                value={buildingData?.legal_status}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    legal_status: e.target.value,
                  });
                }}
              >
                {legalStatus.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* bedrooms  */}
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="bedrooms_length" className="block text-gray-600">
                bedrooms Length (ft)
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="bedrooms_length"
                id="bedrooms_length"
                type="number"
                value={buildingData?.bedrooms_length}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    bedrooms_length: e.target.value,
                  });
                }}
                placeholder="Length"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="bedrooms_width" className="block text-gray-600">
                bedrooms Width (ft)
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="bedrooms_width"
                id="bedrooms_width"
                type="number"
                value={buildingData?.bedrooms_width}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    bedrooms_width: e.target.value,
                  });
                }}
                placeholder="Width"
                required
              />
            </div>
          </div>
          {/* price and Ownership Type  */}
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="price" className="block text-gray-600">
                Price
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="price"
                id="price"
                type="number"
                value={buildingData?.price}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    price: e.target.value,
                  });
                }}
                placeholder="Price"
                required
              />
            </div>
            {/* Ownership Type  */}
            <div className="space-y-1 text-sm w-full ">
              <label htmlFor="ownership_type" className="block text-gray-600">
                Ownership Type
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md border"
                name="ownership_type"
                value={buildingData?.ownership_type}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    ownership_type: e.target.value,
                  });
                }}
              >
                {ownershipType.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* bathrooms */}
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="bathrooms_length" className="block text-gray-600">
                bathrooms Length (ft)
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="bathrooms_length"
                id="bathrooms_length"
                type="number"
                value={buildingData?.bathrooms_length}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    bathrooms_length: e.target.value,
                  });
                }}
                placeholder="Length"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="bathrooms_width" className="block text-gray-600">
                bathrooms Width (ft)
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="bathrooms_width"
                id="bathrooms_width"
                type="number"
                value={buildingData?.bathrooms_width}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    bathrooms_width: e.target.value,
                  });
                }}
                placeholder="Width"
                required
              />
            </div>
          </div>
          {/* image  */}
          <div className=" p-4  bg-white w-full  m-auto rounded-lg">
            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="image"
                    onChange={(e) => handleImage(e.target.files[0])}
                    id="image"
                    accept="image/*"
                    hidden
                  />
                  <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                    Upload Image
                  </div>
                </label>
              </div>
            </div>
          </div>
          {/* date  */}
          <div className="space-y-1">
            <label htmlFor="location" className="block text-gray-600">
              Select Availability Range
            </label>
            <div className="flex justify-center pt-2">
              {/* Calender */}
              <DateRange
                rangeColors={["#F6536D"]}
                editableDateInputs={true}
                onChange={(item) => handleDates(item)}
                moveRangeOnFirstSelection={false}
                ranges={[dates]}
                dateDisplayFormat="yyyy-MM-dd" // Correct date format display
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Property Features */}
            {/* <div>
              <label className="block font-medium">Property Features</label>
              <div className="flex text-sm justify-between items-center space-y-2">
                {propertyFeatures?.map((feature) => (
                  <label key={feature} className="flex items-center">
                    <input
                      name="feature"
                      type="checkbox"
                      value={feature}
                      className="mr-2"
                     
                    />
                    {feature}
                  </label>
                ))}
              </div>
            </div> */}
            {/* Amenities */}
            {/* <div>
              <label className="block font-medium">Amenities</label>
              <div className="flex text-sm justify-between items-center space-y-2">
                {amenities?.map((amenity) => (
                  <label key={amenity} className="flex items-center">
                    <input
                      name="amenity"
                      type="checkbox"
                      value={amenity}
                      className="mr-2"
                     
                    />
                    {amenity}
                  </label>
                ))}
              </div>
            </div> */}

            {/* Property Features */}
            <div>
              <label className="block font-medium">Property Features</label>
              <div className="flex text-sm justify-between items-center space-y-2">
                {propertyFeatures?.map((feature) => (
                  <label key={feature} className="flex items-center">
                    <input
                      name="feature"
                      type="checkbox"
                      value={feature}
                      className="mr-2"
                      checked={
                        buildingData?.propertyFeatures?.includes(feature) ||
                        false
                      } // ✅ Show default values
                      onChange={(e) =>
                        handleCheckboxChange("propertyFeatures", feature)
                      }
                    />
                    {feature}
                  </label>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <label className="block font-medium">Amenities</label>
              <div className="flex text-sm justify-between items-center space-y-2">
                {amenities?.map((amenity) => (
                  <label key={amenity} className="flex items-center">
                    <input
                      name="amenity"
                      type="checkbox"
                      value={amenity}
                      className="mr-2"
                      checked={
                        buildingData.amenities?.includes(amenity) || false
                      } // ✅ Show default values
                      onChange={(e) =>
                        handleCheckboxChange("amenities", amenity)
                      }
                    />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>

            {/* Year build and parking availability */}
            <div className="flex justify-between items-center gap-2">
              {/* Parking Availability */}
              <div className="w-1/2">
                <label className="block font-medium">
                  Parking Availability
                </label>
                <input
                  type="checkbox"
                  name="parking_availability"
                  checked={buildingData?.parking_availability || false} 
                  onChange={(e) => {
                    setBuildingData({
                      ...buildingData,
                      parking_availability: e.target.checked, 
                    });
                  }}
                  className="mr-2"
                />
                Yes
              </div>
              {/* Year build  */}
              <div className="space-y-1 text-sm w-1/2">
                <label htmlFor="year_build" className="block text-gray-600">
                  Year build
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="year_build"
                  id="year_build"
                  type="number"
                  value={buildingData?.year_build}
                  onChange={(e) => {
                    setBuildingData({
                      ...buildingData,
                      year_build: e.target.value,
                    });
                  }}
                  placeholder="Year Build"
                  required
                />
              </div>
            </div>

            {/* description  */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                value={buildingData?.description}
                onChange={(e) => {
                  setBuildingData({
                    ...buildingData,
                    description: e.target.value,
                  });
                }}
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                name="description"
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateBuildingForm;

import { DateRange } from "react-date-range";
import {
  buildingcategory,
  legalStatus,
  ownershipType,
  saleStatus,
} from "../../../../components/Category/BuildingCategoryData";
import { TbFidgetSpinner } from "react-icons/tb";

const AddBuildingForm = ({
  dates,
  handleDates,
  handleBuildingSubmit,
  imagePreview,
  handleImage,
  imageText,
  loading,
}) => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 px-56 mt-5">
      <form onSubmit={handleBuildingSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>
            <div className="flex justify-between items-center gap-2">
              {/* Property Tax  */}
              <div className="w-full">
                <label className="block font-medium">Property Tax</label>
                <input type="checkbox" name="property_tax" className="mr-2" />
                Yes
              </div>

              {/* Nearby Facilities  */}
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="total_floor" className="block text-gray-600">
                  Total Floor
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="total_floor"
                  id="total_floor"
                  type="number"
                  placeholder="Total Floor"
                  required
                />
              </div>
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
                  placeholder="Width"
                  required
                />
              </div>
            </div>

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
                  placeholder="Width"
                  required
                />
              </div>
            </div>
            {/* bedrooms  */}
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="bedrooms_length"
                  className="block text-gray-600"
                >
                  bedrooms Length (ft)
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="bedrooms_length"
                  id="bedrooms_length"
                  type="number"
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
                  placeholder="Width"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="bathrooms_length"
                  className="block text-gray-600"
                >
                  bathrooms Length (ft)
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="bathrooms_length"
                  id="bathrooms_length"
                  type="number"
                  placeholder="Length"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="bathrooms_width"
                  className="block text-gray-600"
                >
                  bathrooms Width (ft)
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="bathrooms_width"
                  id="bathrooms_width"
                  type="number"
                  placeholder="Width"
                  required
                />
              </div>
            </div>

            {/* date  */}
            <div className="space-y-1">
              <label htmlFor="location" className="block text-gray-600">
                Select Availability Range
              </label>
              {/* Calender */}

              <DateRange
                rangeColors={["#F6536D"]}
                editableDateInputs={true}
                onChange={(item) => handleDates(item)}
                moveRangeOnFirstSelection={false}
                ranges={[dates]}
                dateDisplayFormat="yyyy-MM-dd"
                minDate={new Date()}
              />
            </div>
          </div>

          <div className="space-y-6">
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
                placeholder="Title"
                required
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="w-full">
                <label className="block font-medium">Investment Option</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="investment"
                      value="yes"
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="investment"
                      value="no"
                      className="mr-2"
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
                      name="road_access"
                      value="yes"
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="road_access"
                      value="no"
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            {/* image  */}
            <div className=" p-4 bg-white w-full  m-auto rounded-lg flex gap-3 justify-around items-center">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      onChange={(e) => handleImage(e.target.files[0])}
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                      {/* {imageText} */}
                      {imageText?.length > 20
                        ? imageText.split(".")[0].slice(0, 15) +
                          "..." +
                          imageText.split(".")[1]
                        : imageText}
                    </div>
                  </label>
                </div>
              </div>
              <div className="h-20 w-20 object-cover overflow-hidden border ">
                {imagePreview && <img src={imagePreview} />}
              </div>
            </div>

            {/* price  */}
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
                >
                  {ownershipType.map((category) => (
                    <option value={category.label} key={category.label}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

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
                >
                  {legalStatus.map((category) => (
                    <option value={category.label} key={category.label}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* description  */}
            <div className="space-y-1 text-sm ">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                name="description"
              ></textarea>
            </div>

            <div className="flex justify-between items-center gap-2">
              {/* Year build  */}
              <div className="w-full">
                <label className="block font-medium">Year Build</label>
                <input type="checkbox" name="year_build" className="mr-2" />
                Yes
              </div>
              {/* Property Tax  */}
              <div className="w-full">
                <label className="block font-medium">
                  Parking Availability
                </label>
                <input
                  type="checkbox"
                  name="parking_availability"
                  className="mr-2"
                />
                Yes
              </div>
            </div>
            {/* category  */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md border"
                name="category"
              >
                {buildingcategory.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Features */}
            <div>
              <label htmlFor="property_features" className="block font-medium">
                Property Features
              </label>
              <div className="flex text-sm justify-between items-center space-y-2  ">
                <label className="flex items-center">
                  <input
                    name="garden_feature"
                    type="checkbox"
                    className="mr-2"
                    value="Garden"
                  />
                  Garden
                </label>
                <label className="flex items-center">
                  <input
                    name="pool_feature"
                    type="checkbox"
                    className="mr-2"
                    value="Pool"
                  />
                  Pool
                </label>
                <label className="flex items-center">
                  <input
                    name="garage_feature"
                    type="checkbox"
                    className="mr-2"
                    value="Garage"
                  />
                  Garage
                </label>
                <label className="flex items-center">
                  <input
                    name="security_systems"
                    type="checkbox"
                    className="mr-2"
                    value="Security Systems"
                  />
                  Security Systems
                </label>
              </div>
            </div>
            {/* Amenities  */}
            <div>
              <label htmlFor="amenities" className="block font-medium">
                Amenities
              </label>
              <div className="flex text-sm justify-between items-center space-y-2  ">
                <label className="flex items-center">
                  <input
                    name="swimming_pool"
                    type="checkbox"
                    className="mr-2"
                    value="Swimming Pool"
                  />
                  Swimming Pool
                </label>
                <label className="flex items-center">
                  <input
                    name="gym_amenities"
                    type="checkbox"
                    className="mr-2"
                    value="Gym"
                  />
                  Gym
                </label>
                <label className="flex items-center">
                  <input
                    name="power_backup"
                    type="checkbox"
                    className="mr-2"
                    value="Power Backup"
                  />
                  Power Backup
                </label>
                <label className="flex items-center">
                  <input
                    name="sauna_amenities"
                    type="checkbox"
                    className="mr-2"
                    value="Sauna"
                  />
                  Sauna
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          //   disabled={loading}
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          {loading ? (
            <TbFidgetSpinner className="animate-spin m-auto" />
          ) : (
            "Save & Continue"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddBuildingForm;

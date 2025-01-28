import { DateRange } from "react-date-range";
import { eventscategory } from "../../EventCategories/EventCategoryData";
import { TbFidgetSpinner } from "react-icons/tb";

const AddEventsForm = ({
  dates,
  handleDates,
  handleSubmit,
  imagePreview,
  handleImage,
  imageText,
  loading,
}
) => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 px-56">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block ">
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

            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Venue
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                type="text"
                id="venue"
                name="venue"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                name="category"
              >
                {eventscategory.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
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
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Organizer
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                type="text"
                id="organizer"
                name="organizer"
                required
              />
            </div>
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
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Ticket Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  type="number"
                  id="ticketPrice"
                  name="ticketPrice"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="guest" className="block text-gray-600">
                  Total Capacity
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  type="number"
                  id="capacity"
                  name="capacity"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Available Seats
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  type="number"
                  id="availableSeats"
                  name="availableSeats"
                  required
                />
              </div>
              <div className="space-y-1 text-sm w-full">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Time 
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  type="time"
                  id="time"
                  name="time"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className="block rounded-md focus:rose-300 w-full h-24 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                name="description"
              ></textarea>
            </div>
          </div>
        </div>

        <button
          disabled={loading}
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

export default AddEventsForm;

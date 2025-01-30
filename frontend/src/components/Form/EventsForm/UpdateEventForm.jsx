import { DateRange } from "react-date-range";
import { eventscategory } from "../../EventCategories/EventCategoryData";
const UpdateEventForm = ({
  handleSubmit,
  handleDates,
  dates,
  handleImage,
  setEventData,
  eventData,
}) => {
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-10">
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block text-gray-600">
              Location
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="location"
              id="location"
              type="text"
              value={eventData?.location}
              onChange={(e) => {
                setEventData({ ...eventData, location: e.target.value });
              }}
              placeholder="Location"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600">
              Title
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="title"
              id="title"
              type="text"
              value={eventData?.title}
              onChange={(e) => {
                setEventData({ ...eventData, title: e.target.value });
              }}
              placeholder="Title"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="venue" className="block text-gray-600">
              Venue
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="venue"
              id="venue"
              type="text"
              value={eventData?.venue}
              onChange={(e) => {
                setEventData({ ...eventData, venue: e.target.value });
              }}
              placeholder="Venue"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="organizer" className="block text-gray-600">
              Organizer
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="organizer"
              id="organizer"
              type="text"
              value={eventData?.organizer}
              onChange={(e) => {
                setEventData({ ...eventData, organizer: e.target.value });
              }}
              placeholder="Organizer"
              required
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="category" className="block text-gray-600">
              Category
            </label>
            <select
              required
              value={eventData?.category}
              onChange={(e) => {
                setEventData({ ...eventData, category: e.target.value });
              }}
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

          <div className=" p-4 bg-white w-full  m-auto rounded-lg">
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
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="ticketPrice" className="block text-gray-600">
                Ticket Price
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="ticketPrice"
                id="ticketPrice"
                type="number"
                value={eventData?.ticketPrice}
                onChange={(e) => {
                  setEventData({ ...eventData, ticketPrice: e.target.value });
                }}
                placeholder="Ticket Price"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="availableSeats" className="block text-gray-600">
                Available Seats
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="availableSeats"
                id="availableSeats"
                type="number"
                value={eventData?.availableSeats}
                onChange={(e) => {
                  setEventData({
                    ...eventData,
                    availableSeats: e.target.value,
                  });
                }}
                placeholder="Available Seats"
                required
              />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="capacity" className="block text-gray-600">
                Capacity
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="capacity"
                id="capacity"
                type="number"
                value={eventData?.capacity}
                onChange={(e) => {
                  setEventData({ ...eventData, capacity: e.target.value });
                }}
                placeholder="Capacity"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="time" className="block text-gray-600">
                Time
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                name="time"
                id="time"
                type="time"
                value={eventData?.time}
                onChange={(e) => {
                  setEventData({ ...eventData, time: e.target.value });
                }}
                placeholder="Time"
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
              value={eventData?.description}
              onChange={(e) => {
                setEventData({ ...eventData, description: e.target.value });
              }}
              className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
              name="description"
            ></textarea>
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

export default UpdateEventForm;

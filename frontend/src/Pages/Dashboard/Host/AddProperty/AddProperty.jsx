
const AddProperty = ({ eventData, handleChange, handleSubmit }) => {
    return (
        <div className="max-w-[800px] mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* title  */}
            <div>
              <label htmlFor="title" className="block font-medium text-gray-700">
                Event Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={eventData.title}
                onChange={handleChange}
                required
                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* category  */}
            <div>
              <label
                htmlFor="category"
                className="block font-medium text-gray-700"
              >
                Event Category
              </label>
              <select
                name="category"
                id="category"
                value={eventData.category}
                onChange={handleChange}
                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Conferences">Conferences</option>
                <option value="Weddings">Weddings</option>
                <option value="Corporate">Corporate</option>
                <option value="Music">Music</option>
                <option value="Festivals">Festivals</option>
                <option value="Exhibitions">Exhibitions</option>
                <option value="Sports">Sports</option>
                <option value="Workshops">Workshops</option>
              </select>
            </div>
          </div>
          {/* description  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="description"
                className="block font-medium text-gray-700"
              >
                Event Description
              </label>
              <textarea
                id="description"
                name="description"
                value={eventData.description}
                onChange={handleChange}
                required
                className="mt-2 p-2 border border-gray-300 rounded-md w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
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
          </div>
  
          <div className="flex items-center justify-between">
  
              
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Bedrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="bedrooms"
                  id="bedrooms"
                  type="number"
                  placeholder="Bedrooms"
                  required
                />
              </div>
  
              <div className="space-y-1 text-sm">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Bathrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="bathrooms"
                  id="bathrooms"
                  type="number"
                  placeholder="Bathrooms"
                  required
                />
              </div>
            </div>
          </div>
  
          {/* date  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block font-medium text-gray-700">
                Event Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
                required
                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="time" className="block font-medium text-gray-700">
                Event Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={eventData.time}
                onChange={handleChange}
                required
                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Venue */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="venue" className="block font-medium text-gray-700">
                Venue
              </label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={eventData.venue}
                onChange={handleChange}
                required
                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block font-medium text-gray-700"
              >
                Event Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={eventData.address}
                onChange={handleChange}
                required
                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Ticket Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="ticketPrice"
                className="block font-medium text-gray-700"
              >
                Ticket Price
              </label>
              <input
                type="number"
                id="ticketPrice"
                name="ticketPrice"
                value={eventData.ticketPrice}
                onChange={handleChange}
                required
                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="capacity"
                className="block font-medium text-gray-700"
              >
                Total Capacity
              </label>
              <input
                type="number"
                id="capacity"
                name="capacity"
                value={eventData.capacity}
                onChange={handleChange}
                required
                className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Available Seats */}
          <div>
            <label
              htmlFor="availableSeats"
              className="block font-medium text-gray-700"
            >
              Available Seats
            </label>
            <input
              type="number"
              id="availableSeats"
              name="availableSeats"
              value={eventData.availableSeats}
              onChange={handleChange}
              required
              className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Add Event btn */}
          <button
            type="submit"
            className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Event
          </button>
        </form>
      </div>
    );
};

export default AddProperty;
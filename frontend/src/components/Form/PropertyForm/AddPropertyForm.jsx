
const AddPropertyForm = ({handleSubmit}) => {
    return (
        <div className=" mx-32 mt-10 min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 border">
            <form onSubmit={handleSubmit} className="space-y-4">
        {/* Property Name */}
        <div>
          <label htmlFor="title" className="block font-medium">Property Name</label>
          <input 
            type="text" 
            id="title"
            name="title" 
            placeholder="Enter Property Name" 
            className="w-full p-2 mt-2 border rounded-md" 
            required
          />
        </div>

        {/* Property Type */}
        <div>
          <label htmlFor="propertyType" className="block font-medium">Property Type</label>
          <select 
            id="propertyType" 
            name="propertyType" 
            className="w-full p-2 mt-2 border rounded-md" 
            required
          >
            <option value="">Select Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Resort">Resort</option>
          </select>
        </div>

        {/* Sale Price */}
        <div>
          <label htmlFor="salePrice" className="block font-medium">Sale Price</label>
          <input 
            type="number" 
            id="salePrice"
            name="salePrice" 
            placeholder="Enter Sale Price" 
            className="w-full p-2 mt-2 border rounded-md" 
            required
          />
        </div>

        {/* Property Location */}
        <div>
          <label htmlFor="location" className="block font-medium">Property Location</label>
          <input 
            type="text" 
            id="location"
            name="location" 
            placeholder="Enter Address, City, State, Zip"
            className="w-full p-2 mt-2 border rounded-md"
            required
          />
        </div>

        {/* Property Area */}
        <div>
          <label htmlFor="propertyArea" className="block font-medium">Property Area (sq.ft)</label>
          <input 
            type="number"
            id="propertyArea"
            name="propertyArea" 
            placeholder="Enter Property Area" 
            className="w-full p-2 mt-2 border rounded-md" 
            required
          />
        </div>

        {/* Land Area */}
        <div>
          <label htmlFor="landArea" className="block font-medium">Land Area (sq.ft)</label>
          <input 
            type="number" 
            id="landArea" 
            name="landArea" 
            placeholder="Enter Land Area" 
            className="w-full p-2 mt-2 border rounded-md" 
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="propertyDescription" className="block font-medium">Description</label>
          <textarea
            id="propertyDescription"
            name="propertyDescription"
            placeholder="Enter Property Description" 
            className="w-full p-2 mt-2 border rounded-md" 
            rows="4"
            required
          ></textarea>
        </div>

        {/* Year Built */}
        <div>
          <label htmlFor="yearBuilt" className="block font-medium">Year Built</label>
          <input 
            type="number" 
            id="yearBuilt"
            name="yearBuilt" 
            placeholder="Enter Year Built" 
            className="w-full p-2 mt-2 border rounded-md" 
            required
          />
        </div>

        {/* Ownership Type */}
        <div>
          <label htmlFor="ownershipType" className="block font-medium">Ownership Type</label>
          <select 
            id="ownershipType" 
            name="ownershipType" 
            className="w-full p-2 mt-2 border rounded-md" 
            required
          >
            <option value="">Select Ownership</option>
            <option value="Freehold">Freehold</option>
            <option value="Leasehold">Leasehold</option>
          </select>
        </div>

        {/* Sale Status */}
        <div>
          <label htmlFor="saleStatus" className="block font-medium">Sale Status</label>
          <select 
            id="saleStatus" 
            name="saleStatus" 
            className="w-full p-2 mt-2 border rounded-md" 
            required
          >
            <option value="">Select Status</option>
            <option value="Available">Available</option>
            <option value="Under Offer">Under Offer</option>
            <option value="Sold">Sold</option>
          </select>
        </div>

        {/* Legal Status */}
        <div>
          <label htmlFor="legalStatus" className="block font-medium">Legal Status</label>
          <select 
            id="legalStatus" 
            name="legalStatus" 
            className="w-full p-2 mt-2 border rounded-md" 
            required
          >
            <option value="">Select Legal Status</option>
            <option value="Clear Title">Clear Title</option>
            <option value="Pending Documents">Pending Documents</option>
          </select>
        </div>

        {/* Property Features */}
        <div>
          <label htmlFor="features" className="block font-medium">Property Features</label>
          <select 
            id="features" 
            name="features" 
            multiple 
            className="w-full p-2 mt-2 border rounded-md"
          >
            <option value="Garden">Garden</option>
            <option value="Pool">Pool</option>
            <option value="Terrace">Terrace</option>
            <option value="Garage">Garage</option>
            <option value="Security Systems">Security Systems</option>
          </select>
        </div>

        {/* Parking Availability */}
        <div>
          <label className="block font-medium">Parking Availability</label>
          <input 
            type="checkbox" 
            name="parkingAvailability" 
            className="mr-2"
          />
          Yes
        </div>

        {/* Ownership Details */}
        <div>
          <label htmlFor="ownershipDetails" className="block font-medium">Ownership Details</label>
          <input 
            type="text" 
            id="ownershipDetails" 
            name="ownershipDetails"
            placeholder="Enter Owner/Seller Contact"
            className="w-full p-2 mt-2 border rounded-md"
            required
          />
        </div>

        {/* Legal Documents */}
        <div>
          <label htmlFor="legalDocuments" className="block font-medium">Legal Documents</label>
          <input 
            type="file" 
            name="legalDocuments" 
            className="w-full p-2 mt-2 border rounded-md"
            multiple
          />
        </div>

        {/* Amenities */}
        <div>
          <label htmlFor="amenities" className="block font-medium">Amenities</label>
          <select 
            id="amenities" 
            name="amenities" 
            multiple 
            className="w-full p-2 mt-2 border rounded-md"
          >
            <option value="Swimming Pool">Swimming Pool</option>
            <option value="Gym">Gym</option>
            <option value="Power Backup">Power Backup</option>
            <option value="Sauna">Sauna</option>
          </select>
        </div>

        {/* Energy Efficiency Certification */}
        <div>
          <label className="block font-medium">Energy Efficiency Certification</label>
          <input 
            type="checkbox" 
            name="energyCert" 
            className="mr-2" 
          />
          Yes
        </div>

        {/* Agent Details */}
        <div>
          <label htmlFor="agentDetails" className="block font-medium">Agent Details (if applicable)</label>
          <input 
            type="text" 
            id="agentDetails" 
            name="agentDetails" 
            placeholder="Enter Agent's Name & Contact"
            className="w-full p-2 mt-2 border rounded-md"
          />
        </div>

        {/* Investment Option */}
        <div>
          <label className="block font-medium">Investment Option</label>
          <input 
            type="checkbox" 
            name="investment" 
            className="mr-2"
          />
          Yes, this property is an investment option
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500"
          >
            Submit Property
          </button>
        </div>
      </form>
        </div>
    );
};

export default AddPropertyForm;
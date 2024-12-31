import { useState } from "react";
import filter from '../../assets/Filter Btn.png'

const categoryData = {
  Apartments: [
    "City Heights Apartments",
    "Sunrise Studio Flat",
    "Oakwood Apartments",
    "Elite City Residences",
    "Skyview Tower Flats",
    "Luxe Urban Lofts",
  ],
  Houses: [
    "Greenfield Cottage",
    "Maple Grove Bungalow",
    "Sunny Meadow House",
    "Whispering Pines Villa",
    "Blue Horizon Retreat",
    "Cozy Creekside House",
  ],
  Villas: [
    "Seaside Serenity Villa",
    "Majestic Mountain Villa",
    "Riviera Garden Estate",
    "Twilight Luxury Villa",
    "Grand Olive Mansion",
    "Paradise Valley Retreat",
  ],
  Homestays: [
    "Warmth Home Haven",
    "Comfort Corner Homestay",
    "Serene Trails Stay",
    "Cosy Nest Home",
    "Family Bliss Lodging",
    "Horizon View Homestay",
  ],
  Resorts: [
    "Golden Sands Resort",
    "Ocean Breeze Paradise",
    "Tropical Island Retreat",
    "Forest Creek Eco Resort",
    "Sunset Lagoon Resort",
    "Mountain Peak Getaway",
  ],
  Cabins: [
    "Alpine Woods Cabin",
    "Rustic Charm Cottage",
    "Pinecone Retreat",
    "Lakeside Hideaway",
    "Cozy Timber Chalet",
    "Winter Haven Lodge",
  ],
};

const App = () => {
  const [selectedValues, setSelectedValues] = useState({});

  const handleChange = (category, value) => {
    setSelectedValues({ ...selectedValues, [category]: value });
  };

  return (
    <div className=" bg-gray-100 px-10 pt-32">
      <div className="flex justify-between my-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">Properties</h1>

        <img className="" src={filter} alt="" />
      </div>

      <div className="flex gap-3 mb-10 ">
        {Object.keys(categoryData).map((category) => (
          <div key={category} className="mb-5">
            <select
              id={category}
              onChange={(e) => handleChange(category, e.target.value)}
              className="p-2"
            >
              <option value="" disabled selected>
                {category}
              </option>
              {categoryData[category].map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="mt-10 w-full text-center border">
       
      </div>
    </div>
  );
};

export default App;

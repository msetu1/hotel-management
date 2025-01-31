import { useState, useEffect } from "react";

const Prope = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFeatures([...selectedFeatures, value]);
    } else {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    console.log("Selected Features:", selectedFeatures);
  }, [selectedFeatures]);

  return (
    <form>
      {/* Property Features */}
      <div>
        <label className="block font-medium">Property Features</label>
        <div className="flex text-sm justify-between items-center space-y-2">
          {["Garden", "Pool", "Garage", "Security Systems"].map((feature) => (
            <label key={feature} className="flex items-center">
              <input
                type="checkbox"
                value={feature}
                onChange={handleCheckboxChange}
                className="mr-2"
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
          {["Swimming Pool", "Gym", "Power Backup", "Sauna"].map((amenity) => (
            <label key={amenity} className="flex items-center">
              <input
                type="checkbox"
                value={amenity}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>
    </form>
  );
};

export default Prope;

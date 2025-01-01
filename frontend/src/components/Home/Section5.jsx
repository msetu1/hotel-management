import { useEffect, useState } from "react";
import FeatureProperties from "../Section/FeatureProperties";

const Section5 = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("/featureProperties.json")
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <div className="mt-16 max-w-7xl mx-auto p-4">
      {/* <HostTitle title={`Featured Properties on our Listing`} /> */}
      <div className="text-3xl font-bold  mb-8 text-center ">
        Featured Properties <br /> on our Listing
      </div>
      <div className=" grid lg:grid-cols-3 gap-10">
        {properties?.map((property) => (
          <FeatureProperties
            key={property.id}
            property={property}
          ></FeatureProperties>
        ))}
      </div>
    </div>
  );
};

export default Section5;

import { useEffect, useState } from "react";
import HostTitle from "../Common/HostTitle";
import NearbyProperties from "../Section/NearbyProperties";

const Section2 = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("/nearbyProperties.json")
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div className="mt-16">
      <HostTitle title={`Nearby Listed Properties`} />
      <div className=" grid lg:grid-cols-4 gap-10">
        {properties?.map((property) => (
          <NearbyProperties
            key={property.id}
            property={property}
          ></NearbyProperties>
        ))}
      </div>
    </div>
  );
};

export default Section2;

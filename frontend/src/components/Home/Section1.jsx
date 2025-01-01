import { useEffect, useState } from "react";
import HostTitle from "../Common/HostTitle";
import LatestProperty from "../Section/LatestProperty";

const Section1 = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("/latestProperty.json")
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div>
      <HostTitle title={`Latest on the Property Listing`} />
      <div className=" grid lg:grid-cols-4 gap-10">
        {properties?.map((property) => (
          <LatestProperty
            key={property.id}
            property={property}
          ></LatestProperty>
        ))}
      </div>
    </div>
  );
};

export default Section1;

import { useEffect, useState } from "react";
import HostTitle from "../Common/HostTitle";
import TopProperties from "../Section/TopProperties";

const Section3 = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("/topProperties.json")
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div className="mt-16">
      <HostTitle title={`Top Rated Properties`} />
      <div className=" grid lg:grid-cols-4 gap-10">
        {properties?.map((property) => (
          <TopProperties key={property.id} property={property}></TopProperties>
        ))}
      </div>
    </div>
  );
};

export default Section3;

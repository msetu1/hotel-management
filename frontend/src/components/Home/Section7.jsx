import { useEffect, useState } from "react";
import HostTitle from "../Common/HostTitle";
import GuidesAndTips from "../Section/GuidesAndTips";

const Section7 = () => {
  const [properties, setProperties] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("/guidesAndTips.json")
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);

  const propertiesToShow = showAll ? properties : properties.slice(0, 4);
  return (
    <div className="mt-16">
      <HostTitle title={`Property Rental Guides & Tips`} />
      <div className=" grid lg:grid-cols-4 gap-10">
        {propertiesToShow?.map((property) => (
          <GuidesAndTips key={property.id} property={property}></GuidesAndTips>
        ))}
      </div>
      <div className="mt-16 flex justify-center items-center">
        <button
          className="bg-rose-500 hover:bg-black text-[16px] font-bold rounded-full w-[205px] py-3  text-white"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less Blogs" : "View All Blogs"}
        </button>
      </div>
    </div>
  );
};

export default Section7;

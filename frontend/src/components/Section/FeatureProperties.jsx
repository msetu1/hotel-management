import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
const FeatureProperties = ({ property }) => {
  const {
    title,
    shortDescription,
    price,
    location,
    image,
    bedrooms,
    bathrooms,
    carsBikes,
    petsAllowed,
  } = property;
  return (
    <div className=" rounded-lg shadow-md p-4 bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-[210px] object-cover  "
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{shortDescription}</p>

        <p className="text-sm text-gray-800 font-bold mb-2">Price: ${price}</p>
        <p className="text-gray-500 ">{location}/5</p>

        <div className="flex items-center gap-5 text-2xl font-bold text-gray-500 mt-5">
          <h2 className="flex items-center justify-center gap-2">
            <IoBedOutline />
            {bedrooms}
          </h2>
          <h2 className="flex items-center justify-center gap-2">
            <BiBath />
            {bathrooms}
          </h2>
          <h2 className="flex items-center justify-center gap-2">
            <FaCar />
            {carsBikes}
          </h2>
          <h2 className="flex items-center justify-center gap-2">
            <MdOutlinePets />
            {petsAllowed}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FeatureProperties;

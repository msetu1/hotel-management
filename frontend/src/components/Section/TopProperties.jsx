import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";

const TopProperties = ({ property }) => {
  const { title, shortDescription, location, image } = property;
  return (
    <Link to="">
      <div className="relative">
        <img className="w-full h-[350px] rounded-xl" src={image} alt="" />
        <div className="absolute top-0 m-5 ">
          <div className="flex gap-1">
            <FaStar className="text-xl text-[#ff9e0b]" />
            <FaStar className="text-xl text-[#ff9e0b]" />
            <FaStar className="text-xl text-[#ff9e0b]" />
            <FaStar className="text-xl text-[#ff9e0b]" />
            <FaRegStar className="text-xl text-[#ff9e0b]" />
          </div>
        </div>
        <div className="absolute end-0 top-0">
          <GiSelfLove className="text-2xl m-5" />
        </div>
        <div className="absolute bottom-[1px] pl-5 bg-black w-full py-8 text-white opacity-60 rounded-b-xl">
        <header className="">
          <h3 className="text-2xl font-bold ">{title}</h3>
          <p className=""> {location}</p>
        </header>
        </div>
      </div>
    </Link>
  );
};

export default TopProperties;

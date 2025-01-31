import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandCard = ({ land }) => {
  return (
    <Link to={`/land/${land?._id}`}>
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 h-[480px]">
        {/*  <!-- Image --> */}
        <div className="col-span-1 cursor-pointer group">
          <figure>
            <img
              src={land?.image}
              alt="card image"
              className="aspect-video w-full h-[250px] object-cover group-hover:scale-110 transition"
            />
          </figure>
        </div>
        {/*  <!-- Body--> */}
        <div className="p-6">
          {/* land Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">{land.title}</h3>

          {/* land Date & Category */}
          <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
            <div className="flex items-center gap-2">
              <h2>{land?.sale_status}</h2> /<h2>{land?.legal_status}</h2>
            </div>
            <span className="px-3 py-1 bg-red-100 text-red-900 hover:bg-red-200 rounded-full text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 font-medium">
              {land.category}
            </span>
          </div>

          {/* land Location */}
          <div className="text-sm text-gray-700 mb-2 flex items-center gap-2">
            📍 <span>{land.location}</span>
          </div>

          {/* land Location */}
          <div className=" mb-2 sm font-semibold">
            <span>Katha : {land.katha}</span>
          </div>
          {/* Ticket Price and Button */}
          <div className="flex justify-between items-center">
            <div className="font-semibold text-rose-600 text-lg">
              {land.ticketPrice === "Free" ? "Free" : `$${land.price}`}
            </div>
            <Link to={`/land/${land?._id}`}>
              <h2 className="text-rose-500 font-bold  mt-4 bottom-0 flex items-center gap-2">
                <FaArrowRight /> See Details
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LandCard;

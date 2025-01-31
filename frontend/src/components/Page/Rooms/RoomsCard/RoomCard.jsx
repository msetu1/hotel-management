import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  const { category, image, location } = room;
  return (
    <Link to={`/room/${room?._id}`}>
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 h-[450px]">
      {/*  <!-- Image --> */}
      <div className="col-span-1 cursor-pointer group">
      <figure>
        <img
          src={image}
          alt="card image"
          className="aspect-video w-full h-[250px] object-cover group-hover:scale-110 transition"
        />
      </figure>
      </div>
      {/*  <!-- Body--> */}
      <div className="p-6">
        <header className="mb-2">
          <h3 className="text-xl font-medium text-slate-700">{location}</h3>
        </header>
        <h3>Category: {category}</h3>
        <div className="flex flex-row items-center gap-1 text-xl mt-2">
          <div className="font-semibold text-red-500">
            <span className=" text-black">Price:</span> $ {room?.price}
          </div>
          <div className="font-semibold text-gray-500">/night</div>
        </div>
        <div className="flex items-center justify-end">
          <Link to={`/room/${room?._id}`}>
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

export default RoomCard;

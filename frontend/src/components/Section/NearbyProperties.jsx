import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const NearbyProperties = ({ property }) => {
  const { title, shortDescription, location, image } = property;
  return (
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
      {/*  <!-- Image --> */}
      <figure>
        <img src={image} alt="card image" className="aspect-video w-full h-[250px]" />
      </figure>
      {/*  <!-- Body--> */}
      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-xl font-medium text-slate-700">{title}</h3>
          <p className="text-sm text-slate-400"> {location}</p>
        </header>
        <p className="mb-5">{shortDescription}</p>
        <div className="flex items-center justify-end">
        <Link to=''>
        <h2 className="text-rose-500 font-bold  mt-4 bottom-0 flex items-center gap-2" ><FaArrowRight/> See Details</h2>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default NearbyProperties;

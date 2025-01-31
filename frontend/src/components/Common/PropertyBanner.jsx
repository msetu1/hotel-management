import { Link } from "react-router-dom";
import { buildingcategory } from "../Category/BuildingCategoryData";
import { landcategory } from "../Category/LandCategoryData";
const PropertyBanner = () => {
  return (
    <div>
      <div
        className="hero  min-h-[500px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/7v1hP0k/resize-17379238741486426506istockphoto1223072133612x612.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-black"></div>

        <div className="hero-content text-neutral-content text-center">
          <div className="flex items-center justify-between gap-[500px] ">
            <div className=" mt-28 ">
              <div className="text-start">
                <h1 className="mb-5 text-4xl font-bold">
                  The Serene Escape: Luxury Villas
                </h1>
                <h2 className="text-xl font-bold">
                  <Link to="/" className="underline ">
                    Home
                  </Link>{" "}
                  / Properties
                </h2>
              </div>
            </div>

            <div className="">
              <div className="input-container mt-16 flex mx-auto">
                <input
                  className="input"
                  name="text"
                  type="text"
                  placeholder="Search the internet..."
                />
              </div>
              <div className="flex items-center gap-5 mt-8">
                <div className="w-full space-y-1 text-black mt-5 flex items-center justify-end">
                  <select
                    required
                    className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md "
                    name="category"
                  >
                    {buildingcategory.map((category) => (
                      <option value={category.label} key={category.label}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full space-y-1 text-black mt-5 flex items-center justify-end">
                <select
                  required
                  className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                  name="category"
                >
                  {landcategory.map((category) => (
                    <option value={category.label} key={category.label}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBanner;

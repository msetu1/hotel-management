import { Link } from "react-router-dom";
import { eventscategory } from "../EventCategories/EventCategoryData";

const EventsBanner = () => {
  return (
    <div
      className="hero  min-h-[500px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/KXGjgCD/resize-1737922913211671469istockphoto1933365334612x612.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80 bg-black"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="flex items-center justify-between gap-[500px]">
          <div className=" mt-28">
            <div className="text-start">
              <h1 className="mb-5 text-4xl font-bold">
                Elegant Evenings: <br /> Uniting Hearts Over Luxury
              </h1>
              <h2 className="text-xl font-bold">
                <Link to="/" className="underline ">
                  Home
                </Link>{" "}
                / Events
              </h2>
            </div>
          </div>

          <div>
            <div className="input-container mt-16 flex mx-auto">
              <input
                className="input"
                name="text"
                type="text"
                placeholder="Search the internet..."
              />
            </div>
            <div className="space-y-1 text-black mt-5 flex items-center justify-end">
              <select
                required
                className="w-[75%] px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                name="category"
              >
                {eventscategory.map((category) => (
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
  );
};

export default EventsBanner;

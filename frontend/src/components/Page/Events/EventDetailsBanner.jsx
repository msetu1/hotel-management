import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const EventDetailsBanner = ({eventImg}) => {
  return (
    <div className="relative">
      <div
        className="hero min-h-[500px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/KXGjgCD/resize-1737922913211671469istockphoto1933365334612x612.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-black"></div>
        <div className="hero-content text-neutral-content ">
          <div className="lg:mr-[780px] mt-28">
            <div className="text-start">
              <h1 className="mb-5 text-4xl font-bold">
                Modern Studio Apartment
              </h1>
              <h2 className="text-xl font-bold flex items-center gap-2 ">
                <Link to="/" className="underline ">
                  Home
                </Link>{" "}
                /{" "}
                <Link to="/" className="underline ">
                  Events
                </Link>{" "}
                <IoMdArrowForward /> Details
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute end-20 -bottom-20">
        <img
          className="w-[210px] h-[190px] border-[10px]"
          src={eventImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default EventDetailsBanner;

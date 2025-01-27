import { Link } from "react-router-dom";

const EventsBanner = () => {
  return (
    <div>
      <div
        className="hero  min-h-[500px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/KXGjgCD/resize-1737922913211671469istockphoto1933365334612x612.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-black"></div>
        <div className="hero-content text-neutral-content text-center">
        <div className="lg:mr-[780px] mt-28">
         <div className="text-start">
            <h1 className="mb-5 text-4xl font-bold">Elegant Evenings: Uniting Hearts Over Luxury</h1>
           <h2 className="text-xl font-bold"><Link to='/' className="underline ">
           Home
           </Link> / Events</h2>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;

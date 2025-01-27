import { Link } from "react-router-dom";

const RoomBanner = () => {
    return (
        <div
        className="hero min-h-[500px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/7VGCQgc/resize-17379236401483851348hotel1749602640.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <div className="hero-content text-neutral-content ">
         <div className="lg:mr-[780px] mt-28">
         <div className="text-start">
            <h1 className="mb-5 text-4xl font-bold">Modern Studio Apartment</h1>
           <h2 className="text-xl font-bold"><Link to='/' className="underline ">
           Home
           </Link> / Rooms</h2>
          </div>
         </div>
        </div>
      </div>
    );
  };
  
  export default RoomBanner;
  
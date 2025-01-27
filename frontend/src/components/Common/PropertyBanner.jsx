import { Link } from "react-router-dom";

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
          <div className="hero-overlay bg-opacity-70 bg-black"></div>
          <div className="hero-content text-neutral-content text-center">
          <div className="lg:mr-[780px] mt-28">
           <div className="text-start">
              <h1 className="mb-5 text-4xl font-bold">The Serene Escape: Luxury Villas</h1>
             <h2 className="text-xl font-bold"><Link to='/' className="underline ">
             Home
             </Link> / Properties</h2>
            </div>
           </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PropertyBanner;
  
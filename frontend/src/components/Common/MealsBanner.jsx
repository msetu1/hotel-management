import { Link } from "react-router-dom";

const MealsBanner = () => {
    return (
        <div>
        <div
          className="hero  min-h-[500px]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/nQ1wgzD/resize-17379262631018135730table3084384640.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 bg-black"></div>
          <div className="hero-content text-neutral-content text-center">
          <div className="lg:mr-[780px] mt-28">
           <div className="text-start">
              <h1 className="mb-5 text-4xl font-bold">Flavors of the World: Global Cuisine Buffet</h1>
             <h2 className="text-xl font-bold"><Link to='/' className="underline ">
             Home
             </Link> / Meals</h2>
            </div>
           </div>
          </div>
        </div>
      </div>
    );
};

export default MealsBanner;
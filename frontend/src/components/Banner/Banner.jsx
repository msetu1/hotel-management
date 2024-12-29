import "../UI/bannerSearchInput.css";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_640.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="-mt-20 ">
            <h1 className="mb-5 text-4xl font-bold ">
              The Heart of Seamless Hospitality <br /> Management
            </h1>

            <div className="input-container mt-16 flex mx-auto">
              <input
                className="input"
                name="text"
                type="text"
                placeholder="Search the internet..."
              />
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

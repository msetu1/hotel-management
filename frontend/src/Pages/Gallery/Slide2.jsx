import Button from "../../components/Banner/Button";

const Slide2 = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/184871028/photo/cozy-bedroom-and-a-fireplace.jpg?s=612x612&w=0&k=20&c=cMVhQaYTVgcwAFHFDgcA91h53dHfG6jEcawDNWoUXMQ=")`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-40 overflow-hidden">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            Build your new <span className="text-blue-400">Saas</span> Project
          </h1>
          <br />
          <Button buttonName={`By Now`}></Button>
        </div>
      </div>
    </div>
  );
};
export default Slide2;

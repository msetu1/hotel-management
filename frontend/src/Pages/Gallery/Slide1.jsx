import Button from "../../components/Banner/Button";

const Slide1 = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/1350915033/photo/luxurious-log-cabin-interior.jpg?s=612x612&w=0&k=20&c=lCDBeS9bL69WBtf5Gs4qupOEWRrEjpMc_Q0JAXgPQnA=")`,
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
export default Slide1;

import Button from "../../components/Banner/Button";

const Slide3 = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/1064991042/photo/christmas-tree-with-fireplace.jpg?s=612x612&w=0&k=20&c=n5qyAKdcUKv6tMaATraCHERJnnsd8LUU6Iq1Ud2OXjU=")`,
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

export default Slide3;

import Button from "../Banner/Button";
import HostTitle from "../Common/HostTitle";

const Section9 = () => {
  return (
    <div className="mt-16">
      <div className="hero rounded-xl bg-base-200 min-h-[600px]">
        <div className="flex flex-col lg:flex-row-reverse mx-10">
          <img
            src="https://media.istockphoto.com/id/2057975228/photo/two-receptionists-working-on-a-computer-while-checking-documents-at-hotel-reception-desk.jpg?s=612x612&w=0&k=20&c=aL4NHBrHtpvNJHF3QXufNyrFaqHDk0reZBdgJDk-dEA="
            className=" w-[550px] rounded-lg shadow-2xl"
          />
          <div className="pr-5">
            <HostTitle title={`Discover More About Property Rental`} />
            <p className="mr-16">
            Discover More About Property Rental" is an inviting and informative phrase that encourages users to delve deeper into the world of property rental and explore the opportunities it offers. It suggests that there’s a wealth of knowledge, options, and potential waiting to be uncovered. This phrase appeals to both newcomers curious about entering the property rental space and seasoned professionals looking to expand their understanding or opportunities. 
            </p>
            <div className="mt-10 flex items-center gap-10">
              <h2>Ask a Question</h2>
              <h2>Find a property</h2>
            </div>
            <div className="mt-4">
              <Button buttonName={`Discover More`}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;

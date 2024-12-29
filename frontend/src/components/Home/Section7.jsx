import Button from "../Banner/Button";
import HostTitle from "../Common/HostTitle";

const Section7 = () => {
  return (
    <div className="mt-16">
      <HostTitle title={`Property Rental Guides & Tips`} />
      <div className=" grid lg:grid-cols-4 gap-10">
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          {/*  <!-- Image --> */}
          <figure>
            <img
              src="https://picsum.photos/id/101/800/600"
              alt="card image"
              className="aspect-video w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-6">
            <header className="mb-4">
              <h3 className="text-xl font-medium text-slate-700">
                The easy way to go
              </h3>
              <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
            </header>
            <p>
              Experience the simple pleasures of a world with no cars, and only
              gentle walks through palm tree forests, and fallen coconuts. An
              island that’s home to extraordinary cliffs, swelling oceans, and
              mammoth manta rays.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          {/*  <!-- Image --> */}
          <figure>
            <img
              src="https://picsum.photos/id/101/800/600"
              alt="card image"
              className="aspect-video w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-6">
            <header className="mb-4">
              <h3 className="text-xl font-medium text-slate-700">
                The easy way to go
              </h3>
              <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
            </header>
            <p>
              Experience the simple pleasures of a world with no cars, and only
              gentle walks through palm tree forests, and fallen coconuts. An
              island that’s home to extraordinary cliffs, swelling oceans, and
              mammoth manta rays.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          {/*  <!-- Image --> */}
          <figure>
            <img
              src="https://picsum.photos/id/101/800/600"
              alt="card image"
              className="aspect-video w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-6">
            <header className="mb-4">
              <h3 className="text-xl font-medium text-slate-700">
                The easy way to go
              </h3>
              <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
            </header>
            <p>
              Experience the simple pleasures of a world with no cars, and only
              gentle walks through palm tree forests, and fallen coconuts. An
              island that’s home to extraordinary cliffs, swelling oceans, and
              mammoth manta rays.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          {/*  <!-- Image --> */}
          <figure>
            <img
              src="https://picsum.photos/id/101/800/600"
              alt="card image"
              className="aspect-video w-full"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-6">
            <header className="mb-4">
              <h3 className="text-xl font-medium text-slate-700">
                The easy way to go
              </h3>
              <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
            </header>
            <p>
              Experience the simple pleasures of a world with no cars, and only
              gentle walks through palm tree forests, and fallen coconuts. An
              island that’s home to extraordinary cliffs, swelling oceans, and
              mammoth manta rays.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center items-center">
        <Button buttonName={`View All Blogs`}></Button>
      </div>
      <div>
        s practice  eerror sol
      </div>
    </div>
  );
};

export default Section7;

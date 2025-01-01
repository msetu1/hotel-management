const LatestProperty = ({ property }) => {
  const { title, shortDescription, location, image } = property;
  return (
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
      {/*  <!-- Image --> */}
      <figure>
        <img src={image} alt="card image" className="aspect-video w-full" />
      </figure>
      {/*  <!-- Body--> */}
      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-xl font-medium text-slate-700">{title}</h3>
          <p className="text-sm text-slate-400"> {location}</p>
        </header>
        <p>{shortDescription}</p>
      </div>
    </div>
  );
};

export default LatestProperty;

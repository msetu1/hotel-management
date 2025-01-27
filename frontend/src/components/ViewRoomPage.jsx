const ViewRoomPage = ({ booking }) => {
  console.log(booking?.guest?.name);
  const {
    bathrooms,
    bedrooms,
    category,
    description,
    from,
    to,
    guest,
    host,
    location,
    price,
    title,
  } = booking;

  return (
    <div>
      <div className="flex items-center gap-5">
        <img
          src={guest?.image}
          className="w-[120px] h-[120px] rounded-full border-8 border-rose-500"
          alt=""
        />
        <div>
          <h2>{guest?.name}</h2>
          <h2>{guest?.email}</h2>
        </div>
      </div>
      <div className="mt-5">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="divider"></div>
       {/* Booking Details */}
       <div className="grid grid-cols-2 gap-6 text-gray-800 my-6 ">
            <div>
              <p className="font-semibold">Location:</p>
              <p className="text-gray-600">{location}</p>
            </div>
            <div>
              <p className="font-semibold">Category:</p>
              <p className="text-gray-600">{category}</p>
            </div>
            <div>
              <p className="font-semibold">Bedrooms:</p>
              <p className="text-gray-600">{bedrooms}</p>
            </div>
            <div>
              <p className="font-semibold">Bathrooms:</p>
              <p className="text-gray-600">{bathrooms}</p>
            </div>
            <div>
              <p className="font-semibold">Price:</p>
              <p className="text-gray-600">${price}/night</p>
            </div>
            <div>
              <p className="font-semibold">Host:</p>
              <p className="text-gray-600">{host?.email}</p>
            </div>
            <div>
              <p className="font-semibold">From:</p>
              <p className="text-gray-600">{new Date(from).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="font-semibold">To:</p>
              <p className="text-gray-600">{new Date(to).toLocaleDateString()}</p>
            </div>
          </div>
    </div>
  );
};

export default ViewRoomPage;

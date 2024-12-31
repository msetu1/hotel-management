const MealsCategoryCard = ({ meal }) => {
  const { title, shortDescription, price, rating, image } = meal;

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{shortDescription}</p>

        <p className="text-sm text-gray-800 font-bold mb-2">Price: ${price}</p>
        <p className="text-sm text-gray-800">Rating: {rating}/5</p>

        <button className="mt-4 bg-rose-500 hover:bg-black text-white px-4 py-2 rounded-lg font-bold">
          View Details
        </button>
      </div>
    </div>
  );
};

export default MealsCategoryCard;

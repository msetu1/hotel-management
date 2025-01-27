import React from 'react';

const Example = () => {
  return (
    <div className="rounded-lg shadow-md px-2 bg-white ">
      <div>
      <img
        src={image}
        alt={title}
        className="w-full h-[220px] object-cover rounded-t-lg"
      />
      </div>

      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{shortDescription}</p>

        <p className=" text-gray-800 font-bold mb-2">
          Price: <span className="text-rose-500">${price}</span>
        </p>
        <div className="flex items-center gap-20">
          <p className="text-sm text-gray-800">Rating: {rating}/5</p>
          <p className="text-sm text-gray-800"> {preparationTime}</p>
        </div>
        <div className="flex items-center justify-center mt-5">
          <button className="mt-4 bg-rose-500 hover:bg-black text-white px-4 py-3 rounded-lg font-bold w-full">
            By Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Example;
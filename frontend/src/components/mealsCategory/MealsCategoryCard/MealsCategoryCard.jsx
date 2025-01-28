import { useState } from "react";
import MealsSalesModal from "../../Modal/MealsSalesModal";
import useAuth from "../../../Hooks/useAuth";

const MealsCategoryCard = ({ meal, refetch }) => {
  const { title, shortDescription, price, rating, image, preparationTime } =
    meal;

  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
      {/*  <!-- Image --> */}
      <div className="col-span-1 cursor-pointer group">
        <figure>
          <img
            src={image}
            alt="card image"
            className="aspect-video w-full h-[250px] object-cover group-hover:scale-110 transition"
          />
        </figure>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{shortDescription}</p>

        
        <div className="flex items-center gap-20">
          <p className="text-sm text-gray-800">Rating: {rating}/5</p>
          <p className="text-sm text-gray-800"> {preparationTime}</p>
        </div>
        
        <div className="flex items-center justify-between mt-5">
        <p className=" text-gray-800 font-bold ">
          Price: <span className="text-rose-500">${price}</span>
        </p>
          <button
            onClick={() => setIsOpen(true)}
            className=" bg-rose-500 hover:bg-black text-white px-7 py-3 rounded-lg font-bold "
          >
            By Now
          </button>
        </div>

        {/* meals sale modal  */}
        <MealsSalesModal
          isOpen={isOpen}
          closeModal={closeModal}
          refetch={refetch}
          mealInfo={{
            ...meal,
            price: price,
            guest: {
              name: user?.displayName,
              email: user?.email,
              image: user?.photoURL,
            },
          }}
        />
      </div>
    </div>
  );
};

export default MealsCategoryCard;

import { Link } from "react-router-dom";

const MealsCategoryCard = ({meal}) => {
    const {id,image,name,category}=meal;
    return (
        <div>
           <div
              key={id}
              className="border border-gray-300 rounded-lg shadow-md p-4 text-center"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-32 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-sm text-gray-500">{category}</p>
              <Link to={`/meal-category-details/${id}`}>
              Details
              </Link>
            </div> 
        </div>
    );
};

export default MealsCategoryCard;
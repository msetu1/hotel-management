import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import MealsCategoryCard from "../mealsCategory/MealsCategoryCard/MealsCategoryCard";

const mealsData = [
  { id: 1, name: "Pancakes", category: "Breakfast", image: "pancakes.jpg" },
  { id: 2, name: "Omelette", category: "Breakfast", image: "omelette.jpg" },
  { id: 3, name: "Cereal", category: "Breakfast", image: "cereal.jpg" },
  { id: 4, name: "Burger", category: "Lunch", image: "burger.jpg" },
  { id: 5, name: "Salad", category: "Lunch", image: "salad.jpg" },
  { id: 6, name: "Sandwich", category: "Lunch", image: "sandwich.jpg" },
  { id: 7, name: "Steak", category: "Dinner", image: "steak.jpg" },
  { id: 8, name: "Pasta", category: "Dinner", image: "pasta.jpg" },
  { id: 9, name: "Pizza", category: "Dinner", image: "pizza.jpg" },
];
const MealsByCategory = () => {
  const categories = ["All Meals", "Breakfast", "Lunch", "Dinner"];
  const [activeTab, setActiveTab] = useState("All Meals");

  const filteredMeals =
    activeTab === "All Meals"
      ? mealsData
      : mealsData.filter((meal) => meal.category === activeTab);
  return (
    <div className="mt-16">
      <div className="max-w-7xl mx-auto p-4">
        {/* Tab Buttons */}
        <div className="flex space-x-4 mb-6 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-3 rounded-lg  font-medium 
              ${
                activeTab === category
                  ? "bg-rose-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }
              hover:bg-black hover:text-white`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeals.map((idx,meal) =><MealsCategoryCard key={idx} meal={meal} /> )}
        </div>
      </div>
    </div>
  );
};

export default MealsByCategory;

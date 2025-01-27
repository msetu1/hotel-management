import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import MealsCategoryCard from "../mealsCategory/MealsCategoryCard/MealsCategoryCard";

const MealsByCategory = () => {
  const [mealsData, setMealsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("All Meals");
  const [showAll, setShowAll] = useState(false); // State to manage the view toggle

  useEffect(() => {
    fetch("/mealsByCategory.json")
      .then((response) => response.json())
      .then((data) => {
        setMealsData(data); // Save all meal data
        const uniqueCategories = [
          "All Meals",
          ...new Set(data.map((meal) => meal.category)), // Extract unique categories
        ];
        setCategories(uniqueCategories); // Set the categories state
      });
  }, []);

  // Filter the meals based on the activeTab (category selected)
  const filteredMeals =
    activeTab === "All Meals"
      ? mealsData
      : mealsData.filter((meal) => meal.category === activeTab);

  // Determine which meals to display
  const displayedMeals = showAll ? filteredMeals : filteredMeals.slice(0, 6);

  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto p-4">
        {/* Tab Buttons */}
        <div className="flex space-x-4 mb-6 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-3 rounded-lg font-medium 
                ${
                  activeTab === category
                    ? "bg-rose-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }
                hover:bg-black hover:text-white`}
              onClick={() => setActiveTab(category)} // Set the active category tab
            >
              {category}
            </button>
          ))}
        </div>

        {/* Meals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedMeals.map((meal) => (
            <MealsCategoryCard key={meal.id} meal={meal} />
          ))}
        </div>

        {/* Toggle Button */}
        {filteredMeals.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              className="bg-rose-500 hover:bg-black text-[16px] font-bold rounded-full w-[205px] py-3  text-white"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealsByCategory;

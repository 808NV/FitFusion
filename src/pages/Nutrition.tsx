import { useEffect, useState } from "react";
import { FetchedNutrition } from "@/utils/types";

const Nutrition = () => {
  const [userInput, setUserInput] = useState("");
  const [nutrition, setNutrition] = useState<FetchedNutrition | []>([]);

  const fetchNutrition = useEffect(() => {
    const apiKey = process.env.REACT_APP_CN_KEY;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.calorieninjas.com/v1/nutrition?query=${userInput}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": apiKey,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setNutrition(data.items);
        console.log(nutrition);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [userInput]);

  return (
    <div>
      <div className=" bg-white rounded-lg p-6 shadow-xl w-full max-w-md mx-auto">
        <div className="flex items-center mb-4">
          <input
            className="bg-slate-900"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            onClick={() => fetchNutrition}
          >
            fetch
          </button>
        </div>
        {userInput ? (
          <div className="space-y-4">
            {nutrition.map((food, index) => {
              return (
                <div key={index} className="bg-gray-100 rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-2">{food.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>Calories: {food.calories}</div>
                    <div>Serving Size: {food.serving_size_g}</div>
                    <div>Protein: {food.protein_g}</div>
                    <div>Sugar: {food.sugar_g}g</div>
                    <div>Sodium: {food.sodium_mg}mg</div>
                    <div>Fiber: {food.fiber_g}g</div>
                    <div>Total Fat: {food.fat_total_g}g</div>
                    <div>Carbs: {food.carbohydrates_total_g}g</div>
                    <div>Cholesterol: {food.cholesterol_mg}mg</div>
                    <div>Potassium: {food.potassium_mg}mg</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Nutrition;

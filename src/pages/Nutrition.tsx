import { useEffect, useState } from "react";

const Nutrition = () => {
  const [userInput, setUserInput] = useState("");
  const [nutrition, setNutrition] = useState<[]>([]);

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
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <input
          className="bg-slate-900"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={() => fetchNutrition}>fetch</button>
      </div>
      {userInput ? (
        <div>
          {nutrition.map((food, index) => {
            return (
              <div key={index}>
                <div>{food.name}</div>
                <div>Calories: {food.calories}</div>
                <div>
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
  );
};

export default Nutrition;

import { useEffect, useState } from "react";
import { FetchedNutrition } from "@/utils/types";

type NutritionProps = {
  modalStyle: string;
  closeBtn: JSX.Element;
  setNutriShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nutrition = ({
  modalStyle,
  closeBtn,
  setNutriShowModal,
}: NutritionProps) => {
  const [userInput, setUserInput] = useState("");
  const [nutrition, setNutrition] = useState<FetchedNutrition | []>([]);

  useEffect(() => {
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
            } as HeadersInit,
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
    <div className={`${modalStyle}`}>
      <div className=" bg-white rounded-lg p-6 shadow-xl w-full max-w-md mx-auto">
        <div className="flex justify-end text-black">
          <button onClick={() => setNutriShowModal(false)}>{closeBtn}</button>
        </div>
        <div className="flex justify-center items-center mb-4">
          <input
            className="bg-primary-300 p-2 rounded-sm font-bold"
            type="text"
            placeholder="3 cans of tuna"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
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

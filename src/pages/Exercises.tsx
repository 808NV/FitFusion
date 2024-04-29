import { fetchExercises, exerciseOptions } from "@/utils/fetchExercises";
import { useState } from "react";
import { defaultExercises } from "@/assets/Exercises";
import { FetchedExercises } from "@/utils/types";

const Exercises = () => {
  const [search, setSearch] = useState("");
  const [displayRes, setDisplayRes] = useState<FetchedExercises | []>([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchExercises(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase())
      );

      setSearch("");
      setDisplayRes(searchedExercises);
    }
  };

  return (
    <div>
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Search Exercises</h1>

        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search Exercises"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            onClick={() => handleSearch()}
            className="bg-blue-500 text-white rounded-r-md px-6 py-2 ml-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Search
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {displayRes.length > 0 ? (
            <div>
              {displayRes.map((exercise) => (
                <div key={exercise.id} className="mb-6">
                  <img
                    src={exercise.gifUrl}
                    alt={`a person doing ${exercise.name}`}
                    className="w-full h-auto mb-4 rounded-lg"
                  />
                  <h3 className="text-xl font-bold mb-2 text-gray-600">
                    {exercise.name}
                  </h3>
                  <div className="text-gray-600 mb-2">
                    <span>{exercise.bodyPart}</span> |{" "}
                    <span>{exercise.equipment}</span> |{" "}
                    <span>{exercise.target}</span>
                  </div>
                  <p className="text-gray-800">{exercise.instructions}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {defaultExercises.map((exercise) => (
                <div key={exercise.id} className="mb-6">
                  <img
                    src={exercise.gifUrl}
                    alt={`a person doing ${exercise.name}`}
                    className="w-full h-auto mb-4 rounded-lg"
                  />
                  <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>
                  <div className="text-gray-600 mb-2">
                    <span>{exercise.bodyPart}</span> |{" "}
                    <span>{exercise.equipment}</span> |{" "}
                    <span>{exercise.target}</span>
                  </div>
                  <p className="text-gray-800">{exercise.instructions}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercises;

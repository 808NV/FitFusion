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
      <h1>Search Exercises</h1>
      <div>
        <input
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>

      {/* search results */}
      {displayRes.length > 0 ? (
        <div>
          {displayRes.map((exercise) => (
            <div key={exercise.id}>
              <img
                src={exercise.gifUrl}
                alt={`a person doing ${exercise.name}`}
              />
              <h3>{exercise.name}</h3>
              <div>
                <span>{exercise.bodyPart} </span>
                <span>{exercise.equipment} </span>
                <span>{exercise.target} </span>
              </div>
              <p>{exercise.instructions}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {defaultExercises.map((exercise) => (
            <div key={exercise.id}>
              <img
                src={exercise.gifUrl}
                alt={`a person doing ${exercise.name}`}
              />
              <h3>{exercise.name}</h3>
              <div>
                <span>{exercise.bodyPart} </span>
                <span>{exercise.equipment} </span>
                <span>{exercise.target} </span>
              </div>
              <p>{exercise.instructions}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercises;

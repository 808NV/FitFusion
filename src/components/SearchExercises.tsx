import { fetchExercises, exerciseOptions } from "@/utils/fetchExercises";
import { useState } from "react";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [displayRes, setDisplayRes] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchExercises(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.name.toLowerCase().includes(search.toLowerCase())
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
        <button onClick={() => handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchExercises;

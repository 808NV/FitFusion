import { useState } from "react";

const SearchExercises = () => {
  const [Search, setSearch] = useState("");
  return (
    <div>
      <h1>Search Exercises</h1>
      <div>
        <input
          type="text"
          placeholder="Search Exercises"
          value={Search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchExercises;

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchExercises = async (url: string, options: any) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

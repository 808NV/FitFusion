import { useState } from "react";

const BmiCalculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmiResult, setBmiResult] = useState<string | null>(null);

  const calculateBMI = () => {
    const bmi = (weight / (height * height)) * 10000;
    setBmiResult(bmi.toFixed(2));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div>
      <h1>Body Mass Index (BMI) Calculator</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Height (in meters ):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
            required
          />
        </label>

        <br />
        <label>
          Weight (in kilograms):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
            required
          />
        </label>
        <br />
        <button type="submit">Calculate BMI</button>
      </form>
      {bmiResult && <p>Your BMI: {bmiResult}</p>}
    </div>
  );
};

export default BmiCalculator;

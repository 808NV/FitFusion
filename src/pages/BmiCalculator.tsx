import { useState } from "react";

const BmiCalculator = ({ modalStyle }) => {
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
    <div className={`${modalStyle}`}>
      <div className="bg-white text-black rounded-lg p-6 shadow-xl w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Body Mass Index (BMI) Calculator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="height" className="text-lg font-medium">
              Height (in meters):
            </label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="weight" className="text-lg font-medium">
              Weight (in kilograms):
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value))}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Calculate BMI
          </button>
        </form>

        {bmiResult && <p className="text-lg mt-4">Your BMI: {bmiResult}</p>}
      </div>
    </div>
  );
};

export default BmiCalculator;

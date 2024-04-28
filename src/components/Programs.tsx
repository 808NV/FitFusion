import fatIcon from "@/assets/man.png";
import muscleIcon from "@/assets/muscle.png";
import cardioIcon from "@/assets/cardio.png";

const Programs = () => {
  return (
    <div className="p-4">
      <h1 className="lg:text-8xl text-5xl text-center text-gray-700 font-semibold mb-20">
        Explore Our Programs
      </h1>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#131313] max-w-[300px] p-5 hover:bg-blue-700">
            <div className="flex items-center gap-5 pb-5">
              <img
                src={fatIcon}
                alt="A man on treadmill"
                className="bg-white w-12 rounded-sm"
              />
              <h3>Fat Lose</h3>
            </div>
            <p className="text-[#ababa5]">
              reduce body fat by burning more calories than you consume through
              diet and exercise
            </p>
          </div>
          <div className="bg-[#131313] max-w-[300px] p-5 hover:bg-blue-700">
            <div className="flex items-center gap-5 pb-5">
              <img
                src={muscleIcon}
                alt="A strong muscle"
                className="bg-white w-12 rounded-sm"
              />
              <h3>Muscle Gain</h3>
            </div>
            <p className="text-[#ababa5]">
              build muscle by engaging in strength training exercise and
              consuming adequate protein to support muscle growth and repair.
            </p>
          </div>
          <div className="bg-[#131313] max-w-[300px] p-5 hover:bg-blue-700">
            <div className="flex items-center gap-5 pb-5">
              <img
                src={cardioIcon}
                alt="A heart beating"
                className="bg-white w-12 rounded-sm"
              />
              <h3>Cardio Strength</h3>
            </div>
            <p className="text-[#ababa5]">
              combine cardiovascular exercise with strength training for a
              comprehensive workout that boosts both heart health and muscle
              strength.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;

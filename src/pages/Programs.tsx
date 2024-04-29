import { SelectedPage } from "@/utils/types";
import { motion } from "framer-motion";
import BmiIcon from "@/assets/bmi.png";
import NutritionIcon from "@/assets/apple.png";
import ExerciseIcon from "@/assets/exercise.png";
import BmiCalculator from "./BmiCalculator";
import Nutrition from "./Nutrition";
import Exercises from "./Exercises";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Programs = ({ setSelectedPage }: Props) => {
  const modalStyle =
    "fixed inset-0 z-50 flex items-center justify-center bg-primary-100 bg-opacity-50";
  const [showBmiModal, setShowBmiModal] = useState(false);
  const [showNutriModal, setNutriShowModal] = useState(false);
  const [showExerModal, setExerShowModal] = useState(false);
  return (
    <div className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Programs)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="lg:text-8xl text-5xl text-center text-primary-200 font-semibold mb-20">
            Try Our Free Online Programs
          </h1>
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {showBmiModal ? <BmiCalculator modalStyle={modalStyle} /> : <></>}
              <div
                className="bg-[#131313] max-w-[300px] p-5 hover:bg-blue-700 cursor-pointer"
                onClick={() => setShowBmiModal(!showBmiModal)}
              >
                <div className="flex items-center gap-5 pb-5">
                  <img
                    src={BmiIcon}
                    alt="A man on treadmill"
                    className="bg-transparent w-12 rounded-sm"
                  />
                  <h3>BMI Calculator</h3>
                </div>
                <p className="text-[#ababa5]">
                  reduce body fat by burning more calories than you consume
                  through diet and exercise
                </p>
              </div>{" "}
              {showNutriModal ? <Nutrition modalStyle={modalStyle} /> : <></>}
              <div
                className="bg-[#131313] max-w-[300px] p-5 hover:bg-blue-700 cursor-pointer"
                onClick={() => setNutriShowModal(!showNutriModal)}
              >
                <div className="flex items-center gap-5 pb-5">
                  <img
                    src={NutritionIcon}
                    alt="A strong muscle"
                    className="bg-transparent w-12 rounded-sm"
                  />
                  <h3>Nutrition Tracker</h3>
                </div>
                <p className="text-[#ababa5]">
                  build muscle by engaging in strength training exercise and
                  consuming adequate protein to support muscle growth and
                  repair.
                </p>
              </div>
              {showExerModal ? <Exercises modalStyle={modalStyle} /> : <></>}
              <div
                className="bg-[#131313] max-w-[300px] p-5 hover:bg-blue-700 cursor-pointer"
                onClick={() => setExerShowModal(!showExerModal)}
              >
                <div className="flex items-center gap-5 pb-5">
                  <img
                    src={ExerciseIcon}
                    alt="A heart beating"
                    className="bg-transparent w-12 rounded-sm"
                  />
                  <h3>Exercises</h3>
                </div>
                <p className="text-[#ababa5]">
                  combine cardiovascular exercise with strength training for a
                  comprehensive workout that boosts both heart health and muscle
                  strength.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Programs;

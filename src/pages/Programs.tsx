import { useState } from "react";
import { SelectedPage } from "@/utils/types";
import { motion } from "framer-motion";
import BmiIcon from "@/assets/bmi.png";
import NutritionIcon from "@/assets/apple.png";
import ExerciseIcon from "@/assets/exercise.png";
import Nutrition from "@/components/Modals/Nutrition";
import BmiCalculator from "@/components/Modals/BmiCalculator";
import Exercises from "@/components/Modals/Exercises";
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="black"
  className="w-8 h-8"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>;

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Programs = ({ setSelectedPage }: Props) => {
  const modalStyle =
    "fixed inset-0 z-50 flex items-center justify-center bg-primary-100 bg-opacity-50";
  const closeBtn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-8 h-8 "
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );

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
              {showBmiModal ? (
                <BmiCalculator
                  modalStyle={modalStyle}
                  closeBtn={closeBtn}
                  setShowBmiModal={setShowBmiModal}
                />
              ) : (
                <></>
              )}
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
                  Unlock Your Health Potential: Explore Your Body's Composition
                  with Our BMI Calculator. Understand Your Numbers, Shape Your
                  Future.
                </p>
              </div>{" "}
              {showNutriModal ? (
                <Nutrition
                  modalStyle={modalStyle}
                  closeBtn={closeBtn}
                  setNutriShowModal={setNutriShowModal}
                />
              ) : (
                <></>
              )}
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
                  <h3>AI-Powered Nutrition Tracker</h3>
                </div>
                <p className="text-[#ababa5]">
                  Elevate Your Nutrition Game: Harness the Power of AI to
                  Uncover the Nutritional Secrets of Your Food. Dive Deep into
                  Detailed Values, Empower Your Diet.
                </p>
              </div>
              {showExerModal ? (
                <Exercises
                  modalStyle={modalStyle}
                  closeBtn={closeBtn}
                  setExerShowModal={setExerShowModal}
                />
              ) : (
                <></>
              )}
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
                  <h3>Exercise Search Tool</h3>
                </div>
                <p className="text-[#ababa5]">
                  Whether You Seek Specific Exercises or Targeted Muscle
                  Workouts, Let Our Search Tool Guide You with Live Visuals and
                  Expert Guidance.
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

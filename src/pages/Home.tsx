import { SelectedPage, HomeProps } from "@/utils/types";
import header from "@/assets/header.png";
import Programs from "@/components/Programs";
import Exercises from "./Exercises";

const Home = ({ setSelectedPage }: HomeProps) => {
  return (
    <div className="bg-black text-white">
      <header className=" flex flex-col items-center">
        <img src={header} alt="" className="w-full" />
      </header>
      <Programs />
    </div>
  );
};

export default Home;

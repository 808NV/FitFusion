import header from "@/assets/header.png";
import { SelectedPage } from "@/utils/types";
type HomeProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: HomeProps) => {
  return (
    <div className="bg-black text-white flex flex-col items-center">
      <img src={header} alt="" className="" />
      <div>
        <button>Explore Our Programs</button>
      </div>
    </div>
  );
};

export default Home;

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import Links from "./Links";
import { SelectedPage, NavbarProps } from "@/utils/types";

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: NavbarProps) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-white drop-shadow text-black";
  return (
    <nav className="bg-black text-white">
      <div
        className={` fixed w-full ${navbarBackground} flex items-center ${
          isAboveMediumScreens ? "justify-around" : "justify-between"
        } top-0 z-30 w-full py-6 px-10`}
      >
        <h1 className={`logo ${isAboveMediumScreens ? "text-3xl" : "text-lg"}`}>
          FitFusion
        </h1>

        {isAboveMediumScreens ? (
          <>
            {/* desktop version */}
            <div className="flex items-center gap-6 ">
              <Links
                page="home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Links
                page="Programs"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Links
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="flex items-center gap-6">
              <div>Sign In</div>
              <button className="bg-white text-black py-1 px-3 rounded-[5px] cursor-pointer">
                Become a Member
              </button>
            </div>
          </>
        ) : (
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <Bars3Icon className="h-6 w-6" />
          </button>
        )}
      </div>
      {/* mobile menu modal */}
      {!isAboveMediumScreens && toggleMenu && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-black drop-shadow-xl">
          <div className="flex justify-end px-10 py-6">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 ">
            <Links
              page="home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Programs"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

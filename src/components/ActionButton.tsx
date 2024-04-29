import { SelectedPage, ActionBtnProps } from "@/utils/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ActionButton = ({ children, setSelectedPage }: ActionBtnProps) => {
  return (
    <AnchorLink
      className="rounded-md text-black bg-primary-200 px-10 py-2 hover:bg-primary-500 hover:text-black"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;

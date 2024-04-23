import { SelectedPage } from "@/utils/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type LinksProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Links = ({ page, selectedPage, setSelectedPage }: LinksProps) => {
  const currentPage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <div className="cursor-pointer">
      <AnchorLink
        className={`${
          selectedPage === currentPage ? "bg-green-950" : ""
        } transition duration-500 hover:bg-green-500`}
        href={`#${currentPage}`}
        onClick={() => setSelectedPage(currentPage)}
      >
        {page}
      </AnchorLink>
    </div>
  );
};

export default Links;

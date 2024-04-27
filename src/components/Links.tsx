import { SelectedPage, LinksProps } from "@/utils/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Links = ({ page, selectedPage, setSelectedPage }: LinksProps) => {
  const currentPage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <div className="cursor-pointer">
      <AnchorLink
        className={`${
          selectedPage === currentPage ? "bg-black text-white" : ""
        } transition duration-500 hover:bg-black hover:text-white px-2 py-2 `}
        href={`#${currentPage}`}
        onClick={() => setSelectedPage(currentPage)}
      >
        {page}
      </AnchorLink>
    </div>
  );
};

export default Links;

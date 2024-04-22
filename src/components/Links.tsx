import AnchorLink from "react-anchor-link-smooth-scroll";

type LinksProps = {
  page: string;
};

const Links = ({ page }: LinksProps) => {
  return (
    <div>
      <AnchorLink>{page}</AnchorLink>
    </div>
  );
};

export default Links;

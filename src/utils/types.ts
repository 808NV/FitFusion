export enum SelectedPage {
  Home = "home",
  Programs = "Programs",
  About = "About",
}

export type HomeProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

export type LinksProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export type NavbarProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  Programs = "programs",
  ContactUs = "contactus",
}

/* pages types */

export type HomeProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

export type BenefitsProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type ClassesProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

export type ClassType = {
  name: string;
  description?: string;
  image: string;
};

export type ProgramsProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

export type ContactProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

/* components types */

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

export type HTextProps = {
  children: React.ReactNode;
};

export type ClassProps = {
  name: string;
  description?: string;
  image: string;
};

export type BenefitProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export type ActionBtnProps = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

/* data types */

export type FetchedNutrition = [
  {
    calories: number;
    carbohydrates_total_g: number;
    cholesterol_mg: number;
    fat_saturated_g: number;
    fat_total_g: number;
    fiber_g: number;
    name: string;
    potassium_mg: number;
    protein_g: number;
    serving_size_g: number;
    sodium_mg: number;
    sugar_g: number;
  }
];

export type FetchedExercises = [
  {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    instructions: string[];
    name: string;
    target: string;
  }
];

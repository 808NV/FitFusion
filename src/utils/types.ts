export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  Programs = "Programs",
  ContactUs = "contactus",
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

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type ClassType = {
  name: string;
  description?: string;
  image: string;
};

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

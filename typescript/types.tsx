import type {
  MenuCategoryInterface,
  MenuInterface,
  MenuItemInterface,
  RefsItemInterface,
} from "./interfaces";

export type HomeProps = {
  categories: MenuCategoryInterface[];
  menu: MenuInterface
};

export type MenuProps = {
  menuItem: MenuCategoryInterface;
};

export type MenuTitleProps = {
  menuItem: MenuCategoryInterface;
};

export type MenuItemMapProps = {
  menuItem: MenuCategoryInterface;
};

export type MenuItemMapHelperProps = {
  item: MenuItemInterface;
  subCategory: string;
};

export type MenuItemMapSubItemsProps = {
  item: MenuItemInterface;
};

export type FoodDetailsProps = {
  foodDetails: {
    greek: string[];
    english: string[];
  };
};
export type InfosFootnoteProps = {
  footnote: string[];
};

export type InfosProps = {
  foodInfos: {
    greek: string[];
    english: string[];
  };
  restaurantInfos: {
    greek: string[];
    english: string[];
  };
};

export type IntroductionProps = {
  title: string;
  subtitle: string;
  description: string;
};

export type PageComponentProps = {
  children: React.ReactNode;
};

export type FootnoteProps = {
  facebookURL: string;
  tripadvisorURL: string;
  road: string;
  telephone: string;
};

export type NavBarProps = {
  scrollPosition: number;
  children: React.ReactNode;
  refs: RefsItemInterface[];
};

export type GetStatitPropsReturnedType = {
  props: {
    categories: MenuCategoryInterface[];
    menu: MenuInterface
  };
  // revalidate: number;
};

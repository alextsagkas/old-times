export interface menuInterface {
  title: string;
  subtitle: string;
  road: string;
  telephone: string;
  facebook: string;
  tripadvisor: string;
  description: string;
  foodDetails: {
    greek: string[];
    english: string[];
  };
  foodInfos: {
    greek: string[];
    english: string[];
  };
  restaurantInfos: {
    greek: string[];
    english: string[];
  };
  footnote: string[];
}

export interface FoodDetailsProps {
  foodDetails: {
    greek: string[];
    english: string[];
  };
}

export interface InfosFootnoteProps {
  footnote: string[];
}

export interface InfosProps {
  foodInfos: {
    greek: string[];
    english: string[];
  };
  restaurantInfos: {
    greek: string[];
    english: string[];
  };
}

export interface IntroductionProps {
  title: string;
  subtitle: string;
  description: string;
}

export interface PageComponentProps {
  children: React.ReactNode;
}

export interface FootnoteProps {
  facebookURL: string;
  tripadvisorURL: string;
  road: string;
  telephone: string;
}

export interface NavBarProps {
  scrollPosition: number;
  children: React.ReactNode;
  refs: RefsItemInterface[];
}

export interface RefsItemInterface {
  ref: React.RefObject<HTMLDivElement>;
  title: string;
}

export interface menuItemInterface {
  name: string;
  subCategory: string;
  description: string;
  fresh: number;
  price: number;
  subItems: MenuSubItemInterface[];
}

export interface MenuSubItemInterface {
  name: string;
  description: string;
  fresh: number;
  price: number;
}

export interface menuCategoryInterface {
  category: string;
  fresh: number;
  items: menuItemInterface[];
}

export interface MenuProps {
  menuItem: menuCategoryInterface;
}

export interface MenuTitleProps {
  menuItem: menuCategoryInterface;
}

export interface MenuItemMapProps {
  menuItem: menuCategoryInterface;
}

export interface MenuItemMapHelperProps {
  item: menuItemInterface;
  subCategory: string;
}

export interface MenuItemMapSubItemsProps {
  item: menuItemInterface;
}

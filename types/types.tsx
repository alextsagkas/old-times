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

export interface menuItemInterface {
  name: string;
  description: string;
  fresh: number;
  price: number;
}

export interface menuDessertItemInterface {
  name: string;
  description: string;
  fresh: number;
  price: number;
  items: menuItemInterface[];
}

export interface menuCategoryInterface {
  category: string;
  fresh: number;
  items: menuItemInterface[];
}

export interface menuDessertCategoryInterface {
  category: string;
  fresh: number;
  items: menuDessertItemInterface[];
}
export interface menuWineCategoryInterface {
  category: string;
  fresh: number;
  items: {
    white: {
      category: string;
      fresh: number;
      items: menuItemInterface[];
    };
    red: {
      category: string;
      fresh: number;
      items: menuItemInterface[];
    };
    rose: {
      category: string;
      fresh: number;
      items: menuItemInterface[];
    };
    sparkling: {
      category: string;
      fresh: number;
      items: menuItemInterface[];
    };
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

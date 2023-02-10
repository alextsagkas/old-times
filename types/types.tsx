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

export interface menuCategoryInterface {
  category: string;
  fresh: number;
  items: menuItemInterface[];
}

export interface menuWineCategoryInterface {
  category: string;
  fresh: number;
  items: {
    white: {
      category: string;
      items: menuItemInterface[];
    };
    red: {
      category: string;
      items: menuItemInterface[];
    };
    rose: {
      category: string;
      items: menuItemInterface[];
    };
    sparkling: {
      category: string;
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
  children: JSX.Element;
}

export interface FootnoteProps {
  facebookURL: string;
  tripadvisorURL: string;
  road: string;
  telephone: string;
}

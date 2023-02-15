export interface MenuInterface {
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

export interface RefsItemInterface {
  ref: React.RefObject<HTMLDivElement>;
  title: string;
}

export interface MenuItemInterface {
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

export interface MenuCategoryInterface {
  category: string;
  fresh: number;
  items: MenuItemInterface[];
}

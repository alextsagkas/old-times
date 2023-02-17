export interface MenuInterface {
  title: string;
  subtitle: string;
  road: string;
  telephone: string;
  facebook: string;
  tripadvisor: string;
  description: string;
  foodDetailsGreek: string[];
  foodDetailsEnglish: string[];
  foodInfosGreek: string[];
  foodInfosEnglish: string[];
  restaurantInfosGreek: string[];
  restaurantInfosEnglish: string[];
  footnote: string[];
}

export interface RefsItemInterface {
  ref: React.RefObject<HTMLDivElement>;
  title: string;
}

export interface MenuItemInterface {
  id: string;
  name: string;
  subCategory: string;
  description: string;
  fresh: number;
  price: number;  
  menuCategoryId: string;
  subItems: MenuSubItemInterface[];
}

export interface MenuSubItemInterface {
  id: string;
  name: string;
  description: string;
  fresh: number;
  price: number;
  menuItemId: string;
}

export interface MenuCategoryInterface {
  id: string;
  category: string;
  fresh: number;
  position: number;
  MenuItems: MenuItemInterface[];
}

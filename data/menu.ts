import {
  menuInterface,
  menuCategoryInterface,
  menuWineCategoryInterface,
  menuDessertCategoryInterface,
} from "../types/types";

// Menu Infos

export const menu: menuInterface = {
  title: "OLD TIMES",
  subtitle: "Pizza - Pasta",
  road: "Spirou Arvanitaki 7",
  telephone: "+30 26610 47558",
  facebook: "https://www.facebook.com/profile.php?id=100069351465975",
  tripadvisor:
    "https://www.tripadvisor.com/Restaurant_Review-g662629-d8078833-Reviews-Old_Times-Corfu_Town_Corfu_Ionian_Islands.html",
  description:
    "Inspired by the Mediterranean - Italian cuisine and culture, our dishes are prepared with pure ingredients, extra virgin olive oil of Corfu and a lot of love, for you to enjoy at any time of the day.",
  foodDetails: {
    greek: [
      "Για την παρασκευή των μαγειρευτών και τις σαλάτες χρησιμοποιούμε ελαιόλαδο.",
      "Η φέτα είναι Π.Ο.Π.",
      "Για το τηγάνισμα χρησιμοποιούμε σπορέλαιο.",
    ],
    english: [
      "For cooking and salads we use olive oil.",
      "The feta cheese we use is PDO.",
      "For frying, we use seed oil.",
    ],
  },
  foodInfos: {
    greek: [
      "Κατεψυγμένα προϊόντα: τυροπιτάκια, σπανακοπιτάκια, γαρίδες, μύδια, καλαμαράκια, βακαλάος, φιλέτο, σνίτσελ.",
    ],
    english: [
      "Frozen products: cheese pies, spinach pies, shrimp, mussels, squids, cod fillet, schnitzel.",
    ],
  },
  restaurantInfos: {
    greek: [
      "Το κατάστημα υποχρεούται να διαθέτει έντυπα δελτία σε ειδική θήκη δίπλα στην έξοδο για τη διατύπωση οποιασδήποτε διαμαρτυρίας.",
    ],
    english: [
      "The restaurant is compelled to allocate printed bulletins in a special place next to the exit fot the formulation of any protest.",
    ],
  },
  footnote: [
    "Manager: Alexandros Arathymos",
    "Prices include VAT",
    "Consumer is not obliged to pay if the notice of payment has not been received",
  ],
};

// Menu Categories

export const bruschetta: menuCategoryInterface = {
  category: "Bruschetta",
  fresh: 0,
  items: [
    {
      name: "Fresh bread",
      description: "",
      fresh: 2,
      price: 1.0,
    },
    {
      name: "Garlic bread",
      description: "",
      fresh: 2,
      price: 2.5,
    },
    {
      name: "Mediterranean bruschetta",
      description: "with tomato, garlic, oregano and feta cheese",
      fresh: 1,
      price: 4.9,
    },
  ],
};

export const greekDips: menuCategoryInterface = {
  category: "Greek dips",
  fresh: 0,
  items: [
    {
      name: "Tzatziki",
      description:
        "made with yoghurt, drained cucumber, olive oil, fresh herbs, garlic and vinegar",
      fresh: 1,
      price: 3.9,
    },
    {
      name: "Taramosalata",
      description:
        "made with fish roe, olive oil, lemon juice, garlic, onion and bread",
      fresh: 0,
      price: 4.9,
    },
    {
      name: "Eggplant salad",
      description:
        "made with roasted eggplant garlic, parsley, red paprika, vinegar, mint and extra virgin olive oil",
      fresh: 0,
      price: 4.9,
    },
    {
      name: "Tirokafteri",
      description: "spicy cheese dip",
      fresh: 1,
      price: 3.9,
    },
    {
      name: "Olives",
      description: "",
      fresh: 2,
      price: 3.9,
    },
    {
      name: "Hummus",
      description:
        "made with split pea, extra virgin olive oil, caramelized onion and capers",
      fresh: 2,
      price: 4.9,
    },
    {
      name: "Baked feta cheese",
      description: "with tomato, onion, pepper and fresh oregano",
      fresh: 1,
      price: 5.9,
    },
    {
      name: "Meze for 2 people",
      description:
        "tzatziki, hummus, tirokafteri, spinach pie, grilled vegetables, pita bread",
      fresh: 0,
      price: 24.0,
    },
  ],
};

export const appetizers: menuCategoryInterface = {
  category: "Appetizers",
  fresh: 0,
  items: [
    {
      name: "Melon à la prosciutto korfiata",
      description: "with fresh rocket and noumboulo",
      fresh: 0,
      price: 8.9,
    },
    {
      name: "Saganaki",
      description: "fried Greek hard cheese",
      fresh: 1,
      price: 5.9,
    },
    {
      name: "Roasted halloumi",
      description: "served with homemade jam",
      fresh: 1,
      price: 6.9,
    },
    {
      name: "Cheese pie",
      description: "with honey and black sesame",
      fresh: 1,
      price: 6.0,
    },
    {
      name: "Spinach pie",
      description: "with dill and fresh spring onions",
      fresh: 1,
      price: 5.9,
    },
    {
      name: "Grilled vegetables",
      description:
        "zucchini, eggplant, florin pepper, mushrooms, onion, tomato and balsamic cream with honey",
      fresh: 2,
      price: 8.9,
    },
    {
      name: "Fresh French fires",
      description: "",
      fresh: 2,
      price: 3.5,
    },
  ],
};

export const salads: menuCategoryInterface = {
  category: "Salads",
  fresh: 0,
  items: [
    {
      name: "Greek salad",
      description:
        "pieces of tomatoes, cucumbers, onion, pepper slices, feta cheese, black olives dressed with olive oil, capers and oregano",
      fresh: 1,
      price: 7.9,
    },
    {
      name: "Parmesan - rocket salad",
      description: "with cherry tomatoes and aged balsamic sauce",
      fresh: 1,
      price: 6.9,
    },
    {
      name: "Caprese",
      description: "fresh rocket salad, tomato, mozzarella and balsamic pesto",
      fresh: 1,
      price: 8.9,
    },
    {
      name: "Chicken salad",
      description:
        "mixed green salad, cherry tomatoes, smoked chicken, parmesan, cheese, croutons and Caesar dressing",
      fresh: 1,
      price: 9.9,
    },
    {
      name: "Old times",
      description:
        "mixed green salad, figs flavoured with ouzo, kumquat, manouri cheese, and citrus vinaigrette",
      fresh: 1,
      price: 10.9,
    },
  ],
};

export const liquers: menuCategoryInterface = {
  category: "Liquers",
  fresh: 0,
  items: [
    {
      name: "Kumquat",
      description: "",
      fresh: 0,
      price: 5.0,
    },
    {
      name: "Limoncello",
      description: "",
      fresh: 0,
      price: 5.0,
    },
    { name: "Amaro Averna", description: "", fresh: 0, price: 5.0 },
  ],
};

export const cocktails: menuCategoryInterface = {
  category: "Cocktails",
  fresh: 0,
  items: [
    {
      name: "Mojito",
      description: "",
      fresh: 0,
      price: 9.0,
    },
    {
      name: "Margarita",
      description: "",
      fresh: 0,
      price: 9.0,
    },
    {
      name: "Cosmopolitan",
      description: "",
      fresh: 0,
      price: 9.0,
    },
    {
      name: "Aperol Spritz",
      description: "",
      fresh: 0,
      price: 9.0,
    },
  ],
};

export const wines: menuWineCategoryInterface = {
  category: "Wine List",
  fresh: 0,
  items: {
    white: {
      category: "White wine",
      fresh: 0,
      items: [
        {
          name: "Glass of white",
          description: "",
          fresh: 0,
          price: 5.9,
        },
        {
          name: "Papaioannou",
          description: "Chardonnay",
          fresh: 0,
          price: 23.0,
        },
        {
          name: "Vivlia Chora",
          description: "Sauvignon blanc",
          fresh: 0,
          price: 36.0,
        },
        {
          name: "Karipidis",
          description: "Sauvignon blanc",
          fresh: 0,
          price: 23.0,
        },
        {
          name: "Papaioannou",
          description: "Malagousia (bio)",
          fresh: 0,
          price: 23.0,
        },
        {
          name: "Theotoky Estate",
          description: "Robola, Kakotrigis (bio, local)",
          fresh: 0,
          price: 23.0,
        },
      ],
    },
    red: {
      category: "Red wine",
      fresh: 0,
      items: [
        {
          name: "Glass of red",
          description: "",
          fresh: 0,
          price: 3.9,
        },
        {
          name: "Sangria",
          description: "",
          fresh: 0,
          price: 4.9,
        },
        {
          name: "Dryofilos Papaioannou",
          description: "Cabernet Sauvignon",
          fresh: 0,
          price: 23.0,
        },
        {
          name: "Karipidis Merlo",
          description: "dry (bio)",
          fresh: 0,
          price: 29.0,
        },
        {
          name: "Alpha Estate Merlo",
          description: "Syrah Xinomavro",
          fresh: 0,
          price: 40.0,
        },
      ],
    },
    rose: {
      category: "Rosé wine",
      fresh: 0,
      items: [
        {
          name: "Glass of rosé",
          description: "",
          fresh: 0,
          price: 3.9,
        },
        {
          name: "Domain Lazaridis",
          description: "Merlo Rosé",
          fresh: 0,
          price: 29.0,
        },
        {
          name: "Idylle La Tour Melas",
          description: "Grenache, Syrah, Agioritiko",
          fresh: 0,
          price: 36.0,
        },
        {
          name: "Treis Magisses",
          description: "Syrah, Agioritiko, semi-sweet",
          fresh: 0,
          price: 23.0,
        },
      ],
    },
    sparkling: {
      category: "Sparkling wine",
      fresh: 0,
      items: [
        {
          name: "Gancio Prosecco",
          description: "brut 750ml",
          fresh: 0,
          price: 23.0,
        },
        {
          name: "Gancia Prosecco",
          description: "brut 200ml",
          fresh: 0,
          price: 8.0,
        },
        {
          name: "Moët Chandon",
          description: "brut Imperial",
          fresh: 0,
          price: 100.0,
        },
        {
          name: "Moët Chandon",
          description: "Ice Imperial",
          fresh: 0,
          price: 130.0,
        },
      ],
    },
  },
};

export const coffee: menuCategoryInterface = {
  category: "Coffees",
  fresh: 0,
  items: [
    {
      name: "Espresso",
      description: "",
      fresh: 0,
      price: 2.0,
    },
    {
      name: "Espresso Macchiato",
      description: "",
      fresh: 0,
      price: 2.3,
    },
    {
      name: "Espresso Cortado",
      description: "",
      fresh: 0,
      price: 2.3,
    },
    {
      name: "Espresso Freddo",
      description: "",
      fresh: 0,
      price: 3.5,
    },
    {
      name: "Americano",
      description: "",
      fresh: 0,
      price: 3.0,
    },
    {
      name: "Cappuccino",
      description: "",
      fresh: 0,
      price: 3.0,
    },
    {
      name: "Double cappuccino",
      description: "",
      fresh: 0,
      price: 3.5,
    },
    {
      name: "Latte",
      description: "",
      fresh: 0,
      price: 3.5,
    },
    {
      name: "Freddo cappuccino",
      description: "",
      fresh: 0,
      price: 3.5,
    },
    {
      name: "Irish coffe",
      description: "",
      fresh: 0,
      price: 6.0,
    },
    {
      name: "Greek coffe",
      description: "",
      fresh: 0,
      price: 2.3,
    },
    {
      name: "Nescafé",
      description: "",
      fresh: 0,
      price: 2.5,
    },
    {
      name: "Frappé",
      description: "",
      fresh: 0,
      price: 3.0,
    },
    {
      name: "Frappé with ice-cream ",
      description: "",
      fresh: 0,
      price: 5,
    },
    {
      name: "Tea",
      description: "",
      fresh: 0,
      price: 3.5,
    },
    {
      name: "Hot chocolate",
      description: "",
      fresh: 0,
      price: 3.5,
    },
    {
      name: "Cold chocolate",
      description: "",
      fresh: 0,
      price: 3.7,
    },
    {
      name: "Greek coffe",
      description: "",
      fresh: 0,
      price: 2.3,
    },
  ],
};

export const spirits: menuCategoryInterface = {
  category: "Spirits",
  fresh: 0,
  items: [
    {
      name: "Ouzo",
      description: "Glass, Carafe",
      fresh: 0,
      price: 0,
    },
    {
      name: "Tsipouro Glass",
      description: "",
      fresh: 0,
      price: 3.0,
    },
    {
      name: "Tsipouro Carafe",
      description: "",
      fresh: 0,
      price: 3.0,
    },
    {
      name: "Metaxa 5*",
      description: "",
      fresh: 0,
      price: 5.5,
    },
    {
      name: "Bacardi",
      description: "",
      fresh: 0,
      price: 5.0,
    },
    {
      name: "Vodka",
      description: "",
      fresh: 0,
      price: 5.0,
    },
    {
      name: "Gin",
      description: "",
      fresh: 0,
      price: 5.0,
    },
    {
      name: "Martini",
      description: "",
      fresh: 0,
      price: 5.0,
    },
    {
      name: "Whisky",
      description: "",
      fresh: 0,
      price: 5.0,
    },
    {
      name: "Whisky special",
      description: "",
      fresh: 0,
      price: 7.0,
    },
  ],
};

export const beers: menuCategoryInterface = {
  category: " Beers",
  fresh: 0,
  items: [
    {
      name: "Corfu beer Draught",
      description: "",
      fresh: 0,
      price: 4.5,
    },
    {
      name: "Corfu beer Gold",
      description: "",
      fresh: 0,
      price: 4.0,
    },
    {
      name: "Mythos",
      description: "",
      fresh: 0,
      price: 4.0,
    },
    {
      name: "Heineken",
      description: "",
      fresh: 0,
      price: 4.0,
    },
  ],
};

export const softDrinks: menuCategoryInterface = {
  category: "Soft Drinks",
  fresh: 0,
  items: [
    {
      name: "Coca-cola (zero/normal)",
      description: "",
      fresh: 0,
      price: 2.9,
    },
    {
      name: "Sprite",
      description: "",
      fresh: 0,
      price: 2.9,
    },
    {
      name: "Fanta (lemon/orange)",
      description: "",
      fresh: 0,
      price: 2.9,
    },
    {
      name: "Ginger beer (non alcoholic, local)",
      description: "",
      fresh: 0,
      price: 3.5,
    },
    {
      name: "Coca-cola (zero/normal)",
      description: "",
      fresh: 0,
      price: 2.9,
    },
    {
      name: "Tonic water",
      description: "",
      fresh: 0,
      price: 2.9,
    },
    {
      name: "Sparkling water 250ml",
      description: "",
      fresh: 0,
      price: 2.9,
    },
    {
      name: "Sparkling water 750ml",
      description: "",
      fresh: 0,
      price: 4.9,
    },
    {
      name: "Still water 1l",
      description: "",
      fresh: 0,
      price: 2.0,
    },
    {
      name: "Orange juice",
      description: "",
      fresh: 0,
      price: 3.9,
    },
    {
      name: "Lemon juice",
      description: "",
      fresh: 0,
      price: 3.9,
    },
    {
      name: "Ice tea (lemon/peach)",
      description: "",
      fresh: 0,
      price: 3.0,
    },
  ],
};

export const desserts: menuDessertCategoryInterface = {
  category: "Desserts",
  fresh: 0,
  items: [
    {
      name: "Baklava",
      description: "layered pastry filled with chopped nuts and simple syrup",
      fresh: 0,
      price: 4.5,
      items: [],
    },
    {
      name: "Apple pie",
      description: "",
      fresh: 0,
      price: 4.5,
      items: [],
    },
    {
      name: "Yoghurt salads",
      description: "create your own yoghurt salad",
      fresh: 0,
      price: 4.0,
      items: [
        {
          name: "With honey and walnuts",
          description: "",
          fresh: 0,
          price: 2.0,
        },
        {
          name: "With muesli and walnuts",
          description: "",
          fresh: 0,
          price: 2.0,
        },
        {
          name: "With fresh fruit",
          description: "",
          fresh: 0,
          price: 2.0,
        },
        {
          name: "Added ice-cream scoop",
          description: "",
          fresh: 0,
          price: 2.0,
        },
      ],
    },
  ],
};

export const fruits: menuCategoryInterface = {
  category: "Fruits",
  fresh: 2,
  items: [
    {
      name: "Melon",
      description: "",
      fresh: 0,
      price: 4.0,
    },
    {
      name: "Fruit salad",
      description: "",
      fresh: 0,
      price: 6.0,
    },
  ],
};

export const iceCreamMilkShake: menuCategoryInterface = {
  category: "Ice cream and milkshake",
  fresh: 1,
  items: [
    {
      name: "Vanilla",
      description: "",
      fresh: 0,
      price: 6.0,
    },
    {
      name: "Strawberry",
      description: "",
      fresh: 0,
      price: 6.0,
    },
    {
      name: "Chocolate",
      description: "",
      fresh: 0,
      price: 6.0,
    },
  ],
};

export const traditional: menuCategoryInterface = {
  category: "Traditional Greek dishes",
  fresh: 0,
  items: [
    {
      name: "Pastitsada",
      description:
        "simmered beef with spices and ren wine sauce served with pappardelle",
      fresh: 0,
      price: 11.9,
    },
    {
      name: "Sofrito",
      description:
        "tender slices of beef with garlic, parsley, wine, vinegar, served with fresh French fries",
      fresh: 0,
      price: 11.9,
    },
    {
      name: "Mousaka",
      description: "layers of eggplant slices, chopped meat and béchamel sauce",
      fresh: 0,
      price: 9.9,
    },
    {
      name: "Park gyros",
      description: "served with pita bread, fresh French fires and salad",
      fresh: 0,
      price: 9.9,
    },
    {
      name: "Souvlaki",
      description:
        "grilled meat, chicken or pork, served with pita bread, fresh French fires and salad",
      fresh: 0,
      price: 9.9,
    },
  ],
};

export const pasta: menuCategoryInterface = {
  category: "Pasta",
  fresh: 0,
  items: [
    {
      name: "Al pesto",
      description: "linguini, cherry tomatoes and balsamic pesto",
      fresh: 2,
      price: 8.9,
    },
    {
      name: "Alla Bolognese",
      description: "",
      fresh: 0,
      price: 9.9,
    },
    {
      name: "Carbonara",
      description: "",
      fresh: 0,
      price: 9.9,
    },
    {
      name: "4 Chesses",
      description:
        "mozzarella, parmesan, gorgonzola, gouda and fresh cherry tomatoes",
      fresh: 1,
      price: 11.9,
    },
    {
      name: "Vegetarian",
      description:
        "ilinguini, cherry tomatoes, onion, pepper, zucchini, eggplant, mushrooms",
      fresh: 2,
      price: 9.9,
    },
    {
      name: "Shrimp linguini",
      description: "linguini with cherry tomatoes and fresh parsley",
      fresh: 0,
      price: 14.9,
    },
    {
      name: "Chicken with balsamic cream",
      description:
        "chicken with garlic, olive oil, balsamic, cream, sage, sour cream and parmesan cheese",
      fresh: 0,
      price: 11.9,
    },
    {
      name: "Ravioli",
      description:
        "eggplant, cherry tomatoes, caramelized onion and tomato sauce",
      fresh: 1,
      price: 12.5,
    },
    {
      name: "Spinach ravioli",
      description: "feta sauce, fresh spring onion and anise",
      fresh: 1,
      price: 12.5,
    },
    {
      name: "Shrimp risotto",
      description: "",
      fresh: 0,
      price: 14.9,
    },
  ],
};

export const pizza: menuCategoryInterface = {
  category: "Pizza",
  fresh: 0,
  items: [
    {
      name: "Margarita",
      description: "fresh tomato, mozzarella, fresh basil",
      fresh: 1,
      price: 9.9,
    },
    {
      name: "Caprese",
      description: "rocket salad, basil pesto and mozzarella",
      fresh: 0,
      price: 9.9,
    },
    {
      name: "Italy",
      description: "fresh tomato, mozzarella, rocket salad and prosciutto",
      fresh: 0,
      price: 11.9,
    },
    {
      name: "Korfiata",
      description: "fresh tomato, mozzarella, rocket salad and noumboulo",
      fresh: 0,
      price: 11.9,
    },
    {
      name: "Greek",
      description:
        "fresh tomato, pepper, onion, feta cheese, olives and fresh oregano",
      fresh: 1,
      price: 11.9,
    },
    {
      name: "4 Cheeses",
      description: "mozzarella, parmesan. gorgonzola, gouda and fresh tomato",
      fresh: 1,
      price: 11.9,
    },
    {
      name: "Special",
      description: "fresh tomato, mozzarella, ham, bacon, mushrooms, pepper",
      fresh: 0,
      price: 13.9,
    },
    {
      name: "Vegetarian",
      description:
        "cheese, tomato, onion, pepper, zucchini, eggplant, mushrooms",
      fresh: 2,
      price: 11.9,
    },
  ],
};

export const grilled: menuCategoryInterface = {
  category: "Grilled",
  fresh: 0,
  items: [
    {
      name: "Grilled pork fillet",
      description: "served with fresh French fries and salad",
      fresh: 0,
      price: 11.0,
    },
    {
      name: "Grilled pork fillet with mushrooms",
      description: "served with fresh French fries",
      fresh: 0,
      price: 13.9,
    },
    {
      name: "Calf tagliata",
      description:
        "with arugula leaves, cherry tomatoes, balsamic vinegar and parmesan flakes",
      fresh: 0,
      price: 14.9,
    },
    {
      name: "Chicken fillet",
      description: "marinated with oil, lemon and oregano",
      fresh: 0,
      price: 10.9,
    },
    {
      name: "beef fillet of special breeding with mushroom sauce",
      description: "served with French fries",
      fresh: 0,
      price: 24.0,
    },
    {
      name: "Meat mix",
      description: "for 2 people",
      fresh: 0,
      price: 42.0,
    },
  ],
};

export const seaFood: menuCategoryInterface = {
  category: "Seafood",
  fresh: 0,
  items: [
    {
      name: "Grilled calamari",
      description: "served with green salad",
      fresh: 0,
      price: 13.9,
    },
    {
      name: "Fried calamari",
      description: "served with green salad",
      fresh: 0,
      price: 10.9,
    },
    {
      name: "Grilled shrimps",
      description: "with fresh rocket and cherry tomatoes",
      fresh: 0,
      price: 14.9,
    },
    {
      name: "Grilled octopus",
      description: "with hummus and caramelized onions",
      fresh: 0,
      price: 14.9,
    },
    {
      name: "Fish of the day",
      description: "seabass or dorado",
      fresh: 0,
      price: 0,
    },
    {
      name: "Seafood mix",
      description: "grilled octopus, calamari, shrimps and grilled vegetables",
      fresh: 0,
      price: 44.0,
    },
  ],
};

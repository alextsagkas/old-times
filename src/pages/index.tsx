import { createRef, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { prisma } from "../server/db";

import Separator from "../components/Separator";
import FoodDetails from "../components/FoodDetails";
import Footnote from "../components/Footnote";
import Infos from "../components/Infos";
import InfosFootnote from "../components/InfosFootnote";
import Introduction from "../components/Introduction";
import MenuItem from "../components/MenuItem";
import NavBar from "../components/NavBar";

import type {
  GetStatitPropsReturnedType,
  HomeProps,
} from "../../typescript/types";

import type {
  MenuCategoryInterface,
  MenuInterface,
  RefsItemInterface,
} from "../../typescript/interfaces";

const Home: NextPage<HomeProps> = ({ categories, menu }) => {
  const IntroRef = createRef<HTMLDivElement>();
  const BruschettaRef = createRef<HTMLDivElement>();
  const GreekDipsRef = createRef<HTMLDivElement>();
  const AppetizersRef = createRef<HTMLDivElement>();
  const SaladsRef = createRef<HTMLDivElement>();
  const SeaFoodRef = createRef<HTMLDivElement>();
  const GrilledRef = createRef<HTMLDivElement>();
  const PizzaRef = createRef<HTMLDivElement>();
  const PastaRef = createRef<HTMLDivElement>();
  const TraditionalRef = createRef<HTMLDivElement>();
  const IceCreamMilkShakeRef = createRef<HTMLDivElement>();
  const FruitsRef = createRef<HTMLDivElement>();
  const DessertsRef = createRef<HTMLDivElement>();
  const SoftDrinksRef = createRef<HTMLDivElement>();
  const BeersRef = createRef<HTMLDivElement>();
  const SpiritsRef = createRef<HTMLDivElement>();
  const CoffeesRef = createRef<HTMLDivElement>();
  const WineListRef = createRef<HTMLDivElement>();
  const CocktailsRef = createRef<HTMLDivElement>();
  const LiquersRef = createRef<HTMLDivElement>();

  const refs = [
    { ref: IntroRef, title: "Menu" },
    {
      ref: BruschettaRef,
      title: (categories[0] as MenuCategoryInterface).category,
    },
    {
      ref: GreekDipsRef,
      title: (categories[1] as MenuCategoryInterface).category,
    },
    {
      ref: AppetizersRef,
      title: (categories[2] as MenuCategoryInterface).category,
    },
    {
      ref: SaladsRef,
      title: (categories[3] as MenuCategoryInterface).category,
    },
    {
      ref: SeaFoodRef,
      title: (categories[4] as MenuCategoryInterface).category,
    },
    {
      ref: GrilledRef,
      title: (categories[5] as MenuCategoryInterface).category,
    },
    {
      ref: PizzaRef,
      title: (categories[6] as MenuCategoryInterface).category,
    },
    {
      ref: PastaRef,
      title: (categories[7] as MenuCategoryInterface).category,
    },
    {
      ref: TraditionalRef,
      title: (categories[8] as MenuCategoryInterface).category,
    },
    {
      ref: IceCreamMilkShakeRef,
      title: (categories[9] as MenuCategoryInterface).category,
    },
    {
      ref: FruitsRef,
      title: (categories[10] as MenuCategoryInterface).category,
    },
    {
      ref: DessertsRef,
      title: (categories[11] as MenuCategoryInterface).category,
    },
    {
      ref: SoftDrinksRef,
      title: (categories[12] as MenuCategoryInterface).category,
    },
    {
      ref: BeersRef,
      title: (categories[13] as MenuCategoryInterface).category,
    },
    {
      ref: SpiritsRef,
      title: (categories[14] as MenuCategoryInterface).category,
    },
    {
      ref: CoffeesRef,
      title: (categories[15] as MenuCategoryInterface).category,
    },
    {
      ref: WineListRef,
      title: (categories[16] as MenuCategoryInterface).category,
    },
    {
      ref: CocktailsRef,
      title: (categories[17] as MenuCategoryInterface).category,
    },
    {
      ref: LiquersRef,
      title: (categories[18] as MenuCategoryInterface).category,
    },
  ];

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  categories.map((category, index) => {
    console.log(index, category.category);
  });

  return (
    <>
      <Head>
        <title>Old Times</title>
        <meta
          name="description"
          content="Old times, Greece, Corfu town restaurant"
        />
      </Head>
      <NavBar refs={refs} scrollPosition={scrollPosition}>
        <main className="flex flex-col gap-14 bg-secondary-100 md:gap-12">
          <Introduction
            title={menu.title}
            subtitle={menu.subtitle}
            description={menu.description}
            ref={IntroRef}
          />
          <Separator />
          {categories.map((category, index) => {
            if (category.position <= 12) {
              return (
                <MenuItem
                  key={category.id}
                  menuItem={categories[index] as MenuCategoryInterface}
                  ref={(refs[index + 1] as RefsItemInterface).ref}
                />
              );
            }
          })}
          <Separator />
          <FoodDetails
            foodDetails={{
              greek: menu.foodDetailsGreek,
              english: menu.foodDetailsEnglish,
            }}
          />
          <Separator />
          {categories.map((category, index) => {
            if (category.position > 12 && index <= refs.length) {
              return (
                <MenuItem
                  key={category.id}
                  menuItem={categories[index] as MenuCategoryInterface}
                  ref={(refs[index + 1] as RefsItemInterface).ref}
                />
              );
            }
          })}
          <Separator />
          <Infos
            foodInfos={{
              greek: menu.foodInfosGreek,
              english: menu.foodInfosEnglish,
            }}
            restaurantInfos={{
              greek: menu.restaurantInfosGreek,
              english: menu.restaurantInfosEnglish,
            }}
          />
          <Separator />
          <InfosFootnote footnote={menu.footnote} />
          <Separator />
          <Footnote
            facebookURL={menu.facebook}
            tripadvisorURL={menu.tripadvisor}
            road={menu.road}
            telephone={menu.telephone}
          />
        </main>
      </NavBar>
    </>
  );
};

export default Home;

export const getStaticProps = async (): Promise<GetStatitPropsReturnedType> => {
  const categories = await prisma.menuCategory.findMany({
    include: {
      MenuItems: {
        include: {
          subItems: true,
        },
      },
    },
    orderBy: {
      position: "asc",
    },
  });

  const menu = (await prisma.menu.findFirst({
    where: {
      id: "5133110a-4b5c-4208-bf6f-dd7c6a505076",
    },
  })) as MenuInterface;

  return {
    props: {
      categories,
      menu,
    },
    revalidate: 43200, // in seconds
  };
};

import { type NextPage } from "next";
import Head from "next/head";
import { createRef, useEffect, useState } from "react";

import {
  menu,
  bruschetta,
  greekDips,
  appetizers,
  salads,
  seaFood,
  grilled,
  pizza,
  pasta,
  traditional,
  iceCreamMilkShake,
  fruits,
  desserts,
  softDrinks,
  beers,
  spirits,
  coffee,
  cocktails,
  liquers,
  wines,
} from "../../data/menu";

import Separator from "../helperComponents/Separator";
import FoodDetails from "./FoodDetails";
import Footnote from "./Footnote";
import Infos from "./Infos";
import InfosFootnote from "./InfosFootnote";
import Introduction from "./Introduction";
import MenuDessertItem from "./MenuDessertItem";
import MenuItem from "./MenuItem";
import MenuWineItem from "./MenuWineItem";
import NavBar from "./NavBar";

const Home: NextPage = () => {
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
    { ref: BruschettaRef, title: bruschetta.category },
    { ref: GreekDipsRef, title: greekDips.category },
    { ref: AppetizersRef, title: appetizers.category },
    { ref: SaladsRef, title: salads.category },
    { ref: SeaFoodRef, title: seaFood.category },
    { ref: GrilledRef, title: grilled.category },
    { ref: PizzaRef, title: pizza.category },
    { ref: PastaRef, title: pasta.category },
    { ref: TraditionalRef, title: traditional.category },
    { ref: IceCreamMilkShakeRef, title: iceCreamMilkShake.category },
    { ref: FruitsRef, title: fruits.category },
    { ref: DessertsRef, title: desserts.category },
    { ref: SoftDrinksRef, title: softDrinks.category },
    { ref: BeersRef, title: beers.category },
    { ref: SpiritsRef, title: spirits.category },
    { ref: CoffeesRef, title: coffee.category },
    { ref: WineListRef, title: wines.category },
    { ref: CocktailsRef, title: cocktails.category },
    { ref: LiquersRef, title: liquers.category },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
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
        <main className="flex flex-col gap-8 bg-orange-100 text-center md:gap-12">
          <Introduction
            title={menu.title}
            subtitle={menu.subtitle}
            description={menu.description}
            ref={IntroRef}
          />
          <Separator />
          <MenuItem menuItem={bruschetta} ref={BruschettaRef} />
          <MenuItem menuItem={greekDips} ref={GreekDipsRef} />
          <MenuItem menuItem={appetizers} ref={AppetizersRef} />
          <MenuItem menuItem={salads} ref={SaladsRef} />
          <MenuItem menuItem={seaFood} ref={SeaFoodRef} />
          <MenuItem menuItem={grilled} ref={GrilledRef} />
          <MenuItem menuItem={pizza} ref={PizzaRef} />
          <MenuItem menuItem={pasta} ref={PastaRef} />
          <MenuItem menuItem={traditional} ref={TraditionalRef} />
          <MenuItem menuItem={iceCreamMilkShake} ref={IceCreamMilkShakeRef} />
          <MenuItem menuItem={fruits} ref={FruitsRef} />
          <MenuDessertItem menuItem={desserts} ref={DessertsRef} />
          <Separator />
          <FoodDetails foodDetails={menu.foodDetails} />
          <Separator />
          <MenuItem menuItem={softDrinks} ref={SoftDrinksRef} />
          <MenuItem menuItem={beers} ref={BeersRef} />
          <MenuItem menuItem={spirits} ref={SpiritsRef} />
          <MenuItem menuItem={coffee} ref={CoffeesRef} />
          <MenuWineItem menuItem={wines} ref={WineListRef} />
          <MenuItem menuItem={cocktails} ref={CocktailsRef} />
          <MenuItem menuItem={liquers} ref={LiquersRef} />
          <Separator />
          <Infos
            foodInfos={menu.foodInfos}
            restaurantInfos={menu.restaurantInfos}
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

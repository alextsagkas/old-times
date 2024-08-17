import { createRef, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { categories, menu } from "../../data/backup";

import Separator from "../components/Separator";
import FoodDetails from "../components/FoodDetails";
import Footnote from "../components/Footnote";
import Infos from "../components/Infos";
import InfosFootnote from "../components/InfosFootnote";
import Introduction from "../components/Introduction";
import MenuItem from "../components/MenuItem";
import NavBar from "../components/NavBar";

import type { HomeProps } from "../../typescript/types";

import type {
  MenuCategoryInterface,
  RefsItemInterface,
} from "../../typescript/interfaces";

const Home: NextPage<HomeProps> = () => {
  const refs: RefsItemInterface[] = [];

  const IntroRef = createRef<HTMLDivElement>();
  refs.push({ ref: IntroRef, title: "Menu" });

  categories.map((category) => {
    refs.push({
      ref: createRef<HTMLDivElement>(),
      title: category.category,
    });
  });

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
            if (category.position <= 1) {
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
          {categories.map((category, index) => {
            if (
              category.position > 1 &&
              category.position <= 9 &&
              index <= refs.length
            ) {
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
          {categories.map((category, index) => {
            if (
              category.position > 9 &&
              category.position <= 12 &&
              index <= refs.length
            ) {
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
          {categories.map((category, index) => {
            if (
              category.position > 12 &&
              category.position <= 26 &&
              index <= refs.length
            ) {
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
          {categories.map((category, index) => {
            if (category.position > 26 && index <= refs.length) {
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

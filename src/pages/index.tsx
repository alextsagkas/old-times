import { type NextPage } from "next";
import Head from "next/head";

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
import FoodDetails from "./FoodDetails";

import Footnote from "./Footnote";
import Introduction from "./Introduction";
import MenuDessertItem from "./MenuDessertItem";
import MenuItem from "./MenuItem";
import MenuWineItem from "./MenuWineItem";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Old Times</title>
        <meta
          name="description"
          content="Old times, Greece, Corfu town restaurant"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Merriweather:wght@300;400;700&family=Vujahday+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col gap-4 bg-orange-100 pt-4 text-center">
        <Introduction
          title={menu.title}
          subtitle={menu.subtitle}
          description={menu.description}
        />
        <MenuItem menuItem={bruschetta} />
        <MenuItem menuItem={greekDips} />
        <MenuItem menuItem={appetizers} />
        <MenuItem menuItem={salads} />
        <MenuItem menuItem={seaFood} />
        <MenuItem menuItem={grilled} />
        <MenuItem menuItem={pizza} />
        <MenuItem menuItem={pasta} />
        <MenuItem menuItem={traditional} />
        <MenuItem menuItem={iceCreamMilkShake} />
        <MenuItem menuItem={fruits} />
        <MenuDessertItem menuItem={desserts} />
        <FoodDetails foodDetails={menu.foodDetails} />
        <MenuItem menuItem={softDrinks} />
        <MenuItem menuItem={beers} />
        <MenuItem menuItem={spirits} />
        <MenuItem menuItem={coffee} />
        <MenuWineItem menuItem={wines} />
        <MenuItem menuItem={cocktails} />
        <MenuItem menuItem={liquers} />
        <Footnote
          facebookURL={menu.facebook}
          tripadvisorURL={menu.tripadvisor}
          road={menu.road}
          telephone={menu.telephone}
        />
      </main>
    </>
  );
};

export default Home;

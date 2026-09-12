import type { NextPage } from "next";
import Head from "next/head";

import { menu } from "../../data/backup";

import UnderConstruction from "../components/UnderConstruction";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Old Times — Coming Soon</title>
        <meta
          name="description"
          content="Old Times, a Pizza - Pasta restaurant in Corfu Town, Greece. Our new website is on its way — in the meantime, find our address and phone number here."
        />
      </Head>
      <UnderConstruction
        title={menu.title}
        subtitle={menu.subtitle}
        road={menu.road}
        telephone={menu.telephone}
        facebookURL={menu.facebook}
        tripadvisorURL={menu.tripadvisor}
        mapURL="https://maps.app.goo.gl/DhyZsuY8GdrtpU5y6?g_st=ic"
      />
    </>
  );
};

export default Home;

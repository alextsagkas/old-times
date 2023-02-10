import { type NextPage } from "next";
import Head from "next/head";

import { menu as menu } from "../../data/menu";
import Footnote from "./Footnote";
import Introduction from "./Introduction";

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
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Merriweather:wght@400;700&family=Vujahday+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex flex-col gap-4 bg-orange-100 pt-4 text-center">
        <Introduction
          title={menu.title}
          subtitle={menu.subtitle}
          description={menu.description}
        />
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

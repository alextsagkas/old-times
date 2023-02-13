import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
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
      <body className="m-0 bg-orange-100 p-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

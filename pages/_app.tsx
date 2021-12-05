import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import ContextProvider from "../src/lib/context";
import { Layout } from "../src/components";

import "../styles/globals.css";

if (typeof window !== "undefined") {
  require("lazysizes/plugins/attrchange/ls.attrchange.js");
  require("lazysizes/plugins/respimg/ls.respimg.js");
  require("lazysizes");
}

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin=""
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;700&display=swap"
        rel="stylesheet"
        crossOrigin=""
      />
    </Head>
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  </>
);

export default MyApp;

import React from "react";

import Head from "next/head";
import { Banner, HomeContent, Slogan } from "../src/components";

const Home = () => (
  <>
    <Head>
      <title>Car Pledge</title>
    </Head>
    <Banner>
      <Slogan />
    </Banner>
    <HomeContent />
  </>
);

export default Home;

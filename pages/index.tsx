import React from "react";

import Head from "next/head";
import {
  Banner,
  Slogan,
  HomeContentList,
  HomeContent,
} from "../src/components";
import Perks from "@/components/perks";

const Home = () => (
  <>
    <Head>
      <title>Car Pledge</title>
    </Head>
    <Banner>
      <Slogan />
    </Banner>
    <HomeContentList>
      <HomeContent
        title="Save up to 25% per month"
        content={`
        GO is a simpler and more affordable alternative to traditional ownership. No hidden fees. No gotchas.

        Everything is included except tax and insurance.
        
        Technology and efficiency = significant price savings. It’s that simple.
        `}
        img="/images/cars/car1.png"
        cost="$100/month"
        imgTitle="Mercedes-Benz S-Class"
      />
    </HomeContentList>
    <Perks img="images/content-2.jpg" />
    <HomeContentList>
      <HomeContent
        title="Order in minutes"
        content={`
        Don’t waste your entire Saturday car shopping.

        Order your next car in a few clicks with just your driver’s license.

        Simply select your car, color combination and miles.
        `}
        img="/images/cars/car2.png"
      />
    </HomeContentList>
  </>
);

export default Home;

import React from "react";
import { GiPlayButton } from "react-icons/gi";
import { BannerButton, BannerContainer, IntroSay } from "./Banner.styled";

const Banner = ({ children }) => {
  return (
    <BannerContainer>
      <img src="/images/banner.jpg" alt="banner" />
      <IntroSay>{children}</IntroSay>
      <BannerButton>
        <span>
          <GiPlayButton color="black" size={25} />
        </span>
        Select A Vehicle
      </BannerButton>
    </BannerContainer>
  );
};

export default Banner;

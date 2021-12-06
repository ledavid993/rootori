import { flex } from "@/styles/common.composition";
import { GlassPlane } from "@/styles/common.styles";
import React from "react";
import { IHomeContent } from "./homeContent.interface";

import {
  carCost,
  carDisplay,
  carTitle,
  containerContent,
  containerDescription,
  homeContentContainer,
} from "./HomeContent.styles";

const HomeContent: React.FC<IHomeContent> = ({
  title,
  content,
  img,
  imgTitle,
  cost,
}) => {
  return (
    <div css={homeContentContainer}>
      <div css={homeContentContainer}>
        <GlassPlane>
          <div>
            <h1>{title}</h1>
          </div>
          <div css={containerContent}>
            <div css={containerDescription}>{content}</div>
            <div>
              <img css={carDisplay} src={img} alt="car" />
              <h4 css={carTitle}>{imgTitle}</h4>
              <p css={carCost}>{cost}</p>
            </div>
          </div>
        </GlassPlane>
      </div>
    </div>
  );
};

export default HomeContent;

import React from "react";
import { IoMdCash } from "react-icons/io";
import { GrVmMaintenance } from "react-icons/gr";
import { BsShieldShaded } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi";

import { GlassPlane } from "@/styles/common.styles";
import {
  perksContainer,
  containerTitle,
  perksImage,
  perksGrid,
  contentContainer,
  innerPerksContainer,
} from "./Perks.styles";

const Perks = ({ img }) => {
  return (
    <div css={perksContainer}>
      <div css={innerPerksContainer}>
        <img css={perksImage} src={img} alt="content-1" />
        <div css={contentContainer}>
          <h1 css={containerTitle}>It is a flexible car subscription</h1>
          <p>
            All Rootori vechicles are latest models and arrive with price
            cheaper than the market.
          </p>
          <p>Upgrade easily to another without pay more</p>
          <h4>
            The monthly fees covers everything practical - so you can
            concentrate fully on driving
          </h4>
          <div css={perksGrid}>
            <GlassPlane>
              <IoMdCash size={25} />
            </GlassPlane>
            <GlassPlane>Factory Scheduled Maintenance</GlassPlane>
            <GlassPlane>
              <GrVmMaintenance size={25} />
            </GlassPlane>
            <GlassPlane>Excess Wear Protection</GlassPlane>
            <GlassPlane>
              <BsShieldShaded size={25} />
            </GlassPlane>
            <GlassPlane>Flexible Subscription Term</GlassPlane>
            <GlassPlane>
              <IoMdCash size={25} />
            </GlassPlane>
            <GlassPlane>1,250 Monthly Mileage</GlassPlane>
            <GlassPlane>
              <GiFlatTire size={25} />
            </GlassPlane>
            <GlassPlane>Road Hazard Tire & Wheel Protection</GlassPlane>
            <GlassPlane>
              <FaHandsHelping size={25} />
            </GlassPlane>
            <GlassPlane>24/7 Roadside Assistance</GlassPlane>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;

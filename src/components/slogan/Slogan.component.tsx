import React from "react";
import { sloganContainer, sloganTitle } from "./Slogan.styles";

const Slogan = () => {
  return (
    <div css={sloganContainer}>
      <h1 css={sloganTitle}>
        <p>Forget the hassle of maintaining your car.</p>
        <p>We do it for you.</p>
      </h1>
      <p>Order in minutes. Zero down.</p>
      <p>Free delivery. Save up to 25%</p>
    </div>
  );
};

export default Slogan;

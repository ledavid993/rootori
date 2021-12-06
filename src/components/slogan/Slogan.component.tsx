import React from "react";
import { FaCar } from "react-icons/fa";
import { SloganContainer, Title } from "./Slogan.styled";

const Slogan = () => {
  return (
    <SloganContainer>
      <Title>
        <p>Forget the hassle of maintaining your car.</p>
        <p>We do it for you.</p>
      </Title>
      <p>Order in minutes. Zero down.</p>
      <p>Free delivery. Save up to 25%</p>
    </SloganContainer>
  );
};

export default Slogan;

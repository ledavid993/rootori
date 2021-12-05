import React from "react";
import { FaCar } from "react-icons/fa";
import { SloganContainer, Title } from "./Slogan.styled";

const Slogan = () => {
  return (
    <SloganContainer>
      <FaCar size={40} color="#31ffff" />
      <Title>
        <p>Upgrade Your Car,</p>
        <p>not your payment.</p>
      </Title>
      <p>Order in minutes. Zero down.</p>
      <p>Free delivery. Save up to 25%</p>
    </SloganContainer>
  );
};

export default Slogan;

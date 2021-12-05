import React from "react";
import { Title } from "../slogan/Slogan.styled";
import {
  Content,
  HomeContentContainer,
  Img,
  ImgTitle,
  Price,
} from "./HomeContent.styled";

const HomeContent = () => {
  return (
    <HomeContentContainer>
      <Title>Title</Title>
      <Content>Content</Content>
      <Img alt="car" />
      <ImgTitle>Img title</ImgTitle>
      <Price>200</Price>
    </HomeContentContainer>
  );
};

export default HomeContent;

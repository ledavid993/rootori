import React from "react";
import { HomeContentListContainer } from "./HomeContentList.styled";

const HomeContentList = ({ children }) => {
  return <HomeContentListContainer>{children}</HomeContentListContainer>;
};

export default HomeContentList;

import React from "react";

import {
  Attribution,
  FooterContainer,
  FooterPresenter,
  Link,
  Logo,
} from "./Footer.styled";

const Footer = () => (
  <FooterContainer>
    <FooterPresenter>
      <Logo href="/">Rootori</Logo>
      <Attribution>Copyright &copy; 3000 </Attribution>
    </FooterPresenter>
  </FooterContainer>
);

export default Footer;

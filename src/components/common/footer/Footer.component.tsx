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
      <Logo href="/">conduit</Logo>
      <Attribution>
        An interactive learning project from{" "}
        <Link href="https://thinkster.io">Thinkster</Link>. Code &amp; design
        licensed under MIT.
      </Attribution>
    </FooterPresenter>
  </FooterContainer>
);

export default Footer;

import styled from "@emotion/styled";

export const FooterContainer = styled.footer``;

export const FooterPresenter = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 544px) {
    max-width: 576px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 940px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Logo = styled.a``;

export const Attribution = styled("span")`
  vertical-align: middle;
  margin-left: 10px;
  font-size: 0.8rem;
  color: #bbb;
  font-weight: 300;
`;

export const Link = styled("a")``;

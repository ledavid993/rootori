import styled from "@emotion/styled";
import CustomLink from "../customLink";

export const NavbarContainer = styled.nav`
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  position: absolute;
  z-index: 100;
`;

export const NavbarPresenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(CustomLink)`
  float: left;
  font-family: titillium web, sans-serif !important;
  font-size: 1.5rem !important;
  margin-right: 2rem !important;
  padding-top: 0 !important;
  padding-bottom: 0.25rem;
  color: #31ffff !important;
  font-weight: bold;
`;

export const NavbarList = styled("ul")`
  float: right !important;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
`;

export const NavbarItem = styled("li")`
  float: left;
  & + & {
    margin-left: 1rem;
  }
`;

import React from "react";
import useSWR from "swr";
import { GiHamburgerMenu } from "react-icons/gi";

import { usePageDispatch } from "@/lib/context/PageContext";
import checkLogin from "@/lib/utils/checkLogin";
import storage from "@/lib/utils/storage";
import Maybe from "../maybe";
import NavLink from "../navLink";
import {
  Logo,
  NavbarContainer,
  NavbarItem,
  NavbarList,
  NavbarPresenter,
} from "./Navbar.styled";
import { GlassPlane } from "@/styles/common.styles";

const Navbar = () => {
  const setPage = usePageDispatch();
  const { data: currentUser } = useSWR("user", storage);
  const isLoggedIn = checkLogin(currentUser);

  const handleClick = React.useCallback(() => setPage(0), []);

  return (
    <NavbarContainer>
      <NavbarPresenter>
        <Logo href="/" as="/" onClick={handleClick}>
          Rootori
        </Logo>
        <GlassPlane>
          <GiHamburgerMenu size={35} />
        </GlassPlane>
      </NavbarPresenter>
    </NavbarContainer>
  );
};

export default Navbar;

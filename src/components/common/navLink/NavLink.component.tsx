import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "./NavLink.props";
import { Anchor } from "./NavLink.styled";

const NavLink = ({ href, as, onClick, children }: NavLinkProps) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <Link href={href} as={as} passHref>
      <Anchor
        className={`${
          encodeURIComponent(asPath) === encodeURIComponent(as) && `active`
        }`}
        onClick={onClick}
      >
        {children}
      </Anchor>
    </Link>
  );
};

export default NavLink;

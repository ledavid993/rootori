import Link from "next/link";
import React from "react";
import { CustomLinkProps } from "./CustomLink.props";
import { Anchor } from "./CustomLink.styled";

const CustomLink = ({
  className,
  href,
  as,
  onClick,
  children,
}: CustomLinkProps) => (
  <Link href={href} as={as} passHref>
    <Anchor className={className || ""} onClick={onClick}>
      {children}
    </Anchor>
  </Link>
);

export default CustomLink;

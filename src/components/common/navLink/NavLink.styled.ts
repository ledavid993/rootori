import styled from "@emotion/styled";

export const Anchor = styled("a")`
  display: block;
  padding-top: 0.425rem;
  padding-bottom: 0.425rem;
  color: rgba(0, 0, 0, 0.3);
  text-decoration: none !important;
  &:hover {
    color: rgba(0, 0, 0, 0.8) !important;
  }
  &.is-active {
    color: rgba(0, 0, 0, 0.8);
  }
`;

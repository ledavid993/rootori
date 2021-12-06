import { css, jsx } from "@emotion/react";

export const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

import { css } from "@emotion/react";

export const sloganContainer = css`
  padding: 5px;
  text-align: center;
  color: white;
  text-shadow: 1px 1px #000000;

  p {
    margin: 3px;
    letter-spacing: 1.5px;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.3em;
    }
  }
`;

export const sloganTitle = css`
  color: white;
  margin: 3px;
  font-family: sans-serif;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

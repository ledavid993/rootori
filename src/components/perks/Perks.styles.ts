import { css } from "@emotion/react";

export const perksContainer = css`
  position: relative;
  height: 650px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  color: #fff;
  background: black;
`;

export const innerPerksContainer = css`
  position: relative;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const perksImage = css`
  width: 100%;
  height: 100%;
  filter: brightness(0.3);

  @media (min-width: 768px) {
    max-width: 40%;
  }
`;

export const contentContainer = css`
  position: absolute;
  top: 0;
  padding: 0 20px;

  p {
    color: white;
  }

  @media (min-width: 768px) {
    position: relative;
  }
`;

export const containerTitle = css``;

export const perksGrid = css`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  gap: 5px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.8);
  }
`;

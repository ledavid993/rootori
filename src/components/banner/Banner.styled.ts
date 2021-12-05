import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  position: relative;

  img {
    position: relative;
    right: 348px;
    height: 700px;
    display: block;
  }
`;

export const IntroSay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 90%;
`;

export const BannerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
  text-align: center;
  color: white;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 70px;

  span {
    display: flex;
    justify-content: center;
    margin: 0 4px;
  }
`;

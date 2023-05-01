import styled from "@emotion/styled";
import { Flex } from "./heading";

export const ResponsiveFooter = styled(Flex)`
  position: relative;
  background: linear-gradient(
    hsla(192, 37%, 48%, 0.9),
    hsla(192, 37%, 48%, 0.9)
  );
  background-image: url("https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682842276/5_1_1_ohagaq.png");
  /* background-image: url(" https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682833369/todes_ekpymm.png"); */

  background-position: center;
  background-size: cover;
  color: white;
  padding: 3.625rem 1.5rem 4.5rem 1.5rem;
  position: relative;
  height: 300px;
  width: 100vw;
`;

export const Overlay = styled(Flex)`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    51,
    148,
    255,
    0.5
  ); /* Replace with your desired transparent color */
  opacity: 3;
`;

export const TaglineSection = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 10px;
  top: 0;
  left: 0;
  width: 100%;
  @media (max-width: 1200px) {
    gap: 20px;
  }
`;

export const TagFooter = styled.h3`
  font-weight: 900;
  font-size: 4.4rem;
  text-align: center;
  color: white;
  margin-bottom: 30px;
  @media (max-width: 1200px) {
    font-size: 2.4rem;
    margin-bottom: 0px;
  }
`;

export const FooterDescription = styled.p`
  margin: 0px;
  text-align: center;
  line-height: 1;
  font-weight: 400;
  font-size: 1.2em;
  color: white;
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;

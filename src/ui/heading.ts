import styled from "@emotion/styled";
import whatsapp from "./../images/icon-whatsapp.svg";

export const Flex = styled.div`
  display: flex;
`;
export const Column = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TagContainer = styled(Column)`
  width: 100%;
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled(Flex)`
  margin: 50px 0;
  align-items: "center";
  justify-content: "center";
`;

export const HeadingsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  justify-items: center;
  gap: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Tagline = styled.h1`
  margin: 0px;
  padding: 10px;
`;

export const Description = styled.p`
  padding: 10px;
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
  color: #87879d;
  line-height: 1.6;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled(Flex)`
  gap: 20px;
  padding: 10px;
`;

export const BaseCtaAnchor = styled.a`
  color: white;
  display: inline-block;
  border-radius: 45px;
  padding: 17px 40px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const GetStartedButton = styled(BaseCtaAnchor)`
  background-color: var(--clr-light-blue);
  &:hover {
    background-color: var(--hover-light-blue);
  }
`;
export const WhatIsItButton = styled(BaseCtaAnchor)`
  background-color: var(--clr-melon);
  &:hover {
    background-color: var(--hover-melon);
  }
`;

export const PeopleMobileImage = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const ResponsiveBanner = styled(Flex)`
  background-image: url("https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682838572/image-hero_qpdtey.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  margin-bottom: 50px;
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

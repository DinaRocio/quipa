// components/StyledHeading.tsx
import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LogoContainer = styled(Flex)`
  margin: 50px 0;
  align-items: "center";
  justify-content: "center";
`;

export const Tagline = styled.h1`
  margin: 0px;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  text-align: center;
  width: 50%;
  color: #87879d;
  line-height: 1.6;
`;

export const ButtonContainer = styled(Flex)`
  gap: 20px;
`;

export const BaseCtaAnchor = styled.a`
  color: white;
  display: inline-block;
  border-radius: 45px;
  padding: 17px 40px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
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

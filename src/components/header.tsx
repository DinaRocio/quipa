import {
  ButtonContainer,
  Description,
  GetStartedButton,
  HeadingsContainer,
  LogoContainer,
  PeopleMobileImage,
  ResponsiveBanner,
  Section,
  TagContainer,
  Tagline,
  WhatIsItButton,
} from "@/ui/heading";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <Section>
      <LogoContainer>
        <Image
          src={
            "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682833148/LOGO_ONLY_szexoi.png"
          }
          alt={"Quipa Logo"}
          width={115}
          height={90}
        />
      </LogoContainer>

      <HeadingsContainer>
        <ResponsiveBanner />
        <PeopleMobileImage>
          <Image
            src={
              "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682838572/image-hero-left_sbipo4.png"
            }
            alt={"Right image of people faces"}
            width={400}
            height={310}
          />
        </PeopleMobileImage>

        <TagContainer>
          <Tagline>Unlock your Language Potential</Tagline>
          <Description>
            Quipa, a vibrant community dedicated to helping you enhance your
            language skills while having fun and making friends.
          </Description>
          <ButtonContainer>
            <GetStartedButton>Get Started</GetStartedButton>
            <WhatIsItButton>What is it?</WhatIsItButton>
          </ButtonContainer>
        </TagContainer>
        <PeopleMobileImage>
          <Image
            src={
              "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682838572/image-hero-right_baeq7l.png"
            }
            alt={"Right image of people faces"}
            width={400}
            height={310}
          />
        </PeopleMobileImage>
      </HeadingsContainer>
    </Section>
  );
};

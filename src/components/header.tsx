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
import whatsapp from "./../images/icon-whatsapp.svg";

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
            Quipa, a social learning community based in Cajamarca 🇵🇪, dedicated
            to help people enhance their language skills 🧠 while having fun and
            making friends 🤩.
          </Description>
          <ButtonContainer>
            <GetStartedButton
              href="https://wa.me/+51976041753?text=Hello I want to be part of Quipa!"
              target="_blank"
            >
              Get Started
              <Image
                src={whatsapp}
                alt={"send us a whatsapp"}
                width={16}
                height={16}
                style={{ marginLeft: "2px" }}
              />
            </GetStartedButton>
            <WhatIsItButton href="/#faq">FAQ&apos;s🙋‍♀️</WhatIsItButton>
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

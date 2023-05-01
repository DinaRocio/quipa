import {
  FooterDescription,
  Overlay,
  ResponsiveFooter,
  TagFooter,
  TaglineSection,
} from "@/ui/infoBanner";
import { Section, TagContainer, Tagline, WhatIsItButton } from "@/ui/heading";
import Image from "next/image";
import React from "react";
import SocialMedia from "./socialMedia";
import {
  ActivityImage,
  Caption,
  Description,
  ImageContainer,
  Title,
  TitleContainer,
} from "@/ui/activities";

export const ActivitiesImages = [
  {
    imageSrc:
      "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682842276/5_1_1_ohagaq.png",
    alt: "Talking",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682833369/todes_ekpymm.png",
    alt: "reunion",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682912886/78063273_131991948227682_5171315120315301888_n_upx9nt.jpg",
    alt: "instagram logo",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682912886/01_04_2023_oagwsx.png",
    alt: "instagram logo",
  },
];

export const Activities = () => {
  return (
    <Section style={{ margin: "40px 0px", padding: "10px" }}>
      <ImageContainer>
        {ActivitiesImages.map(({ imageSrc, alt }, idx) => (
          <ActivityImage
            className="imageItem"
            key={idx}
            bgImage={imageSrc}
            alt={alt}
          />
        ))}
      </ImageContainer>
      <TitleContainer>
        <Caption>We built Quipa together</Caption>
        <Title>Where Language Learning Meets Fun</Title>
        <Description>
          Weekly conversation sessions in English and other languages, grammar
          and pronunciation workshops, cultural events, language games and more!
          🚀
        </Description>
      </TitleContainer>
    </Section>
  );
};

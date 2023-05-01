import {
  FooterDescription,
  Overlay,
  ResponsiveFooter,
  TagFooter,
  TaglineSection,
} from "@/ui/infoBanner";
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
import SocialMedia from "./socialMedia";

export const Footer = () => {
  return (
    <Section>
      <h2 style={{ color: "#2657a7" }}>Quipa</h2>
      <SocialMedia />

      {/* </TaglineSection> */}
    </Section>
  );
};

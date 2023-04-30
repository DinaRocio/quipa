import {
  FooterDescription,
  Overlay,
  ResponsiveFooter,
  TagFooter,
  TaglineSection,
} from "@/ui/footer";
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
      <ResponsiveFooter>
        <Overlay />
      </ResponsiveFooter>
      <TaglineSection>
        <TagFooter>Experience more together!</TagFooter>
        <FooterDescription>
          Join Quipa Language Club today and begin your journey of exploring
          languages!
        </FooterDescription>

        <WhatIsItButton
          href="https://wa.me/+51976041753?text=Hello I want to be part of Quipa!"
          target="_blank"
        >
          Want to be part ✌️
        </WhatIsItButton>
        <SocialMedia />
      </TaglineSection>
    </Section>
  );
};

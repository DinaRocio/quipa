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

export const InfoBanner = () => {
  return (
    <Section>
      <ResponsiveFooter>
        <Overlay />
      </ResponsiveFooter>
      <TaglineSection>
        <TagFooter>Join us 🚀</TagFooter>
        <FooterDescription>
          Follow Quipa Club on social media for a daily dose of language
          learning inspiration.
        </FooterDescription>

        <WhatIsItButton
          href="https://wa.me/+51976041753?text=Hello I want to be part of Quipa!"
          target="_blank"
        >
          Want to be part ✌️
        </WhatIsItButton>
        {/* <SocialMedia /> */}
      </TaglineSection>
    </Section>
  );
};

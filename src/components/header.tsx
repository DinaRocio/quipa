import {
  ButtonContainer,
  Description,
  GetStartedButton,
  LogoContainer,
  Section,
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
      <Tagline>
        Unlock your
        <br /> Language <br /> Potential
      </Tagline>
      <Description>
        Quipa, a vibrant community dedicated to helping you enhance your <br />
        language skills while having fun and making friends.
      </Description>
      <ButtonContainer>
        <GetStartedButton>Get Started</GetStartedButton>
        <WhatIsItButton>What is it?</WhatIsItButton>
      </ButtonContainer>
    </Section>
  );
};

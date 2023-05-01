import {
  FooterDescription,
  Overlay,
  ResponsiveFooter,
  TagFooter,
  TaglineSection,
} from "@/ui/infoBanner";
import { Section } from "@/ui/heading";
import Image from "next/image";
import React from "react";
import SocialMedia from "./socialMedia";

export const Footer = () => {
  return (
    <Section id="footer">
      <h2 style={{ color: "#2657a7" }}>Quipa</h2>
      <SocialMedia />

      {/* <h5 style={{ color: "#000" }}>Made with ❤️ by Dina</h5> */}
    </Section>
  );
};

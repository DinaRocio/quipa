import { Heart, HeartHandshake } from "lucide-react";
import Image from "next/image";
import React from "react";

import { useContent } from "@/content";
import { ICON_STROKE_WIDTH } from "@/lib/icons";
import { Highlight } from "@/components/highlight";
import { Page } from "@/ui/nav";
import {
  ContactLine,
  CreditBar,
  CreditLink,
  FooterLabel,
  FooterSection,
  FooterTag,
  SocialPill,
  SocialRow,
} from "@/ui/footer";

const PORTFOLIO_URL = "https://dinarocio.com/";

const LOGO_URL = "/images/brand/logo.png";

const socialLinks = [
  { label: "Facebook", href: "https://web.facebook.com/QhipaClub" },
  { label: "Instagram", href: "https://www.instagram.com/qhipa.slc/" },
  { label: "TikTok", href: "https://www.tiktok.com/@qhipa.slc" },
];

export const Footer = () => {
  const content = useContent();

  return (
    <Page>
      <FooterSection>
        <div>
          <div style={{ marginBottom: 12 }}>
            <Image
              src={LOGO_URL}
              alt="Qhipa — club social de idiomas en Cajamarca"
              width={115}
              height={90}
              style={{ height: 44, width: "auto" }}
            />
          </div>
          <FooterTag>
            <Highlight text={content.footer.tagline} phrase={content.footer.taglineHighlight} />{" "}
            <HeartHandshake size={16} strokeWidth={ICON_STROKE_WIDTH} />
          </FooterTag>
        </div>
        <div>
          <FooterLabel>{content.footer.follow}</FooterLabel>
          <SocialRow>
            {socialLinks.map((social) => (
              <SocialPill key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
              </SocialPill>
            ))}
          </SocialRow>
        </div>
        <div>
          <FooterLabel>{content.footer.write}</FooterLabel>
          <ContactLine>+51 976 041 753</ContactLine>
          <ContactLine>Cajamarca, Perú 🇵🇪</ContactLine>
        </div>
      </FooterSection>
      <CreditBar>
        Developed with <Heart size={12} strokeWidth={ICON_STROKE_WIDTH} fill="currentColor" /> by{" "}
        <CreditLink href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">
          @dinarocio
        </CreditLink>
      </CreditBar>
    </Page>
  );
};

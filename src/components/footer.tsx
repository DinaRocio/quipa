import { HeartHandshake } from "lucide-react";
import Image from "next/image";
import React from "react";

import { useContent } from "@/content";
import { ICON_STROKE_WIDTH } from "@/lib/icons";
import { Page } from "@/ui/nav";
import { ContactLine, FooterLabel, FooterSection, FooterTag, SocialPill, SocialRow } from "@/ui/footer";

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
            {content.footer.tagline} <HeartHandshake size={16} strokeWidth={ICON_STROKE_WIDTH} />
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
    </Page>
  );
};

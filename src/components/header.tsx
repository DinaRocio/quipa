import { CircleHelp, Menu, MessageCircle, Sparkles, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useContent } from "@/content";
import { locales } from "@/content";
import { ICON_STROKE_WIDTH } from "@/lib/icons";
import { waLink } from "@/lib/whatsapp";
import { ArrowDoodle } from "@/components/doodles";
import { Highlight } from "@/components/highlight";
import {
  HeaderStatPill,
  LangPill,
  LangSwitch,
  LogoLink,
  MenuButton,
  MenuIconStack,
  MobileMenu,
  MobileMenuCta,
  MobileMenuFooter,
  MobileMenuInner,
  MobileMenuLangSwitch,
  MobileMenuNote,
  NavBar,
  NavCta,
  NavCtaIconButton,
  NavLinks,
  NavRight,
  Page,
} from "@/ui/nav";
import {
  CtaFaq,
  CtaJoin,
  CtaRow,
  GrowthNote,
  H1,
  HeroCol,
  HeroLeft,
  HeroRight,
  HeroSection,
  HeroTileWrap,
  StatBadge,
  StatBadgeNumber,
  StatBadgeNumberWrap,
  StatBadgeRow,
  StatBadgeSub,
  StatBadgeText,
  Sub,
} from "@/ui/hero";

const LOGO_URL = "/images/brand/logo.png";
const HERO_IMAGE_LEFT = "/images/hero/left.jpg";
const HERO_IMAGE_RIGHT = "/images/hero/right.jpg";
const HERO_IMAGE_MEETUP = "/images/hero/meetup.jpg";
const HERO_IMAGE_GROUP = "/images/hero/group.jpg";

export const MEMBER_COUNT = 221;

export const Header = () => {
  const content = useContent();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Page id="top">
      <NavBar scrolled={scrolled}>
        <LogoLink href="#top">
          <Image src={LOGO_URL} alt="Qhipa — club social de idiomas en Cajamarca" width={115} height={90} style={{ height: 42, width: "auto" }} priority />
        </LogoLink>
        <NavLinks>
          <a href="#como-funciona">{content.nav.how}</a>
          <a href="#galeria">{content.nav.gallery}</a>
          <a href="#faq">{content.nav.faq}</a>
          <a href="#equipo">{content.nav.team}</a>
        </NavLinks>
        <HeaderStatPill>
          <Sparkles size={15} strokeWidth={ICON_STROKE_WIDTH} color="var(--clr-coral)" />
          <span>{content.notes.headerBadge}</span>
        </HeaderStatPill>
        <NavRight>
          <LangSwitch>
            {locales.map((locale) => (
              <Link key={locale} href={router.asPath} locale={locale} passHref legacyBehavior>
                <LangPill active={router.locale === locale}>{locale.toUpperCase()}</LangPill>
              </Link>
            ))}
          </LangSwitch>
          <NavCta href={waLink(content.hero.whatsappMessageNav)} target="_blank" rel="noopener noreferrer">
            {content.nav.cta} <MessageCircle size={18} strokeWidth={ICON_STROKE_WIDTH} />
          </NavCta>
          <NavCtaIconButton
            href={waLink(content.hero.whatsappMessageNav)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={content.nav.cta}
          >
            <MessageCircle size={18} strokeWidth={ICON_STROKE_WIDTH} />
          </NavCtaIconButton>
          <MenuButton
            type="button"
            aria-label={menuOpen ? content.nav.close : content.nav.open}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIconStack open={menuOpen}>
              <Menu className="icon-menu" size={20} strokeWidth={ICON_STROKE_WIDTH} />
              <X className="icon-close" size={20} strokeWidth={ICON_STROKE_WIDTH} />
            </MenuIconStack>
          </MenuButton>
        </NavRight>
      </NavBar>

      <MobileMenu open={menuOpen}>
        <MobileMenuInner>
          <MobileMenuCta href={waLink(content.hero.whatsappMessageNav)} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            {content.nav.cta} <MessageCircle size={18} strokeWidth={ICON_STROKE_WIDTH} />
          </MobileMenuCta>
          <a href="#como-funciona" onClick={closeMenu}>
            {content.nav.how}
          </a>
          <a href="#galeria" onClick={closeMenu}>
            {content.nav.gallery}
          </a>
          <a href="#faq" onClick={closeMenu}>
            {content.nav.faq}
          </a>
          <a href="#equipo" onClick={closeMenu}>
            {content.nav.team}
          </a>
          <MobileMenuFooter>
            <MobileMenuNote>{content.notes.headerCta}</MobileMenuNote>
            <MobileMenuLangSwitch>
              {locales.map((locale) => (
                <Link key={locale} href={router.asPath} locale={locale} passHref legacyBehavior>
                  <LangPill active={router.locale === locale}>{locale.toUpperCase()}</LangPill>
                </Link>
              ))}
            </MobileMenuLangSwitch>
          </MobileMenuFooter>
        </MobileMenuInner>
      </MobileMenu>

      <HeroSection>
        <HeroLeft>
          <H1>
            {content.hero.h1a} <span>{content.hero.h1b}</span>
          </H1>
          <Sub>{content.hero.sub}</Sub>

          <CtaRow>
            <CtaJoin href={waLink(content.hero.whatsappMessageHero)} target="_blank" rel="noopener noreferrer">
              {content.hero.ctaJoin} <MessageCircle size={18} strokeWidth={ICON_STROKE_WIDTH} />
            </CtaJoin>
            <CtaFaq href="#faq">
              {content.hero.faqButton} <CircleHelp size={18} strokeWidth={ICON_STROKE_WIDTH} />
            </CtaFaq>
          </CtaRow>

          <StatBadgeRow>
            <StatBadge>
              <StatBadgeNumberWrap>
                <StatBadgeNumber>{MEMBER_COUNT}</StatBadgeNumber>
                <Sparkles size={22} strokeWidth={ICON_STROKE_WIDTH} color="var(--clr-coral)" />
              </StatBadgeNumberWrap>
              <StatBadgeText>
                <strong>
                  {MEMBER_COUNT} {content.hero.membersWord}
                </strong>
                <StatBadgeSub>
                  <Highlight text={content.hero.membersSub} phrase={content.hero.membersSubHighlight} />
                </StatBadgeSub>
              </StatBadgeText>
            </StatBadge>
            <GrowthNote>
              <ArrowDoodle width={40} height={30} />
              {content.hero.growthNote}
            </GrowthNote>
          </StatBadgeRow>
        </HeroLeft>

        <HeroRight>
          <HeroCol>
            <HeroTileWrap tall>
              <Image src={HERO_IMAGE_LEFT} alt="Miembros de Qhipa en una sesión de conversación" width={400} height={310} priority />
            </HeroTileWrap>
            <HeroTileWrap>
              <Image src={HERO_IMAGE_MEETUP} alt="Foto de un meetup de Qhipa" width={400} height={310} />
            </HeroTileWrap>
          </HeroCol>
          <HeroCol pushDown>
            <HeroTileWrap>
              <Image src={HERO_IMAGE_GROUP} alt="Foto del grupo de Qhipa" width={400} height={310} />
            </HeroTileWrap>
            <HeroTileWrap tall>
              <Image src={HERO_IMAGE_RIGHT} alt="Miembros de Qhipa en un evento cultural" width={400} height={310} />
            </HeroTileWrap>
          </HeroCol>
        </HeroRight>
      </HeroSection>
    </Page>
  );
};

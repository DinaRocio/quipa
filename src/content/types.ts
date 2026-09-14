export interface FaqItem {
  title: string;
  answer: string;
}

export interface ResourceItem {
  title: string;
  body: string;
  href: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    resources: string;
    gallery: string;
    faq: string;
    team: string;
    cta: string;
    open: string;
    close: string;
  };
  hero: {
    h1a: string;
    h1b: string;
    sub: string;
    membersWord: string;
    membersSub: string;
    membersSubHighlight: string;
    growthNote: string;
    ctaJoin: string;
    faqButton: string;
    whatsappMessageNav: string;
    whatsappMessageHero: string;
  };
  resources: {
    kicker: string;
    title: string;
    description: string;
    items: ResourceItem[];
    contribute: {
      title: string;
      body: string;
      cta: string;
      whatsappMessage: string;
    };
  };
  gallery: {
    kicker: string;
    title: string;
    description: string;
    filters: {
      all: string;
      conversation: string;
      integration: string;
    };
    photoCaption: {
      conversation: string;
      integration: string;
    };
    loadMore: string;
    ctaText: string;
    cta: string;
    whatsappMessage: string;
    dropPhoto: string;
  };
  faq: {
    title: string;
    questions: FaqItem[];
    aside: {
      title: string;
      body: string;
      cta: string;
      whatsappMessage: string;
    };
  };
  team: {
    title: string;
    description: string;
    roles: string[];
    cta: string;
    whatsappMessageTemplate: string;
  };
  footer: {
    tagline: string;
    follow: string;
    write: string;
  };
  floatingWhatsapp: {
    cta: string;
    whatsappMessage: string;
  };
  structuredData: {
    name: string;
    description: string;
  };
  notes: {
    headerBadge: string;
    headerCta: string;
    resources: string;
    gallery: string;
    team: string;
    footer: string;
  };
}

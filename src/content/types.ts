export interface FaqItem {
  title: string;
  answer: string;
}

export interface StepItem {
  title: string;
  body: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    how: string;
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
  steps: {
    kicker: string;
    title: string;
    description: string;
    items: StepItem[];
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
    steps: string;
    gallery: string;
    team: string;
    footer: string;
  };
}

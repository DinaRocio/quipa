import { MessageCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

import { useContent } from "@/content";
import { ICON_STROKE_WIDTH } from "@/lib/icons";
import { waLink } from "@/lib/whatsapp";
import { FloatingButton } from "@/ui/floatingWhatsapp";

export const FloatingWhatsapp = () => {
  const content = useContent();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!scrolled) return null;

  return (
    <FloatingButton href={waLink(content.floatingWhatsapp.whatsappMessage)} target="_blank" rel="noopener noreferrer">
      <MessageCircle size={18} strokeWidth={ICON_STROKE_WIDTH} /> {content.floatingWhatsapp.cta}
    </FloatingButton>
  );
};

import { CircleHelp, HeartHandshake, MessageCircle } from "lucide-react";
import React, { useState } from "react";

import { useContent } from "@/content";
import { ICON_STROKE_WIDTH } from "@/lib/icons";
import { waLink } from "@/lib/whatsapp";
import { Page } from "@/ui/nav";
import {
  AccordionHeader,
  AccordionItem,
  AnswerText,
  AsideBody,
  AsideCard,
  AsideCta,
  AsideEmoji,
  AsidePhone,
  AsideTitle,
  Chevron,
  FaqGrid,
  FaqSection,
  FaqTitle,
  QuestionsColumn,
  QuestionText,
} from "@/ui/faq";

interface AccordionItemProps {
  title: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqEntry = ({ title, answer, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <AccordionItem>
      <AccordionHeader onClick={onToggle}>
        <QuestionText>{title}</QuestionText>
        <Chevron open={isOpen}>⌄</Chevron>
      </AccordionHeader>
      {isOpen && <AnswerText>{answer}</AnswerText>}
    </AccordionItem>
  );
};

export const Faq = () => {
  const content = useContent();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <FaqSection id="faq">
      <Page>
        <FaqTitle>{content.faq.title}</FaqTitle>
        <FaqGrid>
          <QuestionsColumn>
            {content.faq.questions.map(({ title, answer }, idx) => (
              <FaqEntry
                key={idx}
                title={title}
                answer={answer}
                isOpen={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </QuestionsColumn>
          <AsideCard>
            <AsideEmoji>
              <CircleHelp size={30} strokeWidth={ICON_STROKE_WIDTH} />
            </AsideEmoji>
            <AsideTitle>{content.faq.aside.title}</AsideTitle>
            <AsideBody>
              {content.faq.aside.body} <HeartHandshake size={16} strokeWidth={ICON_STROKE_WIDTH} />
            </AsideBody>
            <AsideCta href={waLink(content.faq.aside.whatsappMessage)} target="_blank" rel="noopener noreferrer">
              {content.faq.aside.cta} <MessageCircle size={18} strokeWidth={ICON_STROKE_WIDTH} />
            </AsideCta>
            <AsidePhone>+51 976 041 753 · Elias Cachi, cofounder</AsidePhone>
          </AsideCard>
        </FaqGrid>
      </Page>
    </FaqSection>
  );
};

import { BookOpen, Dices, MessagesSquare, PartyPopper, Rocket } from "lucide-react";
import React from "react";

import { useContent } from "@/content";
import { ICON_STROKE_WIDTH } from "@/lib/icons";
import { Page } from "@/ui/nav";
import {
  H2,
  Kicker,
  SectionSub,
  StepBody,
  StepCard,
  StepEmoji,
  StepsGrid,
  StepsSection,
  StepTitle,
} from "@/ui/steps";

const STEP_ICONS = [MessagesSquare, BookOpen, PartyPopper, Dices];

export const Steps = () => {
  const content = useContent();

  return (
    <StepsSection id="como-funciona">
      <Page>
        <Kicker>{content.steps.kicker}</Kicker>
        <H2>{content.steps.title}</H2>
        <SectionSub>
          {content.steps.description} <Rocket size={16} strokeWidth={ICON_STROKE_WIDTH} />
        </SectionSub>
        <StepsGrid>
          {content.steps.items.map((step, idx) => {
            const StepIcon = STEP_ICONS[idx];
            return (
              <StepCard key={idx}>
                <StepEmoji>
                  <StepIcon size={28} strokeWidth={ICON_STROKE_WIDTH} color="#159c4a" />
                </StepEmoji>
                <StepTitle>{step.title}</StepTitle>
                <StepBody>{step.body}</StepBody>
              </StepCard>
            );
          })}
        </StepsGrid>
      </Page>
    </StepsSection>
  );
};

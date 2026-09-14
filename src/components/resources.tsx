import { ArrowDownRight, ArrowUpRight, GraduationCap, Headphones, MessageCircle, Speech, Toolbox } from "lucide-react";
import React from "react";

import { useContent } from "@/content";
import { ICON_STROKE_WIDTH } from "@/lib/icons";
import { waLink } from "@/lib/whatsapp";
import { Highlight } from "@/components/highlight";
import { Note, SectionNote } from "@/ui/annotations";
import { Page } from "@/ui/nav";
import { H2, Kicker, SectionSub } from "@/ui/steps";
import {
  ContributeBar,
  ContributeBody,
  ContributeButton,
  ContributeText,
  ContributeTitle,
  ResourceArrow,
  ResourceBody,
  ResourceCard,
  ResourceIcon,
  ResourcesGrid,
  ResourcesSection,
  ResourceTitle,
} from "@/ui/resources";

const RESOURCE_ICONS = [Speech, GraduationCap, Headphones, Toolbox];
const RESOURCE_ACCENTS = ["#0a6ee0", "#f2685c", "#25d366", "#1b2a4e"];
const RESOURCE_ROTATIONS = [-3, 2, -2, 3];
const RESOURCE_OFFSETS = [0, 14, 0, 14];

export const Resources = () => {
  const content = useContent();

  return (
    <ResourcesSection id="recursos">
      <Page>
        <Kicker>{content.resources.kicker}</Kicker>
        <H2>{content.resources.title}</H2>
        <SectionSub>
          <Highlight text={content.resources.description} phrase={content.resources.descriptionHighlight} />
        </SectionSub>
        <SectionNote>
          <ArrowDownRight size={22} strokeWidth={ICON_STROKE_WIDTH} color="var(--clr-coral)" />
          <Note rotate={-2} color="var(--clr-coral)">
            {content.notes.resources}
          </Note>
        </SectionNote>
        <ResourcesGrid>
          {content.resources.items.map((item, idx) => {
            const Icon = RESOURCE_ICONS[idx];
            const accent = RESOURCE_ACCENTS[idx];
            return (
              <ResourceCard
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                accent={accent}
                rotate={RESOURCE_ROTATIONS[idx]}
                offsetY={RESOURCE_OFFSETS[idx]}
                z={idx}
                delay={idx * 0.08}
              >
                <ResourceArrow accent={accent} className="resource-arrow">
                  <ArrowUpRight size={14} strokeWidth={ICON_STROKE_WIDTH} />
                </ResourceArrow>
                <ResourceIcon accent={accent}>
                  <Icon size={24} strokeWidth={ICON_STROKE_WIDTH} />
                </ResourceIcon>
                <ResourceTitle>{item.title}</ResourceTitle>
                <ResourceBody>{item.body}</ResourceBody>
              </ResourceCard>
            );
          })}
        </ResourcesGrid>
        <ContributeBar>
          <ContributeText>
            <ContributeTitle>{content.resources.contribute.title}</ContributeTitle>
            <ContributeBody>{content.resources.contribute.body}</ContributeBody>
          </ContributeText>
          <ContributeButton
            href={waLink(content.resources.contribute.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.resources.contribute.cta} <MessageCircle size={18} strokeWidth={ICON_STROKE_WIDTH} />
          </ContributeButton>
        </ContributeBar>
      </Page>
    </ResourcesSection>
  );
};

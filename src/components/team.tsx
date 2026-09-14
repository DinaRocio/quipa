import { MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

import { useContent } from "@/content";
import { ICON_STROKE_WIDTH } from "@/lib/icons";
import { waLink } from "@/lib/whatsapp";
import { Highlight } from "@/components/highlight";
import { Page } from "@/ui/nav";
import {
  Avatar,
  MemberCard,
  MemberCta,
  MemberHandle,
  MemberName,
  MemberRole,
  TeamGrid,
  TeamSection,
  TeamSub,
  TeamTitle,
} from "@/ui/team";

interface MemberData {
  avatar: string;
  name: string;
  handle: string;
  ring: string;
}

export const members: MemberData[] = [
  {
    avatar:
      "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682925709/Elias-removebg-preview_zw3j56.png",
    name: "Elias Cachi",
    handle: "@eliasthecoach",
    ring: "#0a6ee0",
  },
  {
    avatar:
      "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682925709/cristian_quipa-removebg-preview_wjhdtn.png",
    name: "Cristhian Carrasco",
    handle: "@cristhianbill12",
    ring: "#f2685c",
  },
  {
    avatar:
      "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682925709/1639154262396-removebg-preview_mkrpyj.png",
    name: "Dina Villanueva",
    handle: "@dinarocio",
    ring: "#25D366",
  },
];

export const MeetTheTeam = () => {
  const content = useContent();

  return (
    <TeamSection id="equipo">
      <Page>
        <TeamTitle>{content.team.title}</TeamTitle>
        <TeamSub>
          <Highlight text={content.team.description} phrase={content.team.descriptionHighlight} />
        </TeamSub>
        <TeamGrid>
          {members.map((member, idx) => {
            const role = content.team.roles[idx];
            const whatsappMessage = content.team.whatsappMessageTemplate.replace(
              "{name}",
              member.name.split(" ")[0]
            );
            return (
              <MemberCard key={member.handle}>
                <Avatar ring={member.ring}>
                  <Image
                    src={member.avatar}
                    alt={`Foto de ${member.name}`}
                    width={132}
                    height={132}
                  />
                </Avatar>
                <div>
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>{role}</MemberRole>
                  <MemberHandle>{member.handle}</MemberHandle>
                </div>
                <MemberCta href={waLink(whatsappMessage)} target="_blank" rel="noopener noreferrer">
                  {content.team.cta} <MessageCircle size={18} strokeWidth={ICON_STROKE_WIDTH} />
                </MemberCta>
              </MemberCard>
            );
          })}
        </TeamGrid>
      </Page>
    </TeamSection>
  );
};

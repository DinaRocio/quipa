import Image from "next/image";
import React, { useState } from "react";
import SocialMedia from "./socialMedia";

import arrow from "./../images/arrow-bottom.svg";
import faqIcon from "./../images/faq.svg";
import { faqQuestions } from "@/data/faqQuestions";
import { Flex, Section } from "@/ui/heading";
import {
  Caption,
  Container,
  Description,
  MemberImage,
  MemberItem,
  Name,
  Role,
  Title,
} from "@/ui/team";

interface MemberProps {
  avatar: string;
  name: string;
  role: string;
  username: string;
  alt: string;
  bgColor: string;
}

export const members = [
  {
    avatar:
      "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682925709/Elias-removebg-preview_zw3j56.png",
    name: "Elias Cachi",
    role: "Co-founder & Coach",
    username: "@eliasthecoach",
    alt: "member",
    bgColor: "#047ce4",
  },
  {
    avatar:
      "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682925709/cristian_quipa-removebg-preview_wjhdtn.png",
    name: "Cristhian Carrasco",
    role: "Co-founder",
    username: "@cristhianbill12",
    alt: "member ",
    bgColor: "#f46454",
  },
  {
    avatar:
      "https://res.cloudinary.com/circlesulfisoxazole/image/upload/v1682925709/1639154262396-removebg-preview_mkrpyj.png",
    name: "Dina Villanueva",
    role: "Network",
    username: "@dinarocio",
    alt: "member ",
    bgColor: "#04db09",
  },
];

const Member = ({
  avatar,
  name,
  role,
  username,
  bgColor,
  alt,
}: MemberProps) => {
  return (
    <MemberItem>
      <MemberImage bgImage={avatar} alt={alt} bgColor={bgColor} />
      <Name>{name}</Name>
      <Role>{role}</Role>
      <Caption>{username}</Caption>
    </MemberItem>
  );
};

export const MeetTheTeam = () => {
  return (
    <Section style={{ padding: 20 }} id="team">
      <Title>Meet the Team</Title>
      <Description>
        Our team consists of passionate professionals and dedicated volunteers
        who work together to provide you with an exceptional language learning
        experience.
      </Description>
      <Container>
        {members.map((member, idx) => (
          <Member key={idx} {...member} />
        ))}
      </Container>
    </Section>
  );
};

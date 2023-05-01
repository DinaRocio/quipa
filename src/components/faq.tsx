import Image from "next/image";
import React, { useState } from "react";
import SocialMedia from "./socialMedia";
import {
  AccordeonContainerItem,
  Answer,
  ArrowButton,
  AccordeonSection,
  HeaderContent,
  Question,
  FaqSection,
  Title,
  AnswerContainer,
  Container,
} from "@/ui/faq";
import arrow from "./../images/arrow-bottom.svg";
import faqIcon from "./../images/faq.svg";
import { faqQuestions } from "@/data/faqQuestions";

interface AccordeonItemProps {
  title: string;
  answer: string;
}

const AccordeonItem = ({ title, answer }: AccordeonItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordeonContainerItem>
      <HeaderContent onClick={() => setIsOpen(!isOpen)}>
        <Question>{title}</Question>
        <ArrowButton onClick={() => setIsOpen(!isOpen)}>
          <Image src={arrow} alt="arrow" />
        </ArrowButton>
      </HeaderContent>
      <AnswerContainer open={isOpen}>
        <Answer>{answer}</Answer>
      </AnswerContainer>
    </AccordeonContainerItem>
  );
};

export const Faq = () => {
  return (
    <FaqSection id="faq">
      <Image src={faqIcon} alt="girl asking questions" width={300} />
      <Container>
        <Title>FAQ</Title>
        <AccordeonSection>
          {faqQuestions.map(({ title, answer }, idx) => (
            <AccordeonItem key={idx} title={title} answer={answer} />
          ))}
        </AccordeonSection>
      </Container>
    </FaqSection>
  );
};

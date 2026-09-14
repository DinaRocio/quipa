import styled from "@emotion/styled";

export const FaqSection = styled.section`
  padding: clamp(40px, 6vw, 70px) 0;
  border-top: 1px solid var(--clr-border-soft);
`;

export const FaqTitle = styled.h2`
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.12;
  letter-spacing: -1.1px;
  font-weight: 700;
  margin: 0 0 30px;
`;

export const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
`;

export const QuestionsColumn = styled.div`
  display: grid;
  gap: 10px;
`;

export const AccordionItem = styled.div`
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: 16px;
  overflow: hidden;
`;

export const AccordionHeader = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  text-align: left;
  background: none;
  border: 0;
  padding: 18px 20px;
  cursor: pointer;
  font-size: 15.5px;
  font-weight: 600;
  color: var(--clr-navy);
  line-height: 1.4;
`;

export const QuestionText = styled.span`
  flex: 1;
`;

export const Chevron = styled.span<{ open: boolean }>`
  flex: none;
  font-size: 20px;
  line-height: 1;
  color: var(--clr-blue);
  transition: transform 0.18s ease;
  transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
`;

export const AnswerText = styled.p`
  margin: 0;
  padding: 0 20px 20px;
  font-size: 14.5px;
  line-height: 1.68;
  color: var(--clr-muted);
  text-wrap: pretty;
`;

export const AsideCard = styled.div`
  background: var(--clr-navy);
  border-radius: 22px;
  padding: 30px 28px;
  color: #fff;
`;

export const AsideEmoji = styled.div`
  font-size: 30px;
  line-height: 1;
  margin-bottom: 16px;
`;

export const AsideTitle = styled.h3`
  font-size: 21px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin: 0 0 10px;
  line-height: 1.25;
`;

export const AsideBody = styled.p`
  font-size: 14.5px;
  line-height: 1.65;
  color: #c3cade;
  margin: 0 0 22px;
`;

export const AsideCta = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  background: var(--clr-green);
  color: #fff;
  font-size: 15.5px;
  font-weight: 600;
  padding: 14px 22px;
  border-radius: 999px;
  &:hover {
    background: var(--clr-green-hover);
    color: #fff;
  }
`;

export const AsidePhone = styled.p`
  margin: 18px 0 0;
  font-size: 13px;
  line-height: 1.7;
  color: #8e99b6;
`;

import styled from "@emotion/styled";
import { Flex, Section } from "./heading";

interface AnswerContainerProps {
  open: boolean;
}

export const FaqSection = styled(Section)`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

export const AccordeonSection = styled.ul`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0px 25px;
`;

export const AccordeonContainerItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 525px;
  height: auto;
  border-bottom: 1px solid var(--light-grayish-blue);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: var(--clr-gray-dark);
  letter-spacing: 2px;
  margin: 20px 0px 0px 0px;
`;

export const Question = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: var(--clr-gray-dark);
  margin: 0px;
  line-height: 1.4em;
`;

export const AnswerContainer = styled(Flex)<AnswerContainerProps>`
  // Use props to conditionally apply styles based on the active state
  display: ${(props) => (props.open ? "flex" : "none")};
  transition: display 0.5s ease-in-out;
`;
export const Answer = styled.h4`
  font-size: 14px;
  font-weight: 500;
  margin: 0px;
  line-height: 1.6em;
`;

export const HeaderContent = styled(Flex)`
  justify-content: space-between;
  width: 100%;
  padding: 13px 0px;
`;

export const BaseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: left;
`;

export const ArrowButton = styled(BaseButton)``;

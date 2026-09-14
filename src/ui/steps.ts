import styled from "@emotion/styled";

export const StepsSection = styled.section`
  padding: clamp(40px, 6vw, 70px) 0;
  border-top: 1px solid var(--clr-border-soft);
`;

export const Kicker = styled.p`
  margin: 0 0 12px;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 3.4px;
  text-transform: uppercase;
  color: var(--clr-coral);
`;

export const H2 = styled.h2`
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.12;
  letter-spacing: -1.1px;
  font-weight: 700;
  margin: 0 0 14px;
  max-width: 24ch;
  text-wrap: pretty;
`;

export const SectionSub = styled.p`
  font-size: 16.5px;
  line-height: 1.62;
  color: var(--clr-muted);
  margin: 0 0 34px;
  max-width: 62ch;
  text-wrap: pretty;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
  gap: 16px;
`;

export const StepCard = styled.div`
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: 20px;
  padding: 24px 22px 26px;
  &:hover {
    border-color: var(--clr-blue);
  }
`;

export const StepEmoji = styled.div`
  font-size: 26px;
  line-height: 1;
  margin-bottom: 14px;
`;

export const StepTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.3px;
  margin: 0 0 8px;
`;

export const StepBody = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--clr-muted);
  margin: 0;
`;

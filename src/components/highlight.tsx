import styled from "@emotion/styled";

const Mark = styled.span`
  color: var(--clr-coral);
  font-weight: 700;
`;

interface HighlightProps {
  text: string;
  phrase: string;
}

export const Highlight = ({ text, phrase }: HighlightProps) => {
  const idx = phrase ? text.indexOf(phrase) : -1;
  if (idx === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, idx)}
      <Mark>{phrase}</Mark>
      {text.slice(idx + phrase.length)}
    </>
  );
};

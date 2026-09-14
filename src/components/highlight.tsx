import styled from "@emotion/styled";

const Mark = styled.span`
  color: var(--clr-navy);
  font-weight: 700;
  background: var(--clr-highlight-soft);
  padding: 0.05em 0.3em;
  border-radius: 2px 6px 2px 6px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
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

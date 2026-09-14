import styled from "@emotion/styled";

export const Note = styled.span<{ rotate?: number; color?: string; size?: string }>`
  font-family: var(--font-hand);
  font-weight: 600;
  font-size: ${({ size }) => size ?? "21px"};
  line-height: 1.15;
  color: ${({ color }) => color ?? "var(--clr-coral)"};
  display: inline-block;
  transform: rotate(${({ rotate }) => rotate ?? -4}deg);
  text-wrap: balance;
`;

export const NoteRow = styled.div<{ justify?: string }>`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify ?? "flex-end"};

  svg {
    flex: none;
  }
`;

export const SectionNote = styled(NoteRow)`
  margin-bottom: 10px;
`;

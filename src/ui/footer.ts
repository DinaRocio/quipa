import styled from "@emotion/styled";

export const FooterSection = styled.footer`
  padding: clamp(34px, 5vw, 54px) 0 44px;
  border-top: 2px solid var(--clr-navy);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 28px;
  align-items: start;
`;

export const FooterTag = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: var(--clr-muted);
  max-width: 30ch;
`;

export const FooterLabel = styled.h3`
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  color: var(--clr-faint);
  margin: 0 0 14px;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const SocialPill = styled.a`
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--clr-surface);
  border: 1px solid #e3e4e9;
  border-radius: 999px;
  padding: 9px 15px;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--clr-navy);
  &:hover {
    border-color: var(--clr-blue);
    color: var(--clr-navy);
  }
`;

export const ContactLine = styled.p`
  margin: 0 0 6px;
  font-size: 14px;
  color: var(--clr-muted);
  &:last-child {
    margin-bottom: 0;
  }
`;

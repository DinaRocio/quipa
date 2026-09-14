import styled from "@emotion/styled";

export const TeamSection = styled.section`
  padding: clamp(40px, 6vw, 70px) 0;
  border-top: 1px solid var(--clr-border-soft);
`;

export const TeamTitle = styled.h2`
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.12;
  letter-spacing: -1.1px;
  font-weight: 700;
  margin: 0 0 14px;
  color: var(--clr-coral);
`;

export const TeamSub = styled.p`
  font-size: 16.5px;
  line-height: 1.62;
  color: var(--clr-muted);
  margin: 0 0 34px;
  max-width: 64ch;
  text-wrap: pretty;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 16px;
`;

export const MemberCard = styled.div`
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: 20px;
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Avatar = styled.div<{ ring: string }>`
  width: 132px;
  height: 132px;
  border-radius: 50%;
  overflow: hidden;
  background: ${({ ring }) => ring};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const MemberName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.3px;
  margin: 0 0 4px;
`;

export const MemberRole = styled.p`
  margin: 0 0 2px;
  font-size: 14px;
  color: var(--clr-muted);
`;

export const MemberHandle = styled.p`
  margin: 0;
  font-size: 13.5px;
  color: var(--clr-faint);
`;

export const MemberCta = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: auto;
  border: 1.5px solid var(--clr-green);
  color: #159c4a;
  font-size: 14.5px;
  font-weight: 600;
  padding: 11px 18px;
  border-radius: 999px;
  &:hover {
    background: var(--clr-green);
    color: #fff;
  }
`;

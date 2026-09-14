import styled from "@emotion/styled";

export const HeroSection = styled.section`
  padding: clamp(34px, 6vw, 64px) 0 clamp(30px, 5vw, 54px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
  border-top: 1px solid var(--clr-border-soft);

  @media (max-width: 767px) {
    gap: 0;
    padding: 22px 0 40px;
  }
`;

export const HeroLeft = styled.div`
  animation: qup 0.5s ease both;
`;

export const H1 = styled.h1`
  font-size: clamp(38px, 6.4vw, 60px);
  line-height: 1.04;
  letter-spacing: -1.8px;
  font-weight: 700;
  margin: 0 0 18px;
  text-wrap: pretty;

  span {
    color: var(--clr-blue);
  }

  @media (max-width: 767px) {
    font-size: clamp(34px, 10vw, 44px);
    letter-spacing: -1.4px;
  }
`;

export const Sub = styled.p`
  font-size: clamp(16px, 1.6vw, 18.5px);
  line-height: 1.62;
  color: var(--clr-muted);
  margin: 0 0 22px;
  max-width: 46ch;
  text-wrap: pretty;

  @media (max-width: 767px) {
    font-size: 15.5px;
    max-width: 38ch;
    margin: 0 0 20px;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: clamp(26px, 5vw, 34px);
`;

export const CtaBase = styled.a`
  display: flex;
  align-items: center;
  gap: 9px;
  flex: none;
  white-space: nowrap;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 15px 26px;
  border-radius: 999px;

  @media (max-width: 767px) {
    font-size: 15px;
    padding: 14px 22px;
  }
`;

export const CtaJoin = styled(CtaBase)`
  background: var(--clr-blue);
  &:hover {
    background: var(--clr-blue-hover);
    color: #fff;
  }
`;

export const CtaFaq = styled(CtaBase)`
  gap: 8px;
  background: var(--clr-coral);
  &:hover {
    background: var(--clr-coral-hover);
    color: #fff;
  }
`;

/* --- 221 stat badge: the number needs to read as a graphic mark, not a data point --- */

export const StatBadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px 22px;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: relative;
    z-index: 6;
    margin-bottom: -34px;
    padding-bottom: 6px;
  }
`;

export const StatBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex: none;
  max-width: 100%;
  background: var(--clr-surface);
  border: 1.5px solid var(--clr-navy);
  border-radius: 22px;
  padding: 12px 22px 12px 18px;
  box-shadow: 0 14px 30px rgba(20, 24, 40, 0.1);
  transform: rotate(-2.5deg);

  @media (max-width: 767px) {
    gap: 10px;
    padding: 8px 16px 8px 12px;
    border-radius: 16px;
    transform: rotate(-2.5deg);
  }
`;

export const StatBadgeNumberWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  flex: none;
`;

export const StatBadgeNumber = styled.span`
  font-size: clamp(52px, 8vw, 78px);
  font-weight: 800;
  letter-spacing: -3px;
  line-height: 0.82;
  color: var(--clr-blue);

  @media (max-width: 767px) {
    font-size: 46px;
    letter-spacing: -1.8px;
  }
`;

export const StatBadgeText = styled.p`
  margin: 0;
  font-size: 13.5px;
  line-height: 1.42;
  color: var(--clr-navy);
  font-weight: 600;
  max-width: 20ch;

  strong {
    font-weight: 700;
  }

  @media (max-width: 767px) {
    font-size: 12.5px;
    max-width: 15ch;
  }
`;

export const StatBadgeSub = styled.span`
  display: block;
  margin-top: 2px;
  color: #000;
  font-weight: 600;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const GrowthNote = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: none;
  transform: rotate(-2deg);
  color: var(--clr-coral);
  font-family: var(--font-hand);
  font-weight: 600;
  font-size: 21px;
  line-height: 1;

  svg {
    flex: none;
    transform: rotate(-4deg);
  }

  @media (max-width: 767px) {
    padding-left: 4px;

    svg {
      display: none;
    }
  }
`;

export const HeroRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  animation: qup 0.7s ease both;

  /* Mobile hero is a deliberate two-photo collage, not a shrunk grid:
     the first column's tall tile becomes the main frame, the second
     column's tall tile becomes a small overlapping print, the other
     two tiles are dropped entirely to keep it calm. Plain tag selectors
     are used here (not emotion component selectors) since the project
     doesn't run the emotion babel/SWC transform. */
  @media (max-width: 767px) {
    position: relative;
    display: block;
    height: clamp(300px, 86vw, 400px);

    & > div {
      display: contents;
    }

    & > div:first-of-type > div:first-of-type {
      display: block;
      position: absolute;
      inset: 0 64px 0 0;
      height: auto;
      border-radius: 26px;
      transform: rotate(-1.5deg);
    }

    & > div:first-of-type > div:not(:first-of-type) {
      display: none;
    }

    & > div:last-of-type > div:last-of-type {
      display: block;
      position: absolute;
      right: 0;
      bottom: -18px;
      width: 46%;
      height: 54%;
      border-radius: 20px;
      border: 4px solid var(--clr-bg);
      box-shadow: 0 16px 30px rgba(20, 24, 40, 0.18);
      transform: rotate(4deg);
      z-index: 2;
    }

    & > div:last-of-type > div:not(:last-of-type) {
      display: none;
    }
  }
`;

export const HeroCol = styled.div<{ pushDown?: boolean }>`
  display: grid;
  gap: 12px;
  padding-top: ${({ pushDown }) => (pushDown ? "26px" : "0")};
`;

export const HeroTileWrap = styled.div<{ tall?: boolean }>`
  height: ${({ tall }) => (tall ? "clamp(150px,20vw,210px)" : "clamp(110px,15vw,150px)")};
  border-radius: 22px;
  overflow: hidden;
  background: var(--clr-placeholder);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const TilePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px;
  font-size: 12px;
  line-height: 1.4;
  color: var(--clr-faint);
`;

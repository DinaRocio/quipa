import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const cardEnter = (rotate: number, offsetY: number) => keyframes`
  from {
    opacity: 0;
    transform: rotate(0deg) translateY(${offsetY + 10}px);
  }
  to {
    opacity: 1;
    transform: rotate(${rotate}deg) translateY(${offsetY}px);
  }
`;

export const ResourcesSection = styled.section`
  padding: clamp(40px, 6vw, 70px) 0;
  border-top: 1px solid var(--clr-border-soft);
`;

export const ResourcesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 18px 30px 34px;
  margin-bottom: clamp(24px, 4vw, 40px);

  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 4px 0 16px;
    margin-bottom: 16px;
  }
`;

export const ResourceCard = styled.a<{
  accent: string;
  rotate: number;
  offsetY: number;
  z: number;
  delay: number;
}>`
  position: relative;
  display: block;
  width: 235px;
  flex: none;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-top: 4px solid ${({ accent }) => accent};
  border-radius: 20px;
  padding: 24px 22px 26px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  margin-left: -34px;
  z-index: ${({ z }) => z};
  box-shadow: 0 6px 18px rgba(15, 20, 35, 0.08);
  animation: ${({ rotate, offsetY }) => cardEnter(rotate, offsetY)} 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({ delay }) => delay}s;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s ease, border-color 0.3s ease;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    transform: rotate(0deg) translateY(-7px) scale(1.03) !important;
    box-shadow: 0 16px 28px rgba(15, 20, 35, 0.14);
    z-index: 20;
  }

  &:hover .resource-arrow {
    opacity: 1;
    transform: translate(0, 0);
  }

  @media (max-width: 720px) {
    width: auto;
    aspect-ratio: 1;
    margin-left: 0;
    padding: 8px;
    border-top-width: 3px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    animation: qfade 0.5s ease both;
    animation-delay: ${({ delay }) => delay}s;
    transform: none;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export const ResourceArrow = styled.span<{ accent: string }>`
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  color: ${({ accent }) => accent};
  background: ${({ accent }) => `${accent}1a`};
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: opacity 0.35s ease, transform 0.35s ease;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const ResourceIcon = styled.div<{ accent: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  margin-bottom: 14px;
  color: ${({ accent }) => accent};
  background: ${({ accent }) => `${accent}1a`};

  @media (max-width: 720px) {
    width: 26px;
    height: 26px;
    border-radius: 8px;
    margin-bottom: 6px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const ResourceTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.3px;
  margin: 0 0 8px;

  @media (max-width: 720px) {
    font-size: 10.5px;
    line-height: 1.25;
    margin: 0;
  }
`;

export const ResourceBody = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--clr-muted);
  margin: 0;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const ContributeBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: 20px;
  padding: 22px 24px;
`;

export const ContributeText = styled.div`
  flex: 1 1 260px;
`;

export const ContributeTitle = styled.p`
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 600;
  color: var(--clr-navy);
`;

export const ContributeBody = styled.p`
  margin: 0;
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--clr-muted);
`;

export const ContributeButton = styled.a`
  display: flex;
  align-items: center;
  gap: 9px;
  background: var(--clr-green);
  color: #fff;
  font-size: 15.5px;
  font-weight: 600;
  padding: 14px 24px;
  border-radius: 999px;
  flex: none;
  &:hover {
    background: var(--clr-green-hover);
    color: #fff;
  }
`;

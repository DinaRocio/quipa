import styled from "@emotion/styled";

export const GallerySection = styled.section`
  padding: clamp(40px, 6vw, 70px) 0;
  border-top: 1px solid var(--clr-border-soft);
`;

export const GalleryHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 26px;
`;

export const GalleryHeading = styled.div`
  h2 {
    margin-bottom: 12px;
  }
  p {
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    max-width: 52ch;
  }
`;

export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FilterChip = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 7px;
  border-radius: 999px;
  padding: 9px 16px;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  border: 1.5px solid ${({ active }) => (active ? "var(--clr-navy)" : "#e3e4e9")};
  background: ${({ active }) => (active ? "var(--clr-navy)" : "var(--clr-surface)")};
  color: ${({ active }) => (active ? "#fff" : "var(--clr-muted)")};

  span {
    opacity: 0.55;
    font-weight: 500;
  }
`;

export const Masonry = styled.div`
  columns: 3 260px;
  column-gap: 14px;
`;

export const PhotoFigure = styled.figure`
  break-inside: avoid;
  margin: 0 0 14px;
`;

export const PhotoButton = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: var(--clr-placeholder);
  border-radius: 18px;
  overflow: hidden;
  cursor: zoom-in;
  position: relative;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const PhotoFrame = styled.div`
  position: relative;
`;

export const GalleryEmpty = styled.div`
  width: 100%;
  padding: 48px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px dashed var(--clr-border);
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.4;
  color: var(--clr-faint);
`;

export const PhotoCaption = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 4px 0;
  font-size: 12.5px;
  line-height: 1.45;
  color: var(--clr-muted);
`;

export const PhotoTag = styled.span`
  flex: none;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--clr-blue);
`;

export const LoadMoreRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22px;
`;

export const LoadMoreButton = styled.button`
  background: none;
  border: 1px solid var(--clr-border);
  color: var(--clr-muted);
  font-size: 13.5px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 999px;
  cursor: pointer;

  &:hover {
    border-color: var(--clr-navy);
    color: var(--clr-navy);
  }
`;

export const GalleryCtaBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 30px;
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: 20px;
  padding: 22px 24px;
`;

export const GalleryCtaText = styled.p`
  margin: 0;
  flex: 1 1 260px;
  font-size: 16px;
  line-height: 1.55;
  color: var(--clr-navy);
  font-weight: 500;
`;

export const GalleryCtaButton = styled.a`
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

export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(15, 20, 35, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: qfade 0.2s ease both;
  cursor: zoom-out;
`;

export const LightboxInner = styled.div`
  max-width: 960px;
  width: 100%;
  cursor: default;
`;

export const LightboxImage = styled.img`
  display: block;
  max-height: 72vh;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 16px;
`;

export const LightboxFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 14px;
  padding: 16px 4px 0;
`;

export const LightboxTag = styled.span`
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #7fe6a6;
`;

export const LightboxAlt = styled.p`
  margin: 0;
  flex: 1 1 260px;
  font-size: 15px;
  line-height: 1.55;
  color: #fff;
`;

export const LightboxClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
  font-size: 13.5px;
  font-weight: 500;
  padding: 9px 16px;
  border-radius: 999px;
  cursor: pointer;
`;

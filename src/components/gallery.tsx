import { Calendar, MessageCircle, X } from "lucide-react";
import React, { useEffect, useState } from "react";

import { useContent } from "@/content";
import { ICON_STROKE_WIDTH } from "@/lib/icons";
import { waLink } from "@/lib/whatsapp";
import { Highlight } from "@/components/highlight";
import { H2, Kicker } from "@/ui/steps";
import { Page } from "@/ui/nav";
import {
  FilterChip,
  FilterRow,
  GalleryCtaBar,
  GalleryCtaButton,
  GalleryCtaText,
  GalleryEmpty,
  GalleryHeader,
  GalleryHeading,
  GallerySection,
  LightboxAlt,
  LightboxClose,
  LightboxFooter,
  LightboxImage,
  LightboxInner,
  LightboxOverlay,
  LightboxTag,
  LoadMoreButton,
  LoadMoreRow,
  Masonry,
  PhotoButton,
  PhotoCaption,
  PhotoFigure,
  PhotoFrame,
  PhotoTag,
} from "@/ui/gallery";

const DESKTOP_PAGE_SIZE = 9;
const MOBILE_PAGE_SIZE = 4;
const MOBILE_QUERY = "(max-width: 700px)";

export type GalleryCategory = "conversation" | "integration";
type Category = "all" | GalleryCategory;

export interface GalleryPhoto {
  category: GalleryCategory;
  src: string;
}

interface GalleryProps {
  photos: GalleryPhoto[];
}

export const Gallery = ({ photos }: GalleryProps) => {
  const content = useContent();
  const [filter, setFilter] = useState<Category>("integration");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [pageSize, setPageSize] = useState(DESKTOP_PAGE_SIZE);
  const [visibleCount, setVisibleCount] = useState(DESKTOP_PAGE_SIZE);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const applyPageSize = () => {
      const size = mql.matches ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE;
      setPageSize(size);
      setVisibleCount(size);
    };
    applyPageSize();
    mql.addEventListener("change", applyPageSize);
    return () => mql.removeEventListener("change", applyPageSize);
  }, []);

  const categories: Category[] = ["all", "conversation", "integration"];

  const filtered = photos.map((photo, idx) => ({ ...photo, idx })).filter(
    (photo) => filter === "all" || photo.category === filter
  );
  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const selectFilter = (cat: Category) => {
    setFilter(cat);
    setVisibleCount(pageSize);
  };

  const openPhoto = openIdx !== null ? photos[openIdx] : null;
  const openCaption = openPhoto ? content.gallery.photoCaption[openPhoto.category] : "";

  return (
    <GallerySection id="galeria">
      <Page>
        <GalleryHeader>
          <GalleryHeading>
            <Kicker>{content.gallery.kicker}</Kicker>
            <H2>{content.gallery.title}</H2>
            <p>
              <Highlight text={content.gallery.description} phrase={content.gallery.descriptionHighlight} />
            </p>
          </GalleryHeading>
          <FilterRow>
            {categories.map((cat) => {
              const count = cat === "all" ? photos.length : photos.filter((p) => p.category === cat).length;
              return (
                <FilterChip key={cat} active={filter === cat} onClick={() => selectFilter(cat)}>
                  {content.gallery.filters[cat]} <span>{count}</span>
                </FilterChip>
              );
            })}
          </FilterRow>
        </GalleryHeader>

        {filtered.length === 0 ? (
          <GalleryEmpty>{content.gallery.dropPhoto}</GalleryEmpty>
        ) : (
          <>
            <Masonry>
              {visible.map(({ category, src, idx }) => {
                const caption = content.gallery.photoCaption[category];
                return (
                  <PhotoFigure key={idx}>
                    <PhotoButton aria-label={caption} onClick={() => setOpenIdx(idx)}>
                      <PhotoFrame>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt={caption} />
                      </PhotoFrame>
                    </PhotoButton>
                    <PhotoCaption>
                      <PhotoTag>{content.gallery.filters[category]}</PhotoTag>
                      <span>{caption}</span>
                    </PhotoCaption>
                  </PhotoFigure>
                );
              })}
            </Masonry>
            {hasMore && (
              <LoadMoreRow>
                <LoadMoreButton onClick={() => setVisibleCount((count) => count + pageSize)}>
                  {content.gallery.loadMore}
                </LoadMoreButton>
              </LoadMoreRow>
            )}
          </>
        )}

        <GalleryCtaBar>
          <GalleryCtaText>
            {content.gallery.ctaText} <Calendar size={16} strokeWidth={ICON_STROKE_WIDTH} />
          </GalleryCtaText>
          <GalleryCtaButton href={waLink(content.gallery.whatsappMessage)} target="_blank" rel="noopener noreferrer">
            {content.gallery.cta} <MessageCircle size={18} strokeWidth={ICON_STROKE_WIDTH} />
          </GalleryCtaButton>
        </GalleryCtaBar>
      </Page>

      {openPhoto && (
        <LightboxOverlay onClick={() => setOpenIdx(null)}>
          <LightboxInner onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <LightboxImage as="img" src={openPhoto.src} alt={openCaption} />
            <LightboxFooter>
              <LightboxTag>{content.gallery.filters[openPhoto.category]}</LightboxTag>
              <LightboxAlt>{openCaption}</LightboxAlt>
              <LightboxClose onClick={() => setOpenIdx(null)} aria-label="Cerrar">
                <X size={16} strokeWidth={ICON_STROKE_WIDTH} />
              </LightboxClose>
            </LightboxFooter>
          </LightboxInner>
        </LightboxOverlay>
      )}
    </GallerySection>
  );
};

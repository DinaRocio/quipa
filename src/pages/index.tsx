import fs from "fs";
import { GetStaticProps } from "next";
import Head from "next/head";
import path from "path";
import { useRouter } from "next/router";

import { Header } from "@/components/header";
import { Resources } from "@/components/resources";
import { Gallery, GalleryCategory, GalleryPhoto } from "@/components/gallery";
import { Footer } from "@/components/footer";
import { Faq } from "@/components/faq";
import { MeetTheTeam } from "@/components/team";
import { FloatingWhatsapp } from "@/components/floatingWhatsapp";
import { useContent } from "@/content";

const SITE_URL = "https://qhipa.club";

const GALLERY_CATEGORIES: GalleryCategory[] = ["conversation", "integration"];
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function listGalleryPhotos(): GalleryPhoto[] {
  const galleryDir = path.join(process.cwd(), "public", "images", "gallery");

  return GALLERY_CATEGORIES.flatMap((category) => {
    const categoryDir = path.join(galleryDir, category);
    if (!fs.existsSync(categoryDir)) return [];

    return fs
      .readdirSync(categoryDir)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort()
      .map((file) => ({ category, src: `/images/gallery/${category}/${file}` }));
  });
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { galleryPhotos: listGalleryPhotos() } };
};

interface HomeProps {
  galleryPhotos: GalleryPhoto[];
}

export default function Home({ galleryPhotos }: HomeProps) {
  const content = useContent();
  const { locale } = useRouter();

  const path = locale === "en" ? "/en" : "/";
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogLocale = locale === "en" ? "en_US" : "es_PE";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: content.structuredData.name,
    description: content.structuredData.description,
    url: canonicalUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cajamarca",
      addressCountry: "PE",
    },
    sameAs: [
      "https://web.facebook.com/QhipaClub",
      "https://www.instagram.com/qhipa.slc/",
      "https://www.tiktok.com/@qhipa.slc",
    ],
  };

  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />

        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="es" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={content.meta.title} />
        <meta property="og:description" content={content.meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:image" content={`${SITE_URL}/images/brand/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.title} />
        <meta name="twitter:description" content={content.meta.description} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main>
        <Header />
        <Resources />
        <Gallery photos={galleryPhotos} />
        <Faq />
        <MeetTheTeam />
        <Footer />
      </main>
      <FloatingWhatsapp />
    </>
  );
}

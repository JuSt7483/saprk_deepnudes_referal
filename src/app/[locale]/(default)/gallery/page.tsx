import Heading from '@/components/UI/primitives/Heading/Heading'
import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import "./style.scss"
import { getStrapiData } from '../../../../shared/actions/getStrapiData';
import { getLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { WebPage, WithContext } from "schema-dts";
import Script from 'next/script';

const jsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Free AI Nudes Gallery NSFW - Explore the Best AI Nude Creations",
  "url": "https://ai-deep-nude.com/gallery",
  "description": "Browse our gallery of free AI nudes created with advanced technology. Discover realistic AI nude images, explore nude photo editors, and more for free!",
  "image": "https://ai-deep-nude.com/images/gallery-preview.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "AI Deep Nude",
    "url": "https://ai-deep-nude.com",
    "logo": "https://ai-deep-nude.com/Images/logo.png"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ai-deep-nude.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gallery",
        "item": "https://ai-deep-nude.com/gallery"
      }
    ]
  }
};

// export const metadata: Metadata = {
//   title: "Free AI Nudes Gallery NSFW- Explore the Best AI Nude Creations",
//   description: "Browse our gallery NSFW of free AI nudes created with advanced technology. Discover realistic AI nude images, explore nude photo editors, and more for free!",
//   openGraph: {
//     title: "Free AI Nudes Gallery NSFW- Explore the Best AI Nude Creations",
//     description: "Browse our gallery NSFW of free AI nudes created with advanced technology. Discover realistic AI nude images, explore nude photo editors, and more for free!",
//     url: process.env.NEXT_PUBLIC_URL + "/gallery" || "https://ai-deep-nude.com/gallery",
//     images: process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp",
//     type: "website",
//     siteName: "AI Deep Nude - Advanced AI for Nude Photo Editing and NSFW"
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Free AI Nudes Gallery NSFW- Explore the Best AI Nude Creations",
//     description: "Browse our gallery NSFW of free AI nudes created with advanced technology. Discover realistic AI nude images, explore nude photo editors, and more for free!",
//     images: process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp",
//     site: "@YourTwitterHandle"
//   }
// };

export async function generateMetadata() {
    const locale = await getLocale()

    console.log(locale)

    return {
        title: "Free AI Nudes Gallery NSFW- Explore the Best AI Nude Creations",
        description: "Browse our gallery NSFW of free AI nudes created with advanced technology. Discover realistic AI nude images, explore nude photo editors, and more for free!",
        openGraph: {
          title: "Free AI Nudes Gallery NSFW- Explore the Best AI Nude Creations",
          description: "Browse our gallery NSFW of free AI nudes created with advanced technology. Discover realistic AI nude images, explore nude photo editors, and more for free!",
          url: process.env.NEXT_PUBLIC_URL + "/gallery" || "https://ai-deep-nude.com/gallery",
          images: process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp",
          type: "website",
          siteName: "AI Deep Nude - Advanced AI for Nude Photo Editing and NSFW",
          locale: locale
        },
        twitter: {
          card: "summary_large_image",
          title: "Free AI Nudes Gallery NSFW- Explore the Best AI Nude Creations",
          description: "Browse our gallery NSFW of free AI nudes created with advanced technology. Discover realistic AI nude images, explore nude photo editors, and more for free!",
          images: process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp",
          site: "@YourTwitterHandle"
        }
    };
}

const BlogPage = async () => {
    const locale = await getLocale()
    const strapiDataPosts = await getStrapiData(`/api/articles?sort[0]=order:asc&populate=*&locale=${locale}`);
    const { data } = strapiDataPosts;

    return (
        <div className="blog-page">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <Heading breadcrump={[{ title: "Gallery" }]}>Gallery</Heading>
            <ul className="blog-page__grid">
                {data.map((entry: any, index: number) => (
                    <Link href={"/blog/" + entry.slug} className={`blog-page__block blog-page__block--${index + 1}`} key={index}>
                        <Image
                            src={process.env.NODE_ENV === "development" ? process.env.STRAPI_URL + entry.cover.url : entry.cover.url}
                            alt=""
                            width={0}
                            height={0}
                            className="blog-page__block-image"
                            unoptimized
                        />
                        <div className="blog-page__block-content">
                            {entry.category && 
                                <div className={`blog-page__block-badge blog-page__block-badge--color-${entry.category.badge_color || "orange"}`}>
                                    {entry.category.name}
                                </div>
                            }
                            <h4 className={`blog-page__block-title blog-page__block-title--size-${index < 2 ? 24 : 18}`}>
                                {entry.title || "Title"}
                            </h4>
                            {entry.description &&
                                <div className="blog-page__block-description">
                                    <p>
                                        {entry.description}
                                    </p>
                                </div>
                            }
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default BlogPage
import Heading from '@/components/UI/primitives/Heading/Heading'
import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import "./style.scss"
import { getStrapiData } from '../../../../shared/actions/getStrapiData';
import { getLocale } from 'next-intl/server';
import { Blog, WithContext } from "schema-dts";
import Script from 'next/script';
import BlogItem from "@/components/BlogItem/BlogItem";

const jsonLd: WithContext<Blog> = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "AI Nude Blog - Insights, Tips, and Trends for AI Nude Makers",
  "url": "https://ai-deep-nude.com/blog",
  "description": "Explore the AI Nude Blog for tips, tutorials, and the latest trends in AI nude generators. Stay updated on tools, guides, and AI-powered photo editing.",
  "image": "https://ai-deep-nude.com/Images/Metadata/blog-preview.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "AI Deep Nude",
    "url": "https://ai-deep-nude.com",
    "logo": "https://ai-deep-nude.com/Images/Logo.png"
  },
  // @ts-expect-error because no such field in schema-dts but there is in SEO specialist documents
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
        "name": "Blog",
        "item": "https://ai-deep-nude.com/blog"
      }
    ]
  }
};

export async function generateMetadata() {
    const locale = await getLocale()

    console.log(locale)

    return {
        title: "AI Nude Blog - Insights, Tips, and Trends for AI Nude Maker",
        description: "Explore the AI Nude Blog for tips, tutorials, and the latest trends in AI nude generators. Stay updated on tools, guides, and AI-powered photo editing.",
        openGraph: {
            title: "AI Nude Blog - Insights, Tips, and Trends for AI Nude Maker",
            description: "Explore the AI Nude Blog for tips, tutorials, and the latest trends in AI nude generators. Stay updated on tools, guides, and AI-powered photo editing.",
          url: process.env.NEXT_PUBLIC_URL + "/blog" || "https://ai-deep-nude.com/blog",
          images: process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp",
          type: "website",
          siteName: "AI Deep Nude - Advanced AI for Nude Photo Editing and NSFW",
          locale: locale
        },
        twitter: {
          card: "summary_large_image",
          title: "AI Nude Blog - Insights, Tips, and Trends for AI Nude Maker",
        description: "Explore the AI Nude Blog for tips, tutorials, and the latest trends in AI nude generators. Stay updated on tools, guides, and AI-powered photo editing.",
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
            <Heading breadcrump={[{ href: "/blog", title: "Blog" }]}>Blog</Heading>
            <ul className="blog-page__grid">
                {data.slice(0, 4).map((entry: any, index: number) => (
                    <BlogItem key={entry.documentId} entry={entry} />
                ))}
            </ul>
        </div>
    )
}

export default BlogPage
import Heading from '@/components/UI/primitives/Heading/Heading';
import "../style.scss"
import Image from 'next/image';
import BlogTextRenderer from '@/components/BlogTextRenderer/BlogTextRenderer';
import { ShareIcon } from '@/components/UI/svg';
import { getStrapiData } from '@/shared/actions/getStrapiData';
import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Article, WithContext } from "schema-dts";
import Script from 'next/script';

export async function generateMetadata({ params: { slug } } : { params: { slug: string; } }) {
    const locale = await getLocale()
    const strapiData = await getStrapiData(`/api/articles?filters[slug][$eq]=${slug}&populate=blocks&locale=${locale}`);

    const { data } = strapiData;
    
    console.log(data[0])

    const seo = data[0].blocks.find((v: any) => v.__component === "shared.seo")
    const title = data[0].title;
    const description = data[0].description;

    return {
        title: seo ? seo.metaTitle : title,
        description: seo ? seo.metaDescription : description,
        openGraph: {
            title: seo ? seo.metaTitle : title,
            description: seo ? seo.metaDescription : description,
            url: process.env.NEXT_PUBLIC_URL + `/blog/${slug}` || `https://ai-deep-nude.com/blog/${slug}`,
            images: seo ? seo.shareImage : (process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp"),
            type: "article",
            siteName: "AI Deep Nude",
            locale: locale
        },
        twitter: {
            card: "summary_large_image",
            title: seo ? seo.metaTitle : title,
            description: seo ? seo.metaDescription : description,
            images: seo ? seo.shareImage : (process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp"),
            site: "@YourTwitterHandle"
        }
    };
}

export default async function BlogPage({ params: { slug } } : { params: { slug: string; } }) {
    const locale = await getLocale()
    const strapiData = await getStrapiData(`/api/articles?filters[slug][$eq]=${slug}&populate=*&locale=${locale}`);

    const { data } = strapiData;

    let authorData: any = null;

    if(data[0].author?.documentId)
    {
        const strapiDataAuthors = await getStrapiData(`/api/authors/${data[0].author?.documentId}?populate=avatar&locale=${locale}`);
        authorData = strapiDataAuthors.data;
    }

    if(!data || !authorData)
        return notFound()

    const seo = data[0].blocks.find((v: any) => v.__component === "shared.seo")
    const title = data[0].title;
    const description = data[0].description;
    const published = new Date(data[0].publishedAt).toISOString().split('T')[0];
    const modified = new Date(data[0].updatedAt).toISOString().split('T')[0];


    console.log(published)

    const jsonLd: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": seo ? seo.metaTitle : title,
        "description": seo ? seo.metaDescription : description,
        "url": process.env.NEXT_PUBLIC_URL + `/blog/${slug}` || `https://ai-deep-nude.com/blog/${slug}`,
        "image": seo ? seo.shareImage : (process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp"),
        "author": {
        "@type": "Person",
        "name": "AI Deep Nude Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "AI Deep Nude",
            "logo": "https://ai-deep-nude.com/Images/Logo.png"
        },
        "datePublished": published,
        "dateModified": modified
    }

    return (
        <div className="blog-entry-page">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <Heading breadcrump={[{ href: "/blog", title: "Blog" }, { title: data[0].title }]}>{data[0].title}</Heading>
            <div className="blog-entry-page__header">
                <Image 
                    alt="Cover Image"
                    className="blog-entry-page__image"
                    width={0}
                    unoptimized
                    height={0}
                    src={process.env.NODE_ENV === "development" ? process.env.STRAPI_URL + data[0].cover.url : data[0].cover.url}
                />
                {authorData !== null && 
                    <div className="blog-entry-page__author">
                        <Image 
                            alt="Author Avatar"
                            className="blog-entry-page__author-avatar"
                            width={64}
                            unoptimized
                            height={64}
                            src={process.env.NODE_ENV === "development" ? process.env.STRAPI_URL + authorData.avatar.url : authorData.avatar.url}
                        />
                        <div className="blog-entry-page__author-name">
                            {data[0].author.name || "No Name Author"}
                        </div>
                        {data[0].author.description &&
                            <div className="blog-entry-page__author-description">
                                {data[0].author.description}
                            </div>
                        }
                        <button className='blog-entry-page__author-button'>
                            <div className="icon">
                                <ShareIcon />
                            </div>
                        </button>
                    </div>
                }
            </div>
            {data[0].blocks.length ?
                <BlogTextRenderer blocks={data[0].blocks[0].Blocks} />  :
                <div className="blog-page__description">
                    No text :(
                </div>
            }
        </div>
    );
}
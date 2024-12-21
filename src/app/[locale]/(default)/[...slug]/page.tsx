import Heading from '@/components/UI/primitives/Heading/Heading';
import BlogTextRenderer from '@/components/BlogTextRenderer/BlogTextRenderer';
import { getStrapiData } from '@/shared/actions/getStrapiData';
import { notFound } from 'next/navigation';
import { getLocale } from 'next-intl/server';
import Script from 'next/script';

export async function generateMetadata({ params: { slug } } : { params: { slug: string; } }) {
    const locale = await getLocale()
    const strapiData = await getStrapiData(`/api/${slug}?locale=${locale}&populate=seo`);

    const { data } = strapiData;
    
    console.log(data)

    if(!data) return {}

    const seo = data.seo
    const title = data.Title;

    return {
        title: seo ? seo.metaTitle : title,
        description: seo ? seo.metaDescription : "",
        openGraph: {
            title: seo ? seo.metaTitle : title,
            description: seo ? seo.metaDescription : "",
            url: process.env.NEXT_PUBLIC_URL + `/${slug}` || `https://ai-deep-nude.com/${slug}`,
            images: seo ? seo.shareImage : (process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp"),
            type: "website",
            siteName: "AI Deep Nude",
            locale: locale
        },
        twitter: {
            card: "summary_large_image",
            title: seo ? seo.metaTitle : title,
            description: seo ? seo.metaDescription : "",
            images: seo ? seo.shareImage : (process.env.NEXT_PUBLIC_URL ? process.env.NEXT_PUBLIC_URL + "/Images/Metadata/og-image.webp" : "https://ai-deep-nude.com/Images/Metadata/og-image.webp"),
            site: "@YourTwitterHandle"
        }
    };
}

export default async function InfoPage({ params: { slug } } : { params: { slug: string; } }) {
    const locale = await getLocale()
    const strapiData = await getStrapiData(`/api/${slug}?locale=${locale}`);

    if(!strapiData)
        return notFound();

    const { data } = strapiData;

    console.log(data)

    if(!data)
        return notFound();

    return (
        <div className="blog-entry-page">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(data.seo?.metaSchema) || "",
                }}
            />
            <Heading breadcrump={[{ title: data.Title || "Title" }]}>{data.Title || "Title"}</Heading>
            {data.Text ?
                <BlogTextRenderer blocks={data.Text} /> :
                <div className="blog-page__description">
                    No text :(
                </div>
            }
        </div>
    );
}
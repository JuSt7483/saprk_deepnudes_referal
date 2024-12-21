import Heading from '@/components/UI/primitives/Heading/Heading';
import "../style.scss"
import Image from 'next/image';
import BlogTextRenderer from '@/components/BlogTextRenderer/BlogTextRenderer';
import { ShareIcon } from '@/components/UI/svg';
import { getStrapiData } from '@/shared/actions/getStrapiData';
import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

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

    return (
        <div className="blog-entry-page">
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
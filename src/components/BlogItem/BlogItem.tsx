import React from 'react';
import Image from "next/image";
import Link from "next/link";
import "./BlogItem.scss"
import {useFormatter} from "next-intl";

interface BlogItemProps extends React.HTMLAttributes<HTMLDivElement> {
    entry: any;
    variant?: "grid" | "scroll"
}

const BlogItem = ({ className, entry, variant = "grid" }: BlogItemProps) => {
    const format = useFormatter();
    return (
        <Link href={`/blog/${entry.slug}`} className={`blog-item blog-item--variant-${variant} ${className ?? ""}`}>
            <Image
                src={process.env.NODE_ENV === "development" ? process.env.STRAPI_URL + entry.cover.url : entry.cover.url}
                alt=""
                width={0}
                height={0}
                className="blog-item-image"
                unoptimized
            />
            <div className="blog-item-content">
                {entry.category &&
                    <div className={`blog-item-badge blog-item-badge--color-${entry.category.badge_color || "orange"}`}>
                        {entry.category.name}
                    </div>
                }
                <h4 className={`blog-item-title ${variant === "scroll" ? "blog-item-title--size-16" : ""}`}>
                    {entry.title || "Title"}
                </h4>
                <div className="blog-item-date">
                    {format.relativeTime(new Date(entry.publishedAt), new Date())}
                </div>
                {/*{entry.description &&*/}
                {/*    <div className="blog-item-description">*/}
                {/*        <p>*/}
                {/*            {entry.description}*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*}*/}
            </div>
        </Link>
    );
};

export default BlogItem;
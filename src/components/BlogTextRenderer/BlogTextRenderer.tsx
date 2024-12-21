"use client";

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react'
import "./BlogTextRenderer.scss"

const BlogTextRenderer = ({ blocks }: { blocks: BlocksContent }) => {
    return (
        <BlocksRenderer
            content={blocks} 
            blocks={{
                // You can use the default components to set class names...
                paragraph: ({ children }) => <p className="text-renderer__text">{children}</p>,
                // ...or point to a design system
                heading: ({ children, level }) => {
                    switch (level) {
                        case 1:
                            return <h1>{children}</h1>
                        case 2:
                            return <h2>{children}</h2>
                        case 3:
                            return <h3>{children}</h3>
                        default:
                            return <h4>{children}</h4>
                    }
                },
                // For links, you may want to use the component from your router or framework
                    link: ({ children, url }) => <Link href={url}>{children}</Link>,
                    image: ({ image }) => <Image 
                        alt=""
                        height={image.height}
                        width={image.width}
                        className='text-renderer__image'
                        src={image.url}
                        unoptimized
                    />
                }}
                modifiers={{
                    bold: ({ children }) => <strong>{children}</strong>,
                    italic: ({ children }) => <span className="text-renderer__text--italic">{children}</span>,
                }}
        />
    )
}

export default BlogTextRenderer